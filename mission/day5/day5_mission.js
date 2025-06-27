// Day5 미션
// spread와 rest
// sumAndDouble이라는 함수를 작성하세요. 이 함수는 여러 개의 숫자를 인자로 받아:

// Rest 연산자를 사용하여 모든 인자를 하나의 배열로 받습니다.
// 받은 숫자들을 모두 더합니다.
// 배열의 모든 숫자에 2를 곱한 새로운 배열을 반환합니다. (배열 메서드 map을 사용하세요.)

// =============================
// [아래는 rest와 spread의 차이, 그리고 이 코드에서 rest가 어떻게 적용되었는지에 대한 설명입니다]
//
// [rest 문법이 적용된 부분]
// function sumAndDouble(...numbers) { ... }
// - ...numbers는 함수에 전달된 모든 인자를 하나의 배열로 모아줍니다.
// - 예를 들어 sumAndDouble(1,2,3,4)를 호출하면 numbers는 [1,2,3,4]가 됩니다.
// - 이처럼 '여러 개의 값을 하나로 모아주는' 역할이 바로 rest 문법입니다.
//
// [spread와의 차이]
// - spread는 배열이나 객체의 값을 '펼쳐서' 전달할 때 사용합니다.
// - 예를 들어, 어떤 함수가 여러 개의 인자를 받을 때, 배열을 펼쳐서 전달하고 싶으면 sumAndDouble(...arr)처럼 씁니다.
// - 반면, 이 코드에서는 함수의 매개변수에서 ...numbers를 사용해 '모으는' 역할만 하고 있습니다.
// - 즉, 이 코드는 spread가 아니라 rest 문법입니다.
//
// [쉽게 이해하는 비유]
// - rest: 여러 개의 재료(인자)를 한 그릇(배열)에 담는 것
// - spread: 한 그릇(배열)에 담긴 재료를 하나씩 꺼내서 요리(함수)에 넣는 것
//
// 정리: 이 코드에서 ...numbers는 rest 문법으로, 전달받은 모든 값을 하나의 배열로 모으는 역할을 합니다.
// =============================

// ...numbers 매개변수 rest
function sumAndDouble(...numbers) {
  // 1. numbers에 reduce로 모든 숫자를 더하고 sumNumbers에 할당한다.
  const sumNumbers = numbers.reduce((acc, cur) => acc + cur, 0);
  // 2. numbers의 모든 숫자에 map을 통해 2를 곱하고 새로운 배열을 반환하고 numbersDoubled에 할당한다.
  const numbersDoubled = numbers.map((el) => el * 2);

  // 해당 변수들을 객체로 묶어 전달한다.
  return { sumNumbers, numbersDoubled };
}

// 함수에 값을 할당하여 확인한다.
console.log(sumAndDouble(1, 2, 3, 4));
