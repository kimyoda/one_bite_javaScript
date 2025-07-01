// 5_3 화살표 함수
//
// [핵심 개념]
// - 화살표 함수(=>)는 function 키워드로 만든 함수와 this 동작이 다릅니다.
// - 화살표 함수는 자신만의 this를 가지지 않고, 상위 스코프의 this를 그대로 사용합니다.
// - 일반 함수(function)는 호출 방식에 따라 this가 달라집니다.

const func = () => {
  // [설명] 이 함수는 화살표 함수입니다.
  // 화살표 함수는 자신이 선언된 위치의 this를 사용합니다.
  // (여기서는 전역 스코프의 this)
  console.log("hello javascript");
};

function funcEx() {
  // [설명] 이 함수는 function 키워드로 만든 일반 함수입니다.
  // 일반 함수는 호출 방법에 따라 this가 달라집니다.
  console.log("hello javascrit");
}

// [예시1] 콜백 함수에서의 this 차이
// 아래는 일반 함수(주석처리)와 화살표 함수의 차이 예시입니다.

// function Counter() {
//   this.count = 0;
//   setInterval(function () {
//     // [문제] 이 콜백의 this는 전역 객체(window)를 가리킵니다.
//     // 그래서 this.count는 undefined, undefined++는 NaN이 됩니다.
//     this.count++;
//     console.log(this.count); // NaN
//   }, 2000);
// }

function Counter() {
  this.count = 0;
  setInterval(() => {
    // [설명] 화살표 함수는 Counter 생성자의 this를 그대로 사용합니다.
    // 즉, 여기서의 this는 Counter의 인스턴스를 가리킵니다.
    this.count++;
    console.log(this.count); // 1, 2, 3, ...
  }, 2000);
}
// 사용 예시:
// const counter = new Counter();
// 위 코드를 실행하면 2초마다 1씩 증가하는 숫자가 출력됩니다.

// [예시2] 객체의 메서드에서의 this와 화살표 함수
const cafe = {
  brand: "이디야",
  menu: "아메리카노",
  print: () => {
    // [문제] 이 print는 화살표 함수로 선언되었습니다.
    // 화살표 함수는 cafe 객체의 this를 사용하지 않고,
    // cafe가 선언된 상위(전역) 스코프의 this를 사용합니다.
    // 브라우저 환경에서는 window, strict 모드에서는 undefined가 됩니다.
    console.log(this); // window 또는 undefined
  },
};
// [주의] 객체의 메서드는 반드시 일반 함수로 선언해야 this가 객체 자신을 가리킵니다.
cafe.print();

// [올바른 예시]
const cafe2 = {
  brand: "스타벅스",
  menu: "라떼",
  print: function () {
    // [정답] 일반 함수로 선언하면 this는 cafe2 객체 자신을 가리킵니다.
    console.log(this); // cafe2 객체
  },
};
cafe2.print();

// [정리]
// - 화살표 함수는 자신만의 this가 없고, 상위 스코프의 this를 사용합니다.
// - 객체의 메서드는 반드시 일반 함수로 선언해야 this가 객체 자신을 가리킵니다.
// - 콜백 함수에서 this를 유지하고 싶을 때 화살표 함수를 사용할 수 있습니다.
