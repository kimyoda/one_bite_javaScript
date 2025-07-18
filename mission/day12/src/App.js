//COMPONENTS
import PokemonList from "./components/PokemonList.js";
import Header from "./components/Header.js"; // 이 줄 추가

//APIS
import { getPokemonList } from "./modules/api.js";

export default function App($app) {
  // 현재 URL에서 검색어를 추출하는 함수입니다.
  const getSearchWord = () => {
    if (window.location.search.includes("search=")) {
      return window.location.search.split("search=")[1];
    }
    return "";
  };

  // App 전체에서 관리할 상태(state)입니다.
  // type: 현재 선택된 타입
  // pokemonList: 화면에 보여줄 포켓몬 리스트
  // searchWord: 검색어
  // currentPage: 현재 페이지 경로
  this.state = {
    type: "",
    pokemonList: [],
    searchWord: getSearchWord(),
    currentPage: window.location.pathname,
  };

  const header = new Header({
    //코드 작성
    $app,
    initialState: {
      currentPage: this.state.currentPage,
      searchWord: this.state.searchWord,
    },
    //'포켓몬 도감'을 클릭하면 "/" 홈으로 돌아갈 수 있도록 함수를 완성하세요.
    handleClick: async () => {
      history.pushState(null, null, `/`);
      const pokemonList = await getPokemonList();
      this.setState({
        ...this.state,
        pokemonList: pokemonList,
        type: "",
        searchWord: getSearchWord(),
        currentPage: "/",
      });
    },
    //'돋보기 모양'을 누르면 검색 결과를 나타내고, "(기존 url)/?search=searchWord"로 url을 변경하세요.
    handleSearch: async (searchWord) => {
      history.pushState(null, null, `?search=${searchWord}`);
      const searchPokemonList = await getPokemonList(
        this.state.type,
        searchWord
      );
      this.setState({
        ...this.state,
        searchWord: searchWord,
        pokemonList: searchPokemonList,
        currentPage: `?search=${searchWord}`,
      });
    },
  });

  // PokemonList 컴포넌트를 생성합니다.
  // - $app: 부모 DOM
  // - initialState: 초기 포켓몬 리스트
  // - handleItemClick: 포켓몬 이미지를 클릭했을 때 실행할 함수
  // - handleTypeClick: 타입 태그를 클릭했을 때 실행할 함수
  const pokemonList = new PokemonList({
    $app,
    initialState: this.state.pokemonList,

    // 포켓몬 이미지를 클릭하면 상세 페이지로 이동합니다.
    handleItemClick: async (id) => {
      // 브라우저 주소를 /detail/포켓몬ID로 변경
      history.pushState(null, null, `/detail/${id}`);
      // 상태를 변경하여, currentPage를 상세 페이지로 바꿉니다.
      this.setState({
        ...this.state,
        currentPage: `/detail/${id}`,
      });
    },

    // 타입 태그를 클릭하면 해당 타입의 포켓몬만 필터링해서 보여주고, URL도 변경합니다.
    handleTypeClick: async (type) => {
      // 브라우저 주소를 /타입명 으로 변경
      history.pushState(null, null, `/${type}`);
      // 해당 타입의 포켓몬 리스트를 비동기로 불러옵니다.
      const pokemonList = await getPokemonList(type);
      // 상태를 변경하여, 포켓몬 리스트와 타입, currentPage를 갱신합니다.
      this.setState({
        ...this.state,
        pokemonList: pokemonList,
        searchWord: getSearchWord(),
        type: type,
        currentPage: `/${type}`,
      });
    },
  });

  // App의 상태를 변경할 때 사용하는 함수입니다.
  // 1. 새로운 상태로 this.state를 갱신합니다.
  // 2. PokemonList 컴포넌트의 상태도 함께 갱신하여 화면을 다시 렌더링합니다.
  this.setState = (newState) => {
    this.state = newState;
    // PokemonList의 setState를 호출하여, 포켓몬 리스트 화면을 갱신합니다.
    pokemonList.setState(this.state.pokemonList);
  };

  // 앱이 처음 실행될 때 전체 포켓몬 리스트를 불러와 초기 상태로 설정하는 함수입니다.
  const init = async () => {
    try {
      // 전체 포켓몬 리스트를 비동기로 불러옵니다.
      const initialPockmonList = await getPokemonList();
      // 불러온 리스트를 상태에 저장하여, 화면에 포켓몬 리스트가 보이도록 합니다.
      this.setState({
        ...this.state,
        pokemonList: initialPockmonList,
      });
    } catch (err) {
      // 만약 데이터를 불러오는 중 에러가 발생하면 콘솔에 에러를 출력합니다.
      console.log(err);
    }
  };

  // 앱이 시작될 때 init 함수를 실행하여, 초기 데이터를 불러오고 화면을 렌더링합니다.
  init();
}
