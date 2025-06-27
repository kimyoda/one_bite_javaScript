// 배열과 객체의 구조분해 할당

// [구조 분해 할당이란?]
// 배열이나 객체의 요소 및 프로퍼티들을 분해하여, 그 값들을 각각의 변수에 할당할 수 있게 해주는 자바스크립트의 표현식입니다.
// 이 문법을 사용하면 코드가 간결해지고 가독성이 좋아집니다.

// [배열의 구조 분해 할당 - 기본 사용법]
// 배열의 각 요소가 순서대로 변수에 할당됩니다.
// let colors = ["green", "blue", "purple"];

// // let c1 = colors[0];
// // let c2 = colors[1];
// // let c3 = colors[2];

// let [c1, c2, c3] = colors;

// [배열의 구조 분해 할당 - 선언과 할당 분리, 기본값 지정]
// 변수 선언과 할당을 분리할 수 있습니다.
// 배열에 값이 없으면 기본값(여기서는 "yellow")이 할당됩니다.
let arr1, arr2, arr3, arr4; // 변수명 변경
[arr1, arr2, arr3, arr4 = "yellow"] = ["green", "blue", "purple"];

console.log(arr1); // "green"
console.log(arr2); // "blue"
console.log(arr3); // "purple"
console.log(arr4); // "yellow" (기본값 할당)

// [배열의 구조 분해 할당 - 값 교환]
// 구조 분해 할당을 활용하면 임시 변수 없이 두 변수의 값을 한 줄로 교환할 수 있습니다.
let a = 10;
let b = 5;

// 구조 분해 할당을 활용한 코드 교환
[a, b] = [b, a];
// let temp;

// 값을 교환하기 위해서는 temp와 같은 임시변수가 필요함.
// temp = a;
// a = b;
// b = temp;
// console.log(a, b);

// [객체의 구조 분해 할당 - 기본 사용법]
// 객체의 프로퍼티 이름과 동일한 변수에 값이 할당됩니다.
let colors2 = {
  c1: "green",
  c2: "blue",
  c3: "red",
};

// let c1 = colors2.c1;
// let c2 = colors2.c2;
// let c3 = colors2.c3;
// 객체로서 할당
let { c1: objC1, c2: objC2, c3: objC3 } = colors2;

// [객체의 구조 분해 할당 - 다른 이름으로 할당 및 기본값 지정]
// 콜론(:)을 사용해 변수명을 다르게 할당할 수 있습니다.
// 객체에 없는 프로퍼티(c4)는 기본값("yellow")이 할당됩니다.
// let color1 = colors2.c1;
// let color3 = colors2.c2;
// let color4 = colors2.c4;
let {
  c1: color1,
  c2: color3,
  c3: color4,
  c4: colorDefault = "yellow",
} = colors2;

console.log(objC1); // "green"
console.log(objC2); // "blue"
console.log(objC3); // "red"
console.log(colorDefault); // "yellow" (기본값 할당)
