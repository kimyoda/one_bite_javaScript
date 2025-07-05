// TabBar 컴포넌트: 탭 UI를 담당하는 컴포넌트
// $app: 부모 엘리먼트, initialState: 초기 선택된 탭, onClick: 탭 클릭 시 실행될 콜백 함수
export default function TabBar({ $app, initialState, onClick }) {
  // 컴포넌트의 상태를 저장하는 프로퍼티
  this.state = initialState;
  // 탭 클릭 시 실행될 콜백 함수 저장
  this.onClick = onClick;

  // 탭바를 위한 DOM 엘리먼트 생성
  this.$target = document.createElement("div");
  this.$target.className = "tab-bar";
  // 부모 엘리먼트에 탭바 추가
  $app.appendChild(this.$target);

  // 탭바의 HTML 템플릿을 생성하는 메서드
  this.template = () => {
    // 4개의 탭(전체, 펭귄, 코알라, 판다)을 HTML 문자열로 생성
    let temp = `<div id="all">전체</div><div id="penguin">펭귄</div><div id="koala">코알라</div><div id="panda">판다</div>`;

    return temp;
  };

  // UI를 렌더링하는 메서드
  this.render = () => {
    // 템플릿을 기반으로 DOM 업데이트
    this.$target.innerHTML = this.template();

    // 현재 선택된 탭을 찾아서 'clicked' 클래스 추가
    let $currentTab = document.getElementById(this.state);
    // 현재 탭이 존재하면 'clicked' 클래스를 추가하여 시각적으로 선택된 상태 표시
    $currentTab && ($currentTab.className = "clicked");

    // 모든 탭 요소에 클릭 이벤트 리스너 추가
    const $tabBar = this.$target.querySelectorAll("div");
    $tabBar.forEach((el) => {
      el.addEventListener("click", () => {
        // 탭 클릭 시 해당 탭의 id를 콜백 함수에 전달
        onClick(el.id);
      });
    });
  };

  // 상태를 업데이트하는 메서드 (외부에서 호출됨)
  this.setState = (newState) => {
    // 새로운 상태로 업데이트
    this.state = newState;
    // 상태 변경 후 UI 다시 렌더링
    this.render();
  };

  // 컴포넌트 초기화 시 렌더링 실행
  this.render();
}

// 기본적인 상태관리 틀

// this.state = {
//   // 초기 상태 값들
// };

// this.state = (nextState) => {
//   this.state = nextState;
//   // 상태 업데이트 후 렌더링
//   this.render();
// };

// this.render() {
//   // UI 렌더링 로직
// };
