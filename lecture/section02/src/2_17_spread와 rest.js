// spread와 rest

// spread
// 반복적인 값을 퍼트리고, 얕은 복사
const toy = {
  type: "bear",
  price: 15000,
};

const blueToy = {
  ...toy,
  color: "blue",
};
const yellowToy = {
  ...toy,
  color: "yellow",
};

console.log(blueToy);
console.log(yellowToy);

const color1 = ["red", "orange", "yellow"];
const color2 = ["blue", "navy", "purple"];

const rainbow = [...color1, "green", ...color2];
console.log(rainbow);

// rest
// 나머지 매개변수
// 배열이나 객체로 묶어주는 문법이다.
const blueToy2 = {
  type: "bear",
  price: 15000,
  color: "blue",
};
// rest는 price와 color로 객체로 변환하여 할당한다.
// const { type, ...rest } = blueToy2;
// const { ...rest, type } = blueToy2; 순서에 상관이 있기에 에러가 발생한다.

// console.log(type);
// console.log(rest);

const color = ["red", "orange", "yellow", "green"];
const [c1, c2, ...rest] = color;

console.log(c1, c2);
// console.log(rest);

// print 함수
const print = (a, b, ...rest) => {
  // 함수에서 받아온 매개변수들을 배열로 나타내야할때 유용하게 사용되는 문법이다.
  console.log(a, b, rest);
};

print(1, 2, 3, 4, 5, 6);

// spread와 rest의 차이
const print1 = (...rest) => {
  console.log(rest);
};
const numbers = [1, 2, 3, 4, 5, 6];
// spread 문법 사용
print1(...numbers);

// =============================
// [아래는 spread와 rest 문법에 대한 자세한 설명입니다]
//
// [spread 문법 (...)]
// - 배열이나 객체의 값을 펼쳐서(복사해서) 새로운 배열이나 객체를 만들 때 사용합니다.
// - 원본 데이터를 변경하지 않고, 얕은 복사를 합니다.
//
// 예시1: 배열에서 spread
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]
//
// 예시2: 객체에서 spread
// const obj1 = { a: 1, b: 2 };
// const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
//
// spread는 '펼친다'라는 의미로, 여러 값을 하나씩 꺼내서 새로운 곳에 복사할 때 사용합니다.
//
// [rest 문법 (...)]
// - '나머지'라는 뜻으로, 여러 값을 하나의 배열(혹은 객체)로 모아줍니다.
// - 주로 함수의 매개변수나 구조분해 할당에서 사용합니다.
//
// 예시1: 함수 매개변수에서 rest
// function func(a, b, ...rest) {
//   // a, b는 각각 첫 번째, 두 번째 인자
//   // rest는 나머지 인자들이 배열로 들어감
// }
// func(1, 2, 3, 4); // a=1, b=2, rest=[3,4]
//
// 예시2: 배열 구조분해에서 rest
// const arr = [1, 2, 3, 4];
// const [first, ...restArr] = arr; // first=1, restArr=[2,3,4]
//
// 정리: spread는 '펼치기', rest는 '모으기'입니다.
//
// [쉽게 이해하는 비유]
// - spread: 여러 장의 카드를 테이블 위에 펼치는 것
// - rest: 테이블 위의 여러 장의 카드를 한 손에 모으는 것
//
// spread와 rest는 생김새는 같지만( ... ), 위치와 용도에 따라 완전히 다릅니다.
//
// spread: 값을 펼칠 때(=복사, 확장)
// rest: 값을 모을 때(=집합, 나머지)
// =============================
