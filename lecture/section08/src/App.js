import TabBar from "./components/TabBar"; // TabBar 컴포넌트 import (탭 UI 담당)
import Content from "./components/Content"; // Content 컴포넌트 import (내용 표시 담당)

export default function App($app) {
  // TabBar와 Content 컴포넌트 인스턴스 생성
  const tabBar = new TabBar();
  const content = new Content();
  // $app(루트 엘리먼트)에 컴포넌트들을 마운트하는 로직은 각 컴포넌트 내부에서 처리하거나, 추후 추가 가능
}
// App 컴포넌트는 전체 앱의 구조를 잡고, 하위 컴포넌트(TabBar, Content)를 조립하는 역할을 한다.
