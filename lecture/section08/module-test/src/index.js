// 페이지를 변경하는 함수
const changePage = (page) => {
  // id가 'content'인 요소를 가져와서
  let $content = document.getElementById("content");
  // 해당 요소의 텍스트를 현재 페이지로 변경
  $content.textContent = `현재 보고 있는 페이지는 ${page} 페이지입니다.`;
  // 브라우저의 히스토리에 상태를 push (주소만 바뀌고 새로고침 없음)
  history.pushState({ page: page }, `Title ${page}`, `/${page}`);
};

// popstate 이벤트: 뒤로가기/앞으로가기 시 실행됨
window.addEventListener("popstate", (event) => {
  // event.state가 있으면(즉, pushState로 저장된 상태가 있으면)
  if (event.state) {
    let $content = document.getElementById("content");
    // 해당 상태의 page 정보로 텍스트 변경
    $content.textContent = `현재 보고 있는 페이지는 ${event.state.page} 페이지입니다.`;
  }
});

// 각 페이지 버튼에 클릭 이벤트 등록
// 'page1' 버튼 클릭 시 changePage('page1') 실행
// 'page2' 버튼 클릭 시 changePage('page2') 실행
// 'page3' 버튼 클릭 시 changePage('page3') 실행
document.getElementById("page1").addEventListener("click", () => {
  changePage("page1");
});
document.getElementById("page2").addEventListener("click", () => {
  changePage("page2");
});
document.getElementById("page3").addEventListener("click", () => {
  changePage("page3");
});

// 뒤로가기 함수: 브라우저의 뒤로가기 기능 호출
const goBack = () => {
  history.back();
};

// 앞으로가기 함수: 브라우저의 앞으로가기 기능 호출
const goForword = () => {
  history.forward();
};

// 뒤로가기/앞으로가기 버튼에 이벤트 등록
document.getElementById("goBack").addEventListener("click", goBack);
document.getElementById("goForward").addEventListener("click", goForword);
