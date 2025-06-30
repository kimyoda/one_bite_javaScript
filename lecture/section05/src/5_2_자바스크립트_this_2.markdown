
# 3_2 📝 DOM API 주요 메서드와 사용법

---

## 1. getElementById

- 특정 id 속성을 가진 요소를 하나만 가져온다.
- 반환값: 해당 id를 가진 요소 객체 (없으면 null)

```html
<!-- 예시 HTML -->
<div id="color">색상</div>
```

```js
let $color = document.getElementById('color');
console.log($color); // <div id="color">색상</div>
```

---

## 2. querySelector

- CSS 선택자 문법으로 일치하는 첫 번째 요소를 가져온다.
- 반환값: 일치하는 첫 번째 요소 객체 (없으면 null)

```html
<!-- 예시 HTML -->
<div class="animal-info">동물 정보</div>
<div id="age">3살</div>
```

```js
let $animalInfo = document.querySelector('div.animal-info');
console.log($animalInfo); // <div class="animal-info">동물 정보</div>

let ageElement = document.querySelector('div#age');
console.log(ageElement); // <div id="age">3살</div>
```

---

## 3. querySelectorAll

- CSS 선택자 문법으로 일치하는 모든 요소를 NodeList로 반환한다.
- 반환값: NodeList(유사 배열)

```html
<!-- 예시 HTML -->
<div class="info-item">A</div>
<div class="info-item">B</div>
<div class="info-item">C</div>
```

```js
let $infoItem = document.querySelectorAll('div.info-item');
console.log($infoItem); // NodeList(3) [div.info-item, div.info-item, div.info-item]
```

---

## 4. getElementsByClassName

- 특정 클래스를 가진 모든 요소를 HTMLCollection으로 반환한다.
- 반환값: HTMLCollection(유사 배열)

```html
<!-- 예시 HTML -->
<div class="info-item">A</div>
<div class="info-item">B</div>
<div class="info-item">C</div>
```

```js
let $infoItem = document.getElementsByClassName('info-item');
console.log($infoItem); // HTMLCollection(3) [div.info-item, div.info-item, div.info-item]
```

---

## 5. getElementsByTagName

- 특정 태그명을 가진 모든 요소를 HTMLCollection으로 반환한다.
- 반환값: HTMLCollection(유사 배열)

```html
<!-- 예시 HTML -->
<div>A</div>
<div>B</div>
<div>C</div>
```

```js
let $infoItem = document.getElementsByTagName('div');
console.log($infoItem); // HTMLCollection(3) [div, div, div]
```

---

# 🛠️ DOM 요소 조작 예시

## 1. className 변경

```html
<div id="name">이름</div>
```

```js
let $name = document.getElementById('name');
$name.className = 'dog-name';
console.log($name); // <div id="name" class="dog-name">이름</div>
console.log($name.className); // 'dog-name'
```

---

## 2. id 변경

```html
<div class="animal-info">동물 정보</div>
```

```js
let $animalInfo = document.querySelector('div.animal-info');
$animalInfo.id = "animal";
console.log($animalInfo); // <div class="animal-info" id="animal">동물 정보</div>
console.log($animalInfo.id); // 'animal'
```

---

## 3. classList로 클래스 추가/제거

```html
<div id="color" class="info-item">색상</div>
```

```js
let $color = document.getElementById('color');
$color.classList.remove('info-item'); // 'info-item' 클래스 제거
$color.classList.add('dog-color');    // 'dog-color' 클래스 추가
console.log($color.classList); // DOMTokenList(1) ['dog-color']
```

---

## 4. textContent로 텍스트 변경

```html
<div id="age">3살</div>
```

```js
let $age = document.getElementById('age');
$age.textContent = "5살";
console.log($age); // <div id="age">5살</div>
```

---

## 5. style 속성으로 인라인 스타일 변경

```html
<div id="color">색상</div>
```

```js
let $color = document.getElementById('color');
$color.style.color = 'blue'; // 글자색을 파란색으로 변경
$color.style.fontSize = "30px"; // 글자 크기를 30px로 변경
// 결과: <div id="color" style="color: blue; font-size: 30px;">색상</div>
```

---

> 위의 DOM API들은 웹 페이지의 요소를 동적으로 탐색하고, 속성/클래스/스타일/텍스트 등을 자유롭게 변경할 수 있게 해줍니다. 콘솔에서 각 단계별로 결과를 확인하면, 실제로 요소가 어떻게 바뀌는지 쉽게 알 수 있습니다.
