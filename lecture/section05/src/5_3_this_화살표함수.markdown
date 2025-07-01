# 5_3 this와 화살표 함수 쉽게 이해하기

## 1. 화살표 함수와 일반 함수의 차이

- **화살표 함수(=>)** 는 function 키워드로 만든 함수와 다르게 동작합니다.
- 가장 큰 차이점은 **this**가 가리키는 대상입니다.
- **화살표 함수**는 자신만의 this가 없고, 자신이 선언된 위치(상위 스코프)의 this를 그대로 사용합니다.
- **일반 함수(function)**는 호출 방법에 따라 this가 달라집니다.

```js
const func = () => {
  console.log("hello javascript");
};

function funcEx() {
  console.log("hello javascrit");
}
```

---

## 2. 콜백 함수에서의 this 차이

setInterval 등에서 콜백 함수로 일반 함수를 쓰면 this가 달라질 수 있습니다.

```js
// (잘못된 예시)
function Counter() {
  this.count = 0;
  setInterval(function () {
    // 이 콜백의 this는 전역 객체(window)를 가리킵니다.
    // 그래서 this.count는 undefined, undefined++는 NaN이 됩니다.
    this.count++;
    console.log(this.count); // NaN
  }, 2000);
}
```

```js
// (올바른 예시)
function Counter() {
  this.count = 0;
  setInterval(() => {
    // 화살표 함수는 Counter 생성자의 this를 그대로 사용합니다.
    this.count++;
    console.log(this.count); // 1, 2, 3, ...
  }, 2000);
}

// 사용 예시:
// const counter = new Counter();
// 위 코드를 실행하면 2초마다 1씩 증가하는 숫자가 출력됩니다.
```

> **TIP:** 콜백 함수에서 this를 유지하고 싶을 때 화살표 함수를 사용하면 편리합니다.

---

## 3. 객체의 메서드에서의 this와 화살표 함수

```js
const cafe = {
  brand: "이디야",
  menu: "아메리카노",
  print: () => {
    // 화살표 함수는 cafe 객체의 this를 사용하지 않고,
    // cafe가 선언된 상위(전역) 스코프의 this를 사용합니다.
    // 브라우저 환경에서는 window, strict 모드에서는 undefined가 됩니다.
    console.log(this); // window 또는 undefined
  },
};
cafe.print();
```

- 객체의 메서드는 반드시 **일반 함수**로 선언해야 this가 객체 자신을 가리킵니다.

```js
const cafe2 = {
  brand: "스타벅스",
  menu: "라떼",
  print: function () {
    // 일반 함수로 선언하면 this는 cafe2 객체 자신을 가리킵니다.
    console.log(this); // cafe2 객체
  },
};
cafe2.print();
```

---

## 4. 정리

| 구분        | this의 동작 방식                               |
| ----------- | ---------------------------------------------- |
| 화살표 함수 | 상위 스코프의 this를 그대로 사용               |
| 일반 함수   | 호출 방법에 따라 this가 달라짐                 |
| 객체 메서드 | 일반 함수로 선언해야 this가 객체 자신을 가리킴 |

> **핵심:**
>
> - 화살표 함수는 자신만의 this가 없습니다.
> - 객체의 메서드는 반드시 일반 함수로 선언해야 합니다.
> - 콜백 함수에서 this를 유지하고 싶을 때 화살표 함수를 사용하세요.
