import TabBar from "./components/TabBar.js"; // TabBar 컴포넌트 import (탭 UI 담당)
import Content from "./components/Content.js"; // Content 컴포넌트 import (내용 표시 담당)
import { request } from "./components/api.js";

// App 컴포넌트: 전체 애플리케이션의 메인 컴포넌트
// $app: 루트 DOM 엘리먼트
export default function App($app) {
  // 애플리케이션의 전역 상태 관리
  this.state = {
    currentTab: "all", // 현재 선택된 탭 (기본값: 전체)
    photos: [], // 현재 탭에 해당하는 사진 데이터 배열
  };

  // TabBar와 Content 컴포넌트 인스턴스 생성
  const tabBar = new TabBar({
    $app,
    initialState: "", // TabBar의 초기 상태 (빈 문자열로 시작)
    onClick: async (name) => {
      // 탭 클릭 시 실행되는 비동기 함수
      // 새로운 탭이 선택되면 상태를 업데이트하고 해당 탭의 데이터를 가져옴
      this.setState({
        ...this.state, // 기존 상태 유지
        currentTab: name, // 선택된 탭으로 상태 업데이트
        photos: await request(name), // API에서 해당 탭의 사진 데이터 요청
      });
    },
  });

  const content = new Content();
  // $app(루트 엘리먼트)에 컴포넌트들을 마운트하는 로직은 각 컴포넌트 내부에서 처리하거나, 추후 추가 가능

  // 전역 상태를 업데이트하는 메서드
  this.setState = (newState) => {
    // 새로운 상태로 업데이트
    this.state = newState;
    // 하위 컴포넌트들의 상태도 함께 업데이트
    tabBar.setState(this.state.currentTab); // TabBar에 현재 탭 상태 전달
    content.setState(this.state.photos); // Content에 사진 데이터 전달
  };
}

// 웹 페이지 초기 상태 설정 함수
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
// App 컴포넌트는 전체 앱의 구조를 잡고, 하위 컴포넌트(TabBar, Content)를 조립하는 역할을 한다.
