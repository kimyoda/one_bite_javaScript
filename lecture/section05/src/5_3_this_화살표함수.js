// 4_3 DOM API-2

// 1. createElement()
// - 새로운 HTML 요소(노드)를 자바스크립트로 생성할 때 사용합니다.
// - 예시: 아래 코드는 <div> 태그를 새로 만듭니다.
// let $type = document.createElement('div');
// $type.className = 'info-item'; // class 속성 추가
// $type.id = 'type'; // id 속성 추가
// // $type.textContent = "말티즈"; // 텍스트를 바로 넣을 수도 있고,
// let $typeText = document.createTextNode("말티즈"); // 텍스트 노드를 따로 만들 수도 있습니다.

// - createTextNode(): 텍스트만 담긴 노드를 만듭니다. (태그 없이 글자만!)

// - appendChild(): 부모 노드의 맨 마지막 자식으로 새로운 노드를 추가합니다.
//   예시: $animalInfo.appendChild($type); // $animalInfo의 마지막에 $type(div)을 추가
//   예시: $type.appendChild($typeText); // $type(div)의 마지막에 텍스트 노드 추가

// - DOM 트리란? : HTML 문서가 계층(부모-자식) 구조로 이루어진 것을 말합니다.
//   appendChild로 부모-자식 관계를 직접 만들 수 있습니다.

// let $animalInfo = document.querySelector('div.animal-info');
// $animalInfo.appendChild($type);
// $type.appendChild($typeText);
// console.log($type); // <div class="info-item" id="type">말티즈</div>
// console.log($typeText); // 말티즈 (텍스트 노드)

// ---
// [새로운 버튼 요소 만들기]
// - 버튼도 위와 똑같이 만들 수 있습니다.
// let $button = document.createElement('button'); // <button> 생성
// $button.id = "new-button"; // id 추가
// $button.classList.add('new-button'); // class 추가
// $button.textContent = "버튼"; // 버튼에 표시될 텍스트
// $button.addEventListener("click", () => {
//   window.alert("클릭"); // 버튼 클릭 시 알림창
// });
//
// let $animalInfo = document.querySelector('div.animal-info');
// $animalInfo.appendChild($button); // 버튼을 화면에 추가
//
// console.log($animalInfo); // 버튼이 추가된 전체 div가 출력됨

// ---
// [이벤트 리스너]
// - addEventListener("이벤트명", 함수): 해당 요소에 이벤트(예: 클릭, 마우스오버 등)가 발생하면 함수를 실행합니다.
// - 위 예시에서는 버튼을 클릭하면 "클릭"이라는 알림창이 뜹니다.

// ---
// [innerHTML]
// - 요소의 HTML 내용을 문자열로 읽거나, 새 HTML로 한 번에 바꿀 수 있습니다.
// - 예시: 아래 코드는 div.animal-info의 내용을 <div id="name">고양이</div>로 통째로 바꿉니다.
let $animalInfo = document.querySelector('div.animal-info');
$animalInfo.innerHTML = '<div id="name">고양이<div>'
// console.log($animalInfo.innerHTML); // <div id="name">고양이</div>가 출력됨
console.log($animalInfo); // 변경된 전체 요소가 출력됨
