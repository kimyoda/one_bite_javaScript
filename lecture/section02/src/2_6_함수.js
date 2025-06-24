// 2_6 함수
// let num1 = 10;
// let num2 = 15;
// let sum = num1 + num2;
//
// console.log(sum);
//
// let num3 = 1;
// let num4 = 5;
// let sum2 = num3 + num4;
//
// console.log(sum2);

// 함수, 매개변수
function add(num1, num2) {
  // 두 숫자를 더하는 함수, num1과 num2는 매개변수
  console.log("함수 호출"); // 함수가 호출될 때마다 출력
  // Early return pattern
  return num1 + num2; // 두 숫자의 합을 반환
}

// 인수
let result = add(10, 15); // add 함수에 10과 15를 전달하여 호출, 반환값을 result에 저장

console.log(`두 숫자를 더한 결과는 ${result} 입니다.`); // 결과 출력

// function compare(num) {
//   if (num === 0) {
//     console.log("num의 값이 0입니다.");
//   } else if (num < 0) {
//     console.log("num의 값이 0입니다.");
//   } else {
//     if (num >= 10) {
//       console.log("num의 값이 10보다 크거나 같습니다.");
//     } else {
//       console.log("num의 값이 0보다 크고 10보다 작습니다.");
//     }
//   }
// }

// Early return pattern
function compare(num) {
  // 숫자 num의 값을 조건에 따라 분기하여 문자열로 반환하는 함수
  if (num === 0) {
    return "num의 값이 0입니다."; // num이 0일 때 바로 반환
  }
  if (num < 0) {
    return "num의 값이 0입니다."; // num이 0보다 작을 때 바로 반환
  }
  if (num >= 10) {
    return "num의 값이 10보다 크거나 같습니다."; // num이 10 이상일 때 바로 반환
  }
  return "num의 값이 0보다 크고 10보다 작습니다."; // 위 조건에 모두 해당하지 않을 때 반환
}

console.log(compare(15)); // compare 함수 호출 결과 출력

// print 함수가 선언만 되었을 뿐, 호출 전이라 코드 실행X
// 선언문 아래에 있는 console.log(3)이 가장먼저 실행됨.
// 선언되어서 1~2가 출력되었다.
function print() {
  // 1과 2를 출력하는 함수
  console.log(1);
  console.log(2);
}

console.log(3); // 함수 호출 전, 3이 먼저 출력됨
print(); // print 함수 호출, 1과 2가 출력됨
console.log(4); // 마지막으로 4가 출력됨
