// 4_2 DOM API- 1

// 
// 1. getElementById: 특정 id 속성을 가진 요소를 하나만 가져온다.
//    - 반환값: 해당 id를 가진 요소 객체 (없으면 null)
//    - 예시: <div id="color"></div>가 있다면,
// let $color = document.getElementById('color');
// console.log($color); // <div id="color"></div>가 출력됨

// 2. querySelector: CSS 선택자 문법으로 일치하는 첫 번째 요소를 가져온다.
//    - 반환값: 일치하는 첫 번째 요소 객체 (없으면 null)
//    - 예시: <div class="animal-info"></div>가 있다면,
// let $animalInfo = document.querySelector('div.animal-info');
// console.log($animalInfo); // <div class="animal-info"></div>가 출력됨
// let ageElement = document.querySelector('div#age');
// console.log(ageElement); // <div id="age"></div>가 출력됨

// 3. querySelectorAll: CSS 선택자 문법으로 일치하는 모든 요소를 NodeList로 반환한다.
//    - 반환값: NodeList(유사 배열)
//    - 예시: <div class="info-item"></div>가 여러 개 있다면,
// let $infoItem = document.querySelectorAll('div.info-item');
// console.log($infoItem); // NodeList(3) [div.info-item, div.info-item, div.info-item]

// 4. getElementsByClassName: 특정 클래스를 가진 모든 요소를 HTMLCollection으로 반환한다.
//    - 반환값: HTMLCollection(유사 배열)
//    - 예시: <div class="info-item"></div>가 여러 개 있다면,
// let $infoItem = document.getElementsByClassName('info-item');
// console.log($infoItem); // HTMLCollection(3) [div.info-item, div.info-item, div.info-item]

// 5. getElementsByTagName: 특정 태그명을 가진 모든 요소를 HTMLCollection으로 반환한다.
//    - 반환값: HTMLCollection(유사 배열)
//    - 예시: <div></div>가 여러 개 있다면,
// let $infoItem = document.getElementsByTagName('div');
// console.log($infoItem); // HTMLCollection(5) [div, div, div, div, div]

// [2] 요소 조작하기 (속성, 클래스, 스타일 등)
// 아래 예시들은 실제로 HTML에 해당 id/class/tag가 있을 때 동작합니다.

// 1. id로 요소를 가져와서 className을 변경
let $name = document.getElementById('name');
// $name.className = 'dog-name';
// 위 코드는 id가 'name'인 요소의 class를 'dog-name'으로 변경합니다.
// 예시: <div id="name"></div> → <div id="name" class="dog-name"></div>

$name.className = 'dog-name';
console.log($name); // 변경된 요소 전체가 출력됨
console.log($name.className); // 'dog-name'이 출력됨

// 2. querySelector로 요소를 가져와서 id를 변경
let $animalInfo = document.querySelector('div.animal-info');
$animalInfo.id = "animal";
// 위 코드는 class가 'animal-info'인 div의 id를 'animal'로 변경합니다.
// 예시: <div class="animal-info"></div> → <div class="animal-info" id="animal"></div>

console.log($animalInfo); // 변경된 요소 전체가 출력됨
console.log($animalInfo.id); // 'animal'이 출력됨

// 3. classList로 클래스 추가/제거
// let $color = document.getElementById('color');
// $color.classList.remove('info-item'); // 'info-item' 클래스를 제거
// $color.classList.add('dog-color');    // 'dog-color' 클래스를 추가
// console.log($color.classList); // DOMTokenList(1) ['dog-color']

// 4. textContent로 텍스트 변경
let $age = document.getElementById('age');
$age.textContent = "5살";
// 위 코드는 id가 'age'인 요소의 텍스트를 '5살'로 변경합니다.
// 예시: <div id="age">3살</div> → <div id="age">5살</div>

console.log($age); // 변경된 요소 전체가 출력됨

// 5. style 속성으로 인라인 스타일 변경
let $color = document.getElementById('color');
$color.style.color = 'blue'; // 글자색을 파란색으로 변경
$color.style.fontSize = "30px"; // 글자 크기를 30px로 변경
// 예시: <div id="color"></div> → <div id="color" style="color: blue; font-size: 30px;"></div>

// 결과적으로 위의 DOM API들은 웹 페이지의 요소를 동적으로 탐색하고, 속성/클래스/스타일/텍스트 등을 자유롭게 변경할 수 있게 해줍니다.
// 콘솔에서 각 단계별로 결과를 확인하면, 실제로 요소가 어떻게 바뀌는지 쉽게 알 수 있습니다.