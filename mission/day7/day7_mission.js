// Day7 미션
// index.js 파일을 생성하고, 파일의 내부에 버튼 클릭 시 텍스트 요소의 내용을 변경하는 함수를 작성하세요.

// DOM API를 사용하여 요소를 선택하고, 이벤트 리스너를 추가해야 합니다.

// 버튼과 text모두 특정 속성으로 가져온다.
const $button = document.getElementById('changeTextButton'); // id가 'changeTextButton'인 버튼 요소 선택
const $text = document.getElementById("text"); // id가 'text'인 텍스트 요소 선택

console.log($button); // 선택된 버튼 요소를 콘솔에 출력(디버깅용)
console.log($text);   // 선택된 텍스트 요소를 콘솔에 출력(디버깅용)
$button.id = "new-button"; // id 속성값을 'new-button'으로 변경 (동적으로 id를 바꿀 수 있음)
// 버튼에 클릭 이벤트 리스너를 추가하고, 클릭 시 텍스트 내용을 변경한다.
$button.addEventListener("click", () => {
  // textContent: 요소의 텍스트 내용을 바꿉니다. (HTML 태그는 적용되지 않음)
  $text.textContent = "오늘도 고생했어!"; // 버튼 클릭 시 텍스트가 변경됨
  console.log("버튼 클릭됨"); // 클릭 이벤트가 발생했음을 콘솔에 출력
  console.log($text.textContent); // 변경된 텍스트 내용을 콘솔에 출력
});


