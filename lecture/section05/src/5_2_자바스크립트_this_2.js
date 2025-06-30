// 자바스크립트의 this-2

// this -> 함수 호출 방식에 따라 this에 바인딩되는 값이 달라진다.
// 즉, 함수가 어떻게 호출되었는지에 따라 this가 참조하는 값이 달라진다.
//
// 1. 생성자 함수 호출 this -> 새로운 객체 생성 / new 키워드
//    - 생성자 함수는 객체를 만들기 위한 함수다.
//    - new 키워드와 함께 호출하면 this는 '새로 생성되는 객체'를 가리킨다.
//    - 생성자 함수 내부에서 this에 프로퍼티를 추가하면, 생성된 객체에 그 값이 저장된다.
//    - 만약 new 없이 호출하면 this는 전역 객체(window/global)를 가리키게 된다.
//    - return문이 없으면, new로 생성된 객체가 자동으로 반환된다.

// function Cafe(menu) {
//   console.log(this); // new로 호출: this는 새 객체, 그냥 호출: 전역 객체
//   this.menu = menu;
// }
//
// // let myCafe = new Cafe("latte"); // 생성자 함수로 호출, this는 새 객체
// // return 문이 별도 없기에 myCafe를 출력하면 undefined가 뜬다.
// let myCafe = Cafe("latte"); // 그냥 함수로 호출, this는 전역 객체
// console.log(myCafe);

// 2. 콜백 함수 호출
//    - 콜백 함수는 다른 함수에 인자로 전달되어 나중에 호출되는 함수다.
//    - 콜백 함수가 일반 함수로 호출되면 this는 전역 객체(window/global)를 가리킨다.
//    - 객체의 메서드를 콜백으로 전달하면, this가 원래 객체가 아니라 전역 객체가 되어 의도와 다르게 동작할 수 있다.
//    - 이런 문제를 해결하려면 bind, 화살표 함수, 또는 콜백 내부에서 this를 명시적으로 지정하는 방법을 사용한다.

const cafe = {
  brand: "이디야",
  menu: "",
  setMenu: function (menu) {
    this.menu = menu; // this가 cafe를 가리키면 cafe.menu가 바뀜, 전역 객체면 window.menu가 바뀜
  },
};

function getMenu(menu, callback) {
  // 일반 함수로서 호출하면 전역객체로 호출하기에
  callback(menu); // 이때 this는 전역 객체
}

// console.log(menu)를 하면 핫초코라는 콘솔값이 나온다.
getMenu("핫초코", cafe.setMenu); // setMenu가 콜백으로 전달되어 일반 함수처럼 호출됨

console.log(cafe); // cafe.menu는 여전히 빈 문자열
// window.menu(브라우저) 또는 global.menu(Node.js)가 '핫초코'로 바뀜

// 함수호출 방식에 따라 this에 바인딩 되는 값이 바뀐다.
// 1. 일반 함수 호출 -> 전역 객체
// 2. 메서드 호출 -> 메서드를 포함하고 있는 객체
// 3. 생성자 함수 호출 -> 생성할 객체
// 4. 콜백 함수 호출 -> 전역객체(별도 처리 없을 때)
