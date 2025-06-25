// 2_10. 객체
// 비원시타입 -> 객체
// 객체란?(Obejct)
// 사람(Person)-> 나이(age), 전화번호(phone), 이름(name), 애완 동물(pet), 거주지(address)
//
// [객체란?]
// 여러 값을 하나의 단위로 묶어서 관리할 수 있는 자료구조. key(프로퍼티명)와 value(값)로 구성됨.
// 자바스크립트의 비원시 타입(Primitive가 아닌 타입)은 모두 객체임.

// 생성자 함수, 리터럴

// 1. 생성자 함수
// 객체는 {}로 나타낼 수 있다.
// 생성자 함수 방식: new Object()로 비어있는 객체 생성
let obj = new Object();
console.log(obj); // {}

// 객체의 속성
// key, value
// 객체 리터럴 방식: { ... }로 객체 생성
let book = {
  title: "자바스크립트 첫걸음", // 문자열 속성
  author: "김요한",
  category: "자바스크립트",
  year: undefined, // undefined도 값으로 가질 수 있음
  color: function () {
    // 함수도 값(메서드)로 가질 수 있음
    console.log("red");
  },
};

let car = {
  name: "테슬라",
  model: "테슬라차",
  color: "white",
};

// [객체의 값 접근 방법]
// 1. 점 표기법(dot notation): 객체명.프로퍼티명
//    예: car.name, car.color
// 2. 대괄호 표기법(bracket notation): 객체명["프로퍼티명"]
//    예: car["name"], car["color"]
//    - 변수로 프로퍼티명을 동적으로 접근할 때 유용
// console.log(car.name);
// console.log(car.color);

// // 대괄호 표기법
// console.log(car["name"]);
// console.log(car["model"]);
// console.log(car["color"]);

const getValue = (key) => {
  console.log(car[key]); // key에 해당하는 car의 속성값 출력
};

getValue("color"); // "white" 출력

// let cat = {
//   age: 2,
//   name: "고양이",
//   color: "black",
// };

// cat.name = "강아지";
// cat["color"] = "yellow";

// [const로 선언한 객체의 특징]
// const로 선언해도 객체의 참조(고유 ID)는 변경 불가하지만,
// 객체의 속성(프로퍼티)은 자유롭게 추가/수정/삭제 가능
// 아래 예시에서 cat의 속성값을 변경/삭제해도 에러가 발생하지 않음
const cat = {
  age: 2,
  name: "고양이",
  color: "black",
};

// [객체의 속성 삭제]
delete cat.color; // color 속성 삭제
delete cat["age"]; // age 속성 삭제

console.log(cat); // { name: "고양이" }

// cat.name = "강아지";
// cat["color"] = "yellow";

// [메서드와 this]
// 객체의 값으로 함수를 넣으면, 이를 메서드라고 부름
// 메서드 내부에서 this는 해당 객체 자신을 가리킴
const person = {
  name: "김요헌",
  age: 23,
  print: function () {
    // this는 person 객체 자신을 가리킴
    console.log(`제 이름은 ${this.name}입니다.`);
  },
};

person.print(); // "제 이름은 김요헌입니다."
person["print"](); // 대괄호 표기법으로도 메서드 호출 가능
