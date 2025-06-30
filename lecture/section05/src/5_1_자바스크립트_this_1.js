// 자바스크립트의 this-1

// this -> 함수 호출 방식에 따라 this에 바인딩되는 값이 달라진다.
// 즉, 함수가 어떻게 호출되었는지에 따라 this가 참조하는 값이 달라진다.
//
// 1. 전역 공간에서의 this
//    - 브라우저 환경에서는 전역 객체(window)를 가리킨다.
//    - Node.js 환경에서는 global 객체를 가리킨다.
//    - 전역에서 this를 출력하면 window(또는 global)가 나온다.
//
// 2. 일반 함수로서 호출할 때의 this
//    - 함수 내부에서 this는 기본적으로 전역 객체(window/global)를 가리킨다.
//    - 'use strict' 모드에서는 undefined가 된다.
//    - 즉, 단순히 함수명()으로 호출하면 this는 전역 객체다.
//
// 3. 메서드로서 호출할 때의 this
//    - 객체의 프로퍼티(속성)로 선언된 함수(메서드)에서 this는 해당 객체를 가리킨다.
//    - 즉, obj.method()로 호출하면 this는 obj를 가리킨다.

// 전역공간
// console.log(this); // 브라우저: window, Node.js: global

// 함수
// function func() {
//   console.log(this); // 일반 함수 호출: window(또는 global)
// }
//
// func();

// 2. 메서드 호출 -> 객체 프로퍼티 함수
// this는 자신이 속한 객체를 가리키는 키워드, 자신을 포함하고 있는 함수가 어떻게 호출되었는가에 따라 가리키는 값이 달라진다.

const cafe = {
  brand: "이디야",
  menu: "아메리카노",

  // newCafe: {
  //   brand: "이디야",
  //   menu: "라떼",
  print: function () {
    console.log(this); // 메서드로 호출: this는 cafe 객체를 가리킨다.
  },
  // },
};
// 메서드를 포함하는 객체가 출력이 된다.
// cafe.print(); // this는 cafe 객체
// cafe.newCafe.print(); // this는 newCafe 객체

const myCafe = cafe.print;
myCafe(); // 일반 함수로 호출: this는 전역 객체(window/global)
