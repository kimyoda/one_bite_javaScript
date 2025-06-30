# 🚀 4_3 DOM_API-2

---

## 1. createElement & createTextNode

- `createElement(tagName)`: 새로운 HTML 요소(노드)를 자바스크립트로 생성합니다.
- `createTextNode(text)`: 태그 없이 텍스트만 담긴 노드를 만듭니다.
```js
// <div> 태그를 새로 만듭니다.
let $type = document.createElement('div');
$type.className = 'info-item'; // class 속성 추가
$type.id = 'type'; // id 속성 추가
// $type.textContent = "말티즈"; // 텍스트를 바로 넣을 수도 있고,
let $typeText = document.createTextNode("말티즈"); // 텍스트 노드 생성
```

---

## 2. appendChild

- 부모 노드의 맨 마지막 자식으로 새로운 노드를 추가합니다.
- DOM 트리(부모-자식 구조)를 직접 만들 수 있습니다.

```js
let $animalInfo = document.querySelector('div.animal-info');
$animalInfo.appendChild($type); // $animalInfo의 마지막에 $type(div)을 추가
$type.appendChild($typeText); // $type(div)의 마지막에 텍스트 노드 추가

console.log($type); // <div class="info-item" id="type">말티즈</div>
console.log($typeText); // 말티즈 (텍스트 노드)
```

---

## 3. 버튼 요소 동적 생성 & 이벤트 리스너

- `addEventListener('이벤트명', 함수)`: 해당 요소에 이벤트(예: 클릭)가 발생하면 함수를 실행합니다.

```js
let $button = document.createElement('button'); // <button> 생성
$button.id = "new-button"; // id 추가
$button.classList.add('new-button'); // class 추가
$button.textContent = "버튼"; // 버튼에 표시될 텍스트
$button.addEventListener("click", () => {
  window.alert("클릭"); // 버튼 클릭 시 알림창
});

let $animalInfo = document.querySelector('div.animal-info');
$animalInfo.appendChild($button); // 버튼을 화면에 추가

console.log($animalInfo); // 버튼이 추가된 전체 div가 출력됨
```

---

## 4. innerHTML

- 요소의 HTML 내용을 문자열로 읽거나, 새 HTML로 한 번에 바꿀 수 있습니다.

```js
let $animalInfo = document.querySelector('div.animal-info');
$animalInfo.innerHTML = '<div id="name">고양이</div>';
console.log($animalInfo.innerHTML); // <div id="name">고양이</div>가 출력됨
console.log($animalInfo); // 변경된 전체 요소가 출력됨
```

---

> 위의 DOM API들은 웹 페이지의 요소를 동적으로 생성, 추가, 수정, 이벤트 연결 등 다양한 방식으로 조작할 수 있게 해줍니다. 실제로 코드를 실행해보면, DOM 트리 구조와 동작 원리를 쉽게 이해할 수 있습니다.
