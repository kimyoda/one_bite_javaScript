// 폼(Form)이란
// 사용자와의 상호작용을 가능하게 하는 HTML 요소
// input, select, textarea 
// - input: 한 줄 텍스트, 체크박스, 라디오 등 다양한 입력을 받을 수 있음
// - select: 여러 옵션 중 하나를 선택할 수 있는 드롭다운
// - textarea: 여러 줄 텍스트 입력

// const $fruitSelect = document.getElementById('fruitSelect');
// - id가 'fruitSelect'인 select 요소를 선택

// $fruitSelect.addEventListener('change', (event) => {
//   console.log(event.target.value);
// });
// - select의 선택값이 바뀔 때마다(사용자가 옵션을 바꿀 때마다) 실행됨
// - event.target.value: 현재 선택된 옵션의 값을 가져옴

// 1의 인덱스 값을 가진 바나나가 제거되었음
// $fruitSelect.remove(1);
// - select 요소의 두 번째 옵션(인덱스 1, 0부터 시작)을 삭제함

const $userName = document.getElementById('userName');
// - id가 'userName'인 input 요소를 선택 (사용자 이름 입력란)
const $password = document.getElementById('password');
// - id가 'password'인 input 요소를 선택 (비밀번호 입력란)

const $loginBtn = document.querySelector('button');
// - 첫 번째 button 요소를 선택 (로그인 버튼)

$loginBtn.addEventListener('click', () => {
  // - 버튼을 클릭하면 아래 코드가 실행됨
  console.log($userName.value); // input에 입력된 사용자 이름을 출력
  console.log($password.value); // input에 입력된 비밀번호를 출력
});

$userName.value = "요다";
// - input의 value 속성을 바꿔서, 입력창에 기본값을 미리 넣을 수 있음
//   (페이지가 열리면 '요다'가 자동으로 입력됨)

// 입력될때마다 값을 가져옴
$password.addEventListener('input', (event) => {
  // - 사용자가 비밀번호 입력창에 글자를 입력할 때마다 실행됨
  // - 'input' 이벤트는 값이 바뀔 때마다(한 글자씩 입력/삭제할 때마다) 발생
  console.log(event.target.value); // 현재 입력된 비밀번호를 출력
});

// ---------------------- 추가 설명 ----------------------
// value 속성: input, select, textarea 등 폼 요소의 현재 값을 읽거나 쓸 때 사용
//   예) input.value = 'abc'  // 입력창에 'abc'가 들어감
//   예) let v = input.value  // 입력창에 사용자가 입력한 값을 읽어옴
//
// addEventListener('change', ...): select, input 등에서 값이 "최종적으로" 바뀌었을 때(포커스가 바뀌거나 엔터 등) 실행
// addEventListener('input', ...): input, textarea 등에서 값이 "실시간"으로 바뀔 때마다 실행
//
// querySelector: CSS 선택자 문법으로 요소를 선택 (여러 개 중 첫 번째만)
// getElementById: id로 요소를 선택 (항상 하나만)
//
// select.remove(index): select 요소의 옵션 중 index번째(0부터 시작)를 삭제
//
// 실무 팁:
// - input.value로 입력값을 읽고 쓸 수 있음
// - 버튼 클릭, 엔터 입력, 실시간 입력 등 다양한 이벤트를 조합해 폼을 자유롭게 제어할 수 있음
// - form 태그의 submit 이벤트를 활용하면, 엔터로도 폼 전송이 가능
// ------------------------------------------------------