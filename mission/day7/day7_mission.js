// Day7 미션
// index.js 파일을 생성하고, 파일의 내부에 버튼 클릭 시 텍스트 요소의 내용을 변경하는 함수를 작성하세요.

// DOM API를 사용하여 요소를 선택하고, 이벤트 리스너를 추가해야 합니다.

// 버튼과 text모두 특정 속성으로 가져온다.
const $button = document.getElementById('changeTextButton');
const $text = document.getElementById("text");

console.log($button);
console.log($text);
$button.id = "new-button"; // id 추가
// 버튼 추가 이벤트 리스너와 textContent를 통해 변경한다.
$button.addEventListener("click", () => {
  // textContent: 요소의 텍스트 내용을 바꿉니다. (HTML 태그는 적용되지 않음)
  $text.textContent = "오늘도 고생했어!";
  console.log("버튼 클릭됨");
  console.log($text.textContent);
});
