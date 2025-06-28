// 2_7 스코프
// 스코프란?
// Scope: 변수와 함수가 영향을 미치는 범위다.

// 전역, 지역 스코프

// 1. 전역스코프
// 어디에서나 접근 가능한 전역스코프를 가져 전역변수, 외부변수라고 함
// let globalNum = 100; // 전역 변수 선언
//
// function testFunc() {
//   console.log(globalNum); // 함수 내부에서도 전역 변수에 접근 가능
// }
// testFunc(); // 함수 호출
//
// console.log(globalNum); // 함수 외부에서도 전역 변수에 접근 가능

// 2. 지역스코프
// 특정지역에서만 접근할 수 있는 범위
// let globalNum = 100; // 전역 변수
//
// function testFunc() {
//   let innerNum = 50; // 지역 변수(함수 내부에서만 사용 가능)
//   console.log(globalNum); // 전역 변수 접근 가능
//   console.log(innerNum); // 지역 변수 접근 가능
// }
// testFunc(); // 함수 호출
//
// console.log(globalNum); // 전역 변수 접근 가능
// console.log(innerNum); // 함수 외부에서는 지역 변수 접근 불가(에러 발생)

// 스코프 중첩 예시
// let global = "나는 전역 변수입니다"; // 전역 변수
//
// function outerFunction() {
//   let outer = "나는 외부 함수의 변수입니다"; // 외부 함수의 지역 변수
//
//   function innerFunction() {
//     let inner = "나는 내부 함수의 변수입니다"; // 내부 함수의 지역 변수
//     console.log(global); // 전역 변수 접근 가능
//     console.log(outer); // 외부 함수의 변수 접근 가능
//     console.log(inner); // 내부 함수의 변수 접근 가능
//   }
//
//   innerFunction(); // 내부 함수 호출
//   console.log(global); // 전역 변수 접근 가능
//   console.log(outer); // 외부 함수의 변수 접근 가능
//   console.log(inner); // 내부 함수의 변수 접근 불가(에러 발생)
// }
//
// outerFunction(); // 외부 함수 호출

// 3. 함수 스코프
function print() {
  for (let i = 0; i < 10; i++) {
    // var를 사용하면 함수스코프를 가진다. 10까지 가능.
    // let은 블록스코프이므로 for문 내부에서만 유효
    console.log(i); // i는 for문 블록 내에서만 사용 가능
  }
  console.log(i); // let 사용 시 에러 발생, var 사용 시 정상 출력
}

print(); // 함수 호출

// 4. 블록 스코프 var, let 차이
// let, const 블록스코프를 지원, 코드 블록 내부에서만 유효한 값을 가짐.
var num = 10; // var는 함수 스코프, 블록을 무시하고 함수 전체에서 유효
let num = 100; // let은 블록 스코프, 선언된 블록 내부에서만 유효

console.log(num); // 가장 가까운(아래쪽) num 값이 출력됨
