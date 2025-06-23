// 2_4_연산자
// 사칙연산, 비교 연산, 문자형 데이터 연결
// 산술, 대입, null 병합, 논리, 비교, 삼항, 연결 연산자
//
// 연산자는 변수나 값에 대해 계산, 비교, 논리 판단 등을 할 때 사용하는 기호 또는 키워드입니다.

// 1. 산술 연산자
// +, -, *, /, % 등으로 숫자끼리의 기본적인 사칙연산을 할 수 있습니다.
// let num1 = 10; // 첫 번째 숫자
// let num2 = 5;  // 두 번째 숫자
//
// console.log(num1 + num2); // 더하기: 15
// console.log(num1 - num2); // 빼기: 5
// console.log(num1 * num2); // 곱하기: 50
// console.log(num1 / num2); // 나누기: 2
// 나머지 % 연산
// console.log(num1 % 2); // 10을 2로 나눈 나머지: 0
// console.log(num2 % 2); // 5를 2로 나눈 나머지: 1

// 2. 증감 연산자(+, -1 후위 / 전위 연산자)
// 변수의 값을 1씩 증가(++) 또는 감소(--)시킬 때 사용합니다.
// 후위(++/--가 변수 뒤): 현재 값을 먼저 사용한 뒤 1을 더하거나 뺍니다.
// 전위(++/--가 변수 앞): 1을 더하거나 뺀 뒤 값을 사용합니다.
// let num1 = 10;
// console.log(num1++); // 10 출력 후 num1은 11이 됨
// console.log(num1);   // 11 출력
// console.log(++num1); // 12 출력 (먼저 1 증가 후 출력)

// 3. 감소 연산자
// 위 증감 연산자에서 --를 사용하면 1씩 감소합니다.
// let num1 = 10;
// console.log(num1--); // 10 출력 후 num1은 9가 됨
// console.log(num1);   // 9 출력
// console.log(--num1); // 8 출력 (먼저 1 감소 후 출력)

// 4. 대입 연산자
// = 기호로 값을 변수에 할당합니다.
let num = 10; // num에 10을 할당
// +=, -=, *=, /=, %= 등 복합 대입 연산자는 기존 값에 연산 후 다시 할당합니다.
num += 5; // num = num + 5 와 같음, 결과는 15
console.log(num); // 15 출력
// -=, *=, /=, %= 등이 있다.
// num = num - 5; // num에서 5를 뺀 값을 다시 num에 저장

// 5. 비교 연산자(일치, 불일치 / 두 개의값을 대소비교)
// 두 값이 같은지, 다른지, 크고 작은지 등을 비교할 때 사용합니다.
// 5.1 일치하는지(=== 타입과 값이 일치, ==는 값이 일치하는 차이가 있다)
// === : 값과 자료형이 모두 같아야 true
// ==  : 값만 같으면 true (자료형은 자동 변환)
// let num1 = 10;
// let num2 = "10";
// console.log(num1 === num2); // false (자료형 다름)
// console.log(num1 == num2);  // true (값만 비교)

// 불일치
let num1 = 10;
let num2 = "10";
// !== : 값 또는 자료형이 다르면 true
// !=  : 값이 다르면 true (자료형은 자동 변환)
// console.log(num1 !== num2); // true (자료형 다름)
// console.log(num1 != num2);  // false (값은 같음)

// 대소비교 (>, <, <=, >=)
// 두 값의 크기를 비교합니다.
let a = 10;
let b = 20;
let c = 10;

console.log(a < b); // true (10 < 20)
console.log(a > b); // false (10 > 20 아님)
console.log(b >= c); // true (20 >= 10)
console.log(a > c); // false (10 > 10 아님)

// 6. 연결 연산자
// 문자열과 다른 값을 +로 연결하면 문자열이 됩니다.
let price = 10000;
console.log("가격: " + price + "원"); // "가격: 10000원" 출력

// 7. 논리 연산자
// true, false (boolean) 값을 다루며, 조건문에서 많이 사용합니다.
// NOT(!), OR(||), AND(&&)
// ! : 값을 반대로 바꿈 (true → false, false → true)
// let isClicked = true;
// let isOpened = false;
// console.log(!isClicked); // false
// console.log(!isOpened);  // true
// OR(||) : 둘 중 하나라도 true면 true
// AND(&&) : 둘 다 true여야 true
console.log(true && true); // true
console.log(true && false); // false
console.log(false || true); // true
console.log(false || false); // false

// null 병합 연산자
// A ?? B : A가 null 또는 undefined면 B를, 아니면 A를 반환
let numEx_1;
let numEx_2 = 10;
console.log(numEx_1 ?? 20); // numEx_1이 undefined이므로 20 출력
console.log(numEx_2 ?? 20); // numEx_2가 10이므로 10 출력

// 삼항 연산자
// 조건 ? 참일 때 값 : 거짓일 때 값
let numEx = 100;
let result = numEx % 2 === 0 ? "짝수" : "홀수"; // numEx가 2로 나눠 떨어지면 "짝수", 아니면 "홀수"
console.log(result); // "짝수" 출력
