import App from "./App"; // App 컴포넌트 import (앱의 루트 컴포넌트)

const $app = document.getElementById("app"); // index.html의 #app 요소를 가져옴

new App($app); // App 컴포넌트 인스턴스 생성 및 마운트

// 생성자 함수 예시 코드
// function Car() {
//   this.name = "BMW";
//   this.color = "black";
//   this.print = function () {
//     console.log(`${this.name} 색상은 ${this.color}`);
//   };
// }

// const myCar = new Car();
// myCar.print();

// index.js는 앱의 진입점 역할을 하며, App 컴포넌트를 통해 전체 UI를 초기화한다.
