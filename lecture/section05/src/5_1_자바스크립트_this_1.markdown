# 자바스크립트의 this - 1

자바스크립트에서 `this`는 **함수 호출 방식**에 따라 가리키는 값이 달라집니다. 즉, 함수가 어떻게 호출되었는지에 따라 `this`가 참조하는 대상이 달라집니다.

---

## 1. 전역 공간에서의 this

- 브라우저 환경: 전역 객체인 `window`를 가리킵니다.
- Node.js 환경: 전역 객체인 `global`을 가리킵니다.
- 예시:

```js
console.log(this); // 브라우저: window, Node.js: global
```

---

## 2. 일반 함수로서 호출할 때의 this

- 함수 내부에서 `this`는 **기본적으로 전역 객체(window/global)** 를 가리킵니다.
- `'use strict'` 모드에서는 `undefined`가 됩니다.
- 예시:

```js
function func() {
  console.log(this); // 일반 함수 호출: window(또는 global)
}
func();
```

---

## 3. 메서드로서 호출할 때의 this

- 객체의 프로퍼티(속성)로 선언된 함수(메서드)에서 `this`는 **해당 객체**를 가리킵니다.
- 예시:

```js
const cafe = {
  brand: "이디야",
  menu: "아메리카노",
  print: function () {
    console.log(this); // 메서드로 호출: this는 cafe 객체
  },
};
cafe.print(); // this는 cafe 객체
```

---

## 4. 함수의 참조를 변수에 할당해서 호출할 때

- 메서드를 변수에 할당해서 일반 함수처럼 호출하면, `this`는 **전역 객체**를 가리킵니다.
- 예시:

```js
const myCafe = cafe.print;
myCafe(); // 일반 함수로 호출: this는 window(또는 global)
```

---

> **정리:**
>
> - 함수가 어떻게 호출되었는지에 따라 this가 가리키는 값이 달라진다!
> - 메서드로 호출하면 해당 객체, 일반 함수로 호출하면 전역 객체(또는 undefined in strict mode)
