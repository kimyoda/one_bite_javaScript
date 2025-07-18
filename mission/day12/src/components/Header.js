// Header 컴포넌트: 상단 타이틀, 검색창, 클릭/검색 이벤트를 관리합니다.
export default function Header({
  $app, // 부모 DOM 요소
  initialState, // 초기 상태 (currentPage, searchWord)
  handleClick, // 타이틀 클릭 시 호출 함수
  handleSearch, // 검색 실행 함수
}) {
  this.state = initialState;
  this.$target = document.createElement("div");
  this.$target.className = "header";

  // Header 영역을 앱에 추가
  $app.appendChild(this.$target);
  this.handleClick = handleClick;
  this.handleSearch = handleSearch;

  // Header의 HTML 구조를 반환하는 함수
  this.template = () => {
    const { currentPage, searchWord } = this.state;

    // 타이틀(로고) 영역 생성
    let temp = `<div class='header-content' id="title">
    <img src='/src/img/ball.webp' width=40px height=40px></img>
    포켓몬 도감</div>`;

    // 메인 페이지일 때만 검색창 표시 (상세 페이지에서는 검색창 숨김)
    if (!currentPage.includes("/detail")) {
      temp += `<div class="search">
        <input type="text" placeholder="포켓몬을 검색하세요!" id="search" autocomplete="off" value="${decodeURIComponent(
          searchWord
        )}"></input>
        <button id="search-button"><img src="src/img/search.png"></img></button>
    </div>`;
    }

    return temp;
  };

  // Header를 렌더링하고, 이벤트 리스너를 등록하는 함수
  this.render = () => {
    this.$target.innerHTML = this.template();

    // 타이틀 클릭 시 홈으로 이동 (handleClick 호출)
    const $title = document.getElementById("title");
    $title.addEventListener("click", () => {
      this.handleClick();
    });

    // 상세 페이지가 아닐 때만 검색창 이벤트 등록
    if (!this.state.currentPage.includes("/detail")) {
      const $searchInput = document.getElementById("search");
      const $searchButton = document.getElementById("search-button");

      // 검색 버튼 클릭 시 handleSearch 함수 실행 (검색어 전달)
      $searchButton.addEventListener("click", () => {
        this.handleSearch($searchInput.value);
      });

      // 엔터 키로도 검색 가능하게 추가
      // 사용자가 검색 input에서 엔터(Enter)를 누르면 handleSearch가 실행되어 검색이 동작함
      $searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          this.handleSearch($searchInput.value);
        }
      });
    }
  };

  // setState: 상태를 변경하고, 화면을 다시 렌더링하는 함수
  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  // 최초 렌더링
  this.render();
}
