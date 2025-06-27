// 배열 내장함수 2

// 두 배열을 합치는 concat (원본 배열은 변경되지 않고, 새 배열 반환)
let array1 = ["green", "blue"];
let array2 = ["purple", "yellow"];
let array3 = ["green", "blue", "purple", "yellow"];

let colors = ["green", "blue", "purple"];

// concat: 여러 배열을 하나로 합쳐서 새 배열을 반환
console.log(array1.concat(array2)); // [ 'green', 'blue', 'purple', 'yellow' ]

// 같은 기능을 하는 스프레드 연산자 (ES6+)
console.log([...array1, ...array2]); // [ 'green', 'blue', 'purple', 'yellow' ]

// join: 배열을 문자열로 변환 (구분자 지정 가능)
console.log(array3.join()); // 'green,blue,purple,yellow' (기본 구분자: 콤마)
// 공백 문자열 구분자로 출력
console.log(array3.join(" ")); // 'green blue purple yellow'

// sort: 배열 정렬 (기본은 문자열 오름차순, 유니코드 기준)
// 숫자 정렬 시에는 비교 함수를 직접 작성해야 함

// compare 함수: a가 b보다 크면 -1(내림차순), 작으면 1(오름차순), 같으면 0
const compare = (a, b) => {
  if (a > b) {
    return -1; // a가 b보다 크면 앞으로 (내림차순)
  } else if (a < b) {
    return 1; // a가 b보다 작으면 뒤로
  } else {
    return 0; // 같으면 순서 유지
  }
};

// 문자열 배열을 내림차순 정렬
colors.sort(compare);
// 직접 제작한 compare 함수를 sort 메서드에 전달
console.log(colors); // [ 'purple', 'green', 'blue' ]

// 숫자 배열 정렬 예시
const compare2 = (a, b) => {
  return a - b; // 오름차순 (작은 수가 앞으로)
};
// 내림차순으로 정렬
const compare3 = (a, b) => {
  return b - a; // 큰 수가 앞으로
};

let numbers = [1, 100, 25, 50, 120, 3];

// sort에 비교 함수를 넣지 않으면 문자열로 변환 후 정렬됨 (예: 100이 25보다 앞에 옴)
numbers.sort((a, b) => a - b); // 오름차순 정렬
numbers.sort(compare); // compare 함수(내림차순)로 정렬
console.log(numbers); // [ 120, 100, 50, 25, 3, 1 ]

// reduce: 배열의 모든 값을 누적(합산, 곱셈 등)하여 하나의 값으로 만듦
// acc: 누적값, cur: 현재값, idx: 현재 인덱스
let numbers2 = [1, 100, 25, 50];

// 초기값 10부터 시작해서 모든 요소를 더함
let sum = numbers2.reduce((acc, cur, idx) => {
  console.log(acc, cur, idx); // 누적값, 현재값, 인덱스 출력
  return acc + cur; // 누적값에 현재값을 더해서 반환
}, 10); // 초기값 10

// forEach로 누적하는 방법 (reduce가 더 간결함)
// numbers2.forEach((el) => {
//   sum += el;
// });

console.log(sum); // 186 (10 + 1 + 100 + 25 + 50)

// isArray: 값이 배열인지 여부를 boolean으로 반환
const a = Array.isArray([1, 100, 50]); // true (배열)
const b = Array.isArray({ id: 1, color: "green" }); // false (객체)
const c = Array.isArray("string"); // false (문자열)
const d = Array.isArray(undefined); // false (undefined)

console.log(a, b, c, d); // true false false false
