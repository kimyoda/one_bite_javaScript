// 자료형 원시 타입과 비 원시 타입
// 자바스크립트의 자료형은 크게 원시 타입(Primitive Type)과 비원시 타입(Reference Type)으로 나뉩니다.
// 원시 타입: number, string, boolean, null, undefined, symbol, bigint
// 비원시 타입: object(배열, 함수 등 포함)
// typeof 연산자는 변수의 자료형을 확인할 때 사용합니다.
// let num = 10; // 숫자형(원시 타입)
// console.log(typeof num); // 'number' 출력

// 숫자형
// let num1 = 125; // 정수형 숫자
// let num2 = 10.0012; // 실수형 숫자(소수점)
// console.log(typeof num1); // 'number' 출력, num1의 자료형 확인
// console.log(typeof num2); // 'number' 출력, num2의 자료형 확인

// 무한대(Infinity)
// let num3 = Infinity; // 직접 할당도 가능
// let num3 = 100 / 0; // 0으로 나누면 Infinity(무한대)가 됨
// console.log(num3); // Infinity 출력

// 숫자형
// let number = NaN; // 직접 할당도 가능
// let number = "NaN" / 10; // 숫자가 아닌 값을 숫자로 나누면 NaN이 됨
// console.log(number); // NaN 출력

// BigInt
// 매우 큰 정수와 작은 정수를 표현할 때 사용
// let bigNum1 = 9999999999999999999999999999999999n; // 숫자 뒤에 n을 붙이면 BigInt
// let bigNum2 = BigInt("9999999999999999999999999999999999"); // BigInt 함수로 생성
// console.log(typeof bigNum1); // 'bigint' 출력
// console.log(typeof bigNum2); // 'bigint' 출력

// string, 문자열
// let name = "yohan"; // 문자열 자료형
// console.log(typeof name); // 'string' 출력
// 템플릿 리터럴: 백틱(`)을 사용해 변수나 표현식을 문자열에 쉽게 삽입할 수 있음
// let intro = `제 이름은 ${name} 입니다`;
// console.log(intro); // '제 이름은 yohan 입니다' 출력

// boolean
// true / false 두 가지 값만 가짐
// let isClicked = false; // 불리언 값 예시
// 예시
// if (isClicked) {
//   console.log("클릭 O "); // isClicked가 true일 때 실행
// } else {
//   console.log("클릭 X"); // isClicked가 false일 때 실행
// }

// Null
// 값이 "없음"을 명시적으로 나타내는 자료형
// let num5 = null;
// console.log(num5 === null); // true 출력, 값이 null인지 확인

// Undefined
// let num5 = undefined; // 명시적으로 undefined 할당도 가능

// 동적 타입 언어
// 자바스크립트는 변수의 타입이 실행 중에 바뀔 수 있음
// let num5;
// console.log(typeof num5); // 'undefined' 출력, 값이 없으므로 undefined

// 형변환 / 묵시적 혀변환, 명시적 형변환이 있다.
// 묵시적 형 변환: 자바스크립트가 자동으로 타입을 변환해주는 경우
// let num1 = "15"; // 문자열
// let num2 = 5; // 숫자
// console.log(num1 / num2); // 문자열이 숫자로 자동 변환되어 3 출력

// 명시적 형 변환: 개발자가 직접 타입을 변환하는 경우
let num1 = "15"; // 문자열
let num2 = 5; // 숫자
// 숫자로 강제로 변환시켜주는 매서드
console.log(Number(num1) + num2); // Number()로 문자열을 숫자로 변환 후 더함(15 + 5 = 20)
console.log(parseInt(num1) + num2); // parseInt()로 문자열을 정수로 변환 후 더함(15 + 5 = 20)
