// 2_12. 생성자 함수
// 객체와 배열 생성 방법
let obj = new Object(); // 추가 설명: Object 생성자는 빈 객체({})를 생성함
let arr = new Array(); // 추가 설명: Array 생성자는 빈 배열([])을 생성함

// 생성자 함수는 여러개의 객체를 생성하기 위해 사용된다.
// const person1 = {
//   name: '홍길동',
//   age: 30,
//   job: 'Manager',
//   sayHi: function () {
//     console.log('...');
//   },
// };
// const person2 = {
//   name: '김철수',
//   age: 25,
//   job: 'Desinger',
//   sayHi: function () {
//     console.log('...');
//   },
// };
// 동일한 구조의 객체를 쉽게 생성하고, 코드의 재사용성을 높아지고 반복되는 코드의 작성이 감소한다.
// 추가 설명: 위처럼 객체를 일일이 만들면 코드가 반복되고 비효율적임
function Person(name, age, job) {
  this.name = name; // 추가 설명: 생성된 객체(this)에 name 속성 추가
  this.age = age; // 추가 설명: 생성된 객체(this)에 age 속성 추가
  this.job = job; // 추가 설명: 생성된 객체(this)에 job 속성 추가
  this.sayHi = function () {
    console.log('...'); // 추가 설명: 각 객체마다 sayHi 메서드가 생성됨
  };
}

const person1 = new Person('김진수', 30, 'Manager'); // 추가 설명: new 연산자를 사용해 Person 생성자 함수로 객체 생성
const person2 = new Person('손흥민', 32, 'Desinger'); // 추가 설명: 각각의 인자값으로 속성이 채워진 객체가 생성됨
console.log(person1); // 추가 설명: person1 객체의 속성 및 메서드 확인
console.log(person2); // 추가 설명: person2 객체의 속성 및 메서드 확인

