// 2_9. 함수 표현식과 화살표 함수

// 함수 선언식
// function 키워드 옆에 함수의 이름 작성
// 함수 선언식은 호이스팅(코드 실행 전 스코프 최상단으로 끌어올려짐)이 일어나기 때문에, 선언문 이전에도 호출 가능
function func() {
  console.log("hello javascript");
}

// 함수 표현식
// 변수에 함수를 마치 하나의 값처럼 할당한다.
// 함수 표현식은 변수 호이스팅 규칙을 따르므로, 선언 이전에 호출하면 에러 발생
const func2 = () => {
  console.log("hello javascript");
};

// 차이점 호이스팅
// 함수선언식, 함수표현식

// 아래 주석 해제 시, hoisted()는 정상 동작 (함수 선언식이기 때문)
// hoisted();

// function hoisted() {
//   console.log("hoisting");
//   // hoisting
// }

// 아래 주석 해제 시, hoisted()는 ReferenceError 발생 (함수 표현식이기 때문)
// hoisted();
// 변수에 익명 함수를 할당함.
// const hoisted = function () {
//   console.log("hoisting");
//   // Uncaught ReferenceError;
// };

// 화살표 함수
// 함수 표현식의 간결한 문법. this 바인딩 방식이 다름(상위 스코프의 this를 가짐)
// const add = (a, b) => {
//   return a + b;
// };
const add = (a, b) => a + b;
console.log(add(10, 20)); // 30

// 콜백 함수
// 콜백 함수란, 함수의 인자로 전달되어 나중에 호출되는 함수
// 아래 calculate 함수는 세 번째 인자로 콜백 함수를 받아, 연산 결과를 콜백에 전달함
const calculate = (a, b, callback) => {
  let result = a + b;
  callback(result); // 콜백 함수 호출
};

// 콜백으로 전달할 함수들
const printResult = (result) => {
  console.log("결과: " + result);
};

const doubleResult = (result) => {
  console.log("결과에 2를 곱한 값: " + result * 2);
};

// 특정 함수 전달 (콜백 함수 활용 예시)
calculate(5, 3, printResult); // 결과: 8
calculate(5, 3, doubleResult); // 결과에 2를 곱한 값: 16

// 콜백 함수의 또 다른 예시
const testFunc = (callback) => {
  callback(); // 전달받은 함수를 실행
};

testFunc(() => {
  console.log("콜백 함수 테스트");
});

testFunc(function () {
  console.log("콜백 함수 테스트");
});

// 정리:
// - 함수 선언식: 호이스팅 O, 선언 전 호출 가능
// - 함수 표현식/화살표 함수: 변수 호이스팅만 O(초기화 X), 선언 전 호출 불가
// - 콜백 함수: 함수의 인자로 전달되어 나중에 실행되는 함수
