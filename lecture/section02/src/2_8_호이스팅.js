// 2_8 호이스팅
// 위에서 아래 방향으로 순차적으로 실행된다.
// 식별자의 선언문이, 스코프의 최상단으로 끌어올려지는 현상
//
// [함수 호이스팅]
// 함수 선언문은 코드가 실행되기 전에 전체 스코프의 최상단으로 끌어올려진다(hoisting).
// 그래서 함수 선언문 아래에서 해당 함수를 호출해도 정상적으로 동작한다.
// 즉, 아래처럼 함수 선언문보다 먼저 호출해도 에러가 발생하지 않는다.
//
// function foo() { ... }
// foo(); // 정상 동작
//
// 단, 함수 표현식(예: const foo = function() {})은 변수 호이스팅 규칙을 따른다.

function connectStriongs(str1, str2) {
  console.log(str1 + str2);
}

connectStriongs("study", "hoisting");

// [변수 호이스팅]
// var로 선언된 변수는 선언만(초기화 X) 스코프의 최상단으로 끌어올려진다.
// 즉, 아래처럼 변수 선언문보다 먼저 접근해도 에러가 발생하지 않고, undefined가 출력된다.
// let, const로 선언된 변수는 호이스팅은 되지만, TDZ(Temporal Dead Zone)로 인해 선언 전 접근 시 ReferenceError가 발생한다.
//
// 예시:
// console.log(num1); // var: undefined, let/const: ReferenceError
// var num1 = 123;
// let num2 = 456;
//
// var num -> 메모리에 변수 num을 공간만 확보(초기화 undefined)
// let num -> 메모리에 공간 확보 X, 선언과 동시에 초기화 필요
// let num1 = 123;
console.log(num1);
// 호이스팅 발생하지 않는것이 아니라 변수선언문의 위쪽에서 let, const로 선언된 변수는 변수 스코프의 가장 위쪽에서 변수의 초기화가 완료될 때까지 TemporalDeadZone이 잠시 머무르기 때문이다.
// var num -> 메모리에 변수 num을 공간
// let num -> 메모리에 공간 확보 x
// let num1 = 123;
var num1 = 123;
