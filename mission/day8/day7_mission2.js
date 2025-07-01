// Day7 미션

// DOM API & Select Tag
// id 가 app인 div 요소의 내부에 아래의 코드들을 넣어주세요.
// 예시
// <select id="skills">
//     <option value="javascript">Javascript</option>
//     <option value="next">Next.js</option>
//     <option value="react">React.js</option>
//     <option value="typescript">TypeScript</option>
// </select>
// 단, createElement, appendChild를 사용해서 생성해주세요.

// 1. select 요소 생성
const $app = document.getElementById('app'); // id가 'app'인 div 요소 선택

const $typeSelect = document.createElement('select'); // <select> 요소 동적 생성
$typeSelect.id = "skills"; // id 속성 부여

// 2. option 요소 생성을 각각 한다.
const $javascriptOption = document.createElement('option'); // <option> 생성
$javascriptOption.value = "javascript"; // value 속성 부여
$javascriptOption.textContent = "Javascript"; // 사용자에게 보이는 텍스트

const $nextOption = document.createElement('option');
$nextOption.value = "next";
$nextOption.textContent = "Next.js";

const $reactOption = document.createElement('option');
$reactOption.value = "react";
$reactOption.textContent = "React.js";

const $typescriptOption = document.createElement('option');
$typescriptOption.value = "typescript";
$typescriptOption.textContent = "TypeScript";

// 3. appendChild로 추가한다.
$typeSelect.appendChild($javascriptOption); // select에 option 추가 (순서대로)
$typeSelect.appendChild($nextOption);
$typeSelect.appendChild($reactOption);
$typeSelect.appendChild($typescriptOption);

$app.appendChild($typeSelect); // 완성된 select를 app div에 추가

// 4. select 태그의 값을 변경할 때 마다, 변경된 값을 출력하는 기능도 작성해주세요.
$typeSelect.addEventListener('change', (event) => {
  // change 이벤트: 사용자가 옵션을 바꿀 때마다 실행됨
  // event.target.value: 현재 선택된 option의 value 값
  console.log(event.target.value); // 선택된 기술의 value를 콘솔에 출력
});

