//COMPONENTS
import Header from "./components/Header.js";
import PokemonList from "./components/PokemonList.js";
import PokemonDetail from "./components/PokemonDetail.js";

//APIS
import { getPokemonList, getPokemonDetail } from "./modules/api.js";

// App 컴포넌트: 전체 앱의 상태와 렌더링을 관리
export default function App($app) {
  // 현재 URL에서 검색어를 추출하는 함수
  const getSearchWord = () => {
    if (window.location.search.includes("search=")) {
      return window.location.search.split("search=")[1];
    }
    return "";
  };

  // App 전체에서 관리할 상태(state)
  // type: 현재 선택된 타입
  // pokemonList: 화면에 보여줄 포켓몬 리스트
  // searchWord: 검색어
  // currentPage: 현재 페이지 경로
  this.state = {
    type: window.location.pathname.replace("/", ""),
    pokemonList: [],
    searchWord: getSearchWord(),
    currentPage: window.location.pathname,
  };

  // Header 컴포넌트를 렌더링하는 함수
  // - 타이틀 클릭 시 홈으로 이동
  // - 검색 시 검색 결과로 이동
  const renderHeader = () => {
    new Header({
      $app,
      initialState: {
        currentPage: this.state.currentPage,
        searchWord: this.state.searchWord,
      },
      handleClick: async () => {
        // 타이틀 클릭 시 홈으로 이동 및 전체 포켓몬 리스트 불러오기
        history.pushState(null, null, "/");
        const pokemonList = await getPokemonList();
        this.setState({
          ...this.state,
          pokemonList: pokemonList,
          type: "",
          searchWord: getSearchWord(),
          currentPage: "/",
        });
      },
      handleSearch: async (searchWord) => {
        // 검색 버튼 또는 엔터 입력 시 검색 결과로 이동
        history.pushState(null, null, `?search=${searchWord}`);
        const searchedPokemonList = await getPokemonList(
          this.state.type,
          searchWord
        );
        this.setState({
          ...this.state,
          searchWord: searchWord,
          pokemonList: searchedPokemonList,
          currentPage: `?search=${searchWord}`,
        });
      },
    });
  };

  // PokemonList 컴포넌트를 렌더링하는 함수
  // - 포켓몬 클릭 시 상세 페이지로 이동
  // - 타입 태그 클릭 시 해당 타입만 필터링
  const renderPokemonList = () => {
    new PokemonList({
      $app,
      initialState: this.state.pokemonList,
      handleItemClick: async (id) => {
        // 포켓몬 클릭 시 상세 페이지로 이동
        history.pushState(null, null, `/detail/${id}`);
        this.setState({
          ...this.state,
          currentPage: `/detail/${id}`,
        });
      },
      handleTypeClick: async (type) => {
        // 타입 태그 클릭 시 해당 타입의 포켓몬만 필터링
        history.pushState(null, null, `/${type}`);
        const pokemonList = await getPokemonList(type);
        this.setState({
          ...this.state,
          pokemonList: pokemonList,
          searchWord: getSearchWord(),
          type: type,
          currentPage: `/${type}`,
        });
      },
    });
  };

  // PokemonDetail 컴포넌트를 렌더링하는 함수
  // - 포켓몬 id로 상세 정보 불러오기
  const renderPokemonDetail = async (pokemonId) => {
    try {
      const pokemonDetailData = await getPokemonDetail(pokemonId);
      new PokemonDetail({
        $app,
        initialState: pokemonDetailData,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // 현재 상태에 따라 화면을 렌더링하는 함수
  // - 메인: 헤더+리스트, 상세: 헤더+상세
  const render = async () => {
    const path = this.state.currentPage;
    $app.innerHTML = "";
    // main 페이지(리스트)
    if (!path.startsWith("/detail")) {
      renderHeader();
      renderPokemonList();
    }
    // detail 페이지(상세)
    else {
      const pokemonId = path.split("/detail/")[1];
      renderHeader();
      renderPokemonDetail(pokemonId);
    }
  };

  // setState: 상태를 변경하고, 화면을 다시 렌더링하는 함수
  this.setState = (newState) => {
    this.state = newState;
    render();
  };

  // 앱이 처음 실행될 때 초기 데이터를 불러오고 화면을 렌더링하는 함수
  const init = async () => {
    const path = this.state.currentPage;
    // main 페이지(리스트)
    if (!path.startsWith("/detail")) {
      try {
        const initialPokemonList = await getPokemonList(
          this.state.type,
          this.state.searchWord
        );
        this.setState({
          ...this.state,
          pokemonList: initialPokemonList,
        });
      } catch (err) {
        console.log(err);
      }
    }
    // detail 페이지(상세)
    else {
      render();
    }
  };

  // 브라우저 뒤로가기/앞으로가기(popstate) 시 URL에 맞게 상태와 화면 갱신
  window.addEventListener("popstate", async () => {
    const urlPath = window.location.pathname;
    const prevType = urlPath.replace("/", "");
    const prevSearchWord = getSearchWord();
    const prevPokemonList = await getPokemonList(prevType, prevSearchWord);

    this.setState({
      ...this.state,
      type: prevType,
      pokemonList: prevPokemonList,
      searchWord: prevSearchWord,
      currentPage: urlPath,
    });
  });

  // 최초 실행
  init();
}
