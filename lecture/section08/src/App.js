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
    currentTab: "all", // 기본값: 전체 탭
    photos: [], // 사진 데이터는 비어있음(초기값)
  };

  // 2. TabBar와 Content 컴포넌트 인스턴스 생성
  // TabBar: 탭 UI를 담당, 탭 클릭 시 onClick 콜백 실행
  const tabBar = new TabBar({
    $app, // 루트 엘리먼트 전달
    initialState: "", // TabBar의 초기 상태(선택된 탭 없음)
    onClick: async (name) => {
      // 탭 클릭 시 실행되는 비동기 함수
      // 1) 상태의 currentTab을 클릭한 탭으로 변경
      // 2) 해당 탭에 맞는 사진 데이터를 API에서 받아옴
      // 3) setState로 상태를 갱신(하위 컴포넌트도 자동 갱신)
      this.setState({
        ...this.state, // 기존 상태 유지
        currentTab: name, // 선택된 탭으로 상태 업데이트
        photos: await request(name === "all" ? '' : name), // API에서 해당 탭의 사진 데이터 요청
      });
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
}

// (참고) 아래 코드는 실제로 동작하지 않음. 
// App 컴포넌트 외부에서 this.setState를 쓸 수 없음.
// 실제 초기 데이터 로딩은 App 생성 시 내부에서 처리해야 함.
// 아래 코드는 예시로 남겨둔 것임.
/*
const init = async () => {
  try {
    // 앱 시작 시 전체 탭의 사진 데이터를 가져와서 초기 상태 설정
    const initialPhotos = await request();
    this.setState({
      ...this.state,
      photos: initialPhotos,
    });
  } catch (err) {
    console.log(err);
  }

  init();
};
*/
// App 컴포넌트는 전체 앱의 구조를 잡고, 하위 컴포넌트(TabBar, Content)를 조립하는 역할을 한다.
