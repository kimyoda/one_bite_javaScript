import TabBar from "./components/TabBar.js"; // TabBar: 탭 UI 담당 컴포넌트
import Content from "./components/Content.js"; // Content: 사진 목록 표시 컴포넌트
import { request } from "./components/api.js"; // API 요청 함수

// App 컴포넌트: 전체 애플리케이션의 메인(최상위) 컴포넌트
// $app: 루트 DOM 엘리먼트(앱이 마운트될 최상위 요소)
export default function App($app) {
  // 1. 전역 상태(state) 관리
  // - currentTab: 현재 선택된 탭 이름
  // - photos: 현재 탭에 해당하는 사진 데이터 배열
  this.state = {
    // [오늘 추가] 현재 URL 경로에 따라 초기 탭을 결정 (새로고침/직접 진입 시에도 URL 반영)
    currentTab: window.location.pathname.replace("/", "") || "all",
    photos: [], // 사진 데이터는 비어있음(초기값)
  };

  // 2. TabBar와 Content 컴포넌트 인스턴스 생성
  // TabBar: 탭 UI를 담당, 탭 클릭 시 onClick 콜백 실행
  const tabBar = new TabBar({
    $app, // 루트 엘리먼트 전달
    initialState: "", // TabBar의 초기 상태(선택된 탭 없음)
    onClick: async (name) => {
      // [오늘 추가] 탭 클릭 시 SPA 방식으로 URL을 변경하고, 해당 탭의 데이터를 불러옴
      history.pushState(null, `${name} 사진`, `/${name}`); // URL 변경 (SPA)
      this.updateContent(name); // 해당 탭 데이터 갱신
    },
  });

  // Content: 사진 목록을 보여주는 컴포넌트
  const content = new Content({
    $app, // 루트 엘리먼트 전달
    initialState: [], // 사진 데이터는 비어있음(초기값)
  });
  // (참고) 각 컴포넌트는 생성 시 DOM에 마운트됨

  // 3. 전역 상태를 업데이트하는 메서드
  // - 상태가 바뀌면 하위 컴포넌트(TabBar, Content)도 함께 갱신
  this.setState = (newState) => {
    this.state = newState; // 새로운 상태로 업데이트
    tabBar.setState(this.state.currentTab); // TabBar에 현재 탭 상태 전달
    content.setState(this.state.photos); // Content에 사진 데이터 전달
  };

  this.updateContent = async (tabName) => {
    try {
      // [오늘 추가] 탭 이름에 따라 API 요청 및 상태 갱신
      const currentTab = tabName === "all" ? "" : tabName;
      const photos = await request(currentTab); // API 요청
      this.setState({
        ...this.state,
        currentTab: tabName,
        photos: photos,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // [오늘 추가] 뒤로가기/앞으로가기(popstate) 시, URL에 맞는 탭 데이터로 갱신
  window.addEventListener("popstate", async () => {
    this.updateContent(window.location.pathname.replace("/", ""));
  });

  const init = async () => {
    this.updateContent(this.state.currentTab);
  };

  init();
}
