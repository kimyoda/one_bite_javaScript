# 자바스크립트의 this - 2

자바스크립트에서 `this`는 함수가 어떻게 호출되었는지에 따라 가리키는 값이 달라집니다. 이번에는 **생성자 함수 호출**과 **콜백 함수 호출**에서의 this를 알아봅니다.

---

## 1. 생성자 함수 호출에서의 this

- **생성자 함수**는 객체를 만들기 위한 함수입니다.
- `new` 키워드와 함께 호출하면, `this`는 **새로 생성되는 객체**를 가리킵니다.
- 생성자 함수 내부에서 `this`에 값을 할당하면, 그 값이 새 객체에 저장됩니다.
- 만약 `new` 없이 호출하면, `this`는 전역 객체(window/global)를 가리키게 되어 의도와 다르게 동작할 수 있습니다.

**예시:**

```js
function Cafe(menu) {
  console.log(this); // new로 호출: this는 새 객체, 그냥 호출: 전역 객체
  this.menu = menu;
}

let myCafe = new Cafe("latte"); // 생성자 함수로 호출, this는 새 객체
console.log(myCafe); // { menu: "latte" }

let notACafe = Cafe("americano"); // 그냥 함수로 호출, this는 전역 객체
console.log(notACafe); // undefined (return문이 없으므로)
// window.menu(브라우저) 또는 global.menu(Node.js)가 "americano"로 바뀜
```

---

## 2. 콜백 함수 호출에서의 this

- **콜백 함수**는 다른 함수에 인자로 전달되어 나중에 호출되는 함수입니다.
- 콜백 함수가 일반 함수로 호출되면, `this`는 **전역 객체(window/global)** 를 가리킵니다.
- 객체의 메서드를 콜백으로 전달하면, `this`가 원래 객체가 아니라 전역 객체가 되어 의도와 다르게 동작할 수 있습니다.
- 이런 문제를 해결하려면 `bind`, 화살표 함수, 또는 콜백 내부에서 this를 명시적으로 지정하는 방법을 사용합니다.

**예시:**

```js
const cafe = {
  brand: "이디야",
  menu: "",
  setMenu: function (menu) {
    this.menu = menu; // this가 cafe를 가리키면 cafe.menu가 바뀜
  },
};

function getMenu(menu, callback) {
  callback(menu); // 이때 this는 전역 객체
}

getMenu("핫초코", cafe.setMenu);
console.log(cafe.menu); // '' (변하지 않음)
// window.menu(브라우저) 또는 global.menu(Node.js)가 '핫초코'로 바뀜
```

---

> **정리:**
>
> - 생성자 함수에서 this는 새로 만들어지는 객체를 가리킨다.
> - 콜백 함수로 전달된 메서드는 일반 함수처럼 호출되면 this가 전역 객체가 되어 의도와 다르게 동작할 수 있다.
> - this 바인딩 문제는 bind, 화살표 함수 등으로 해결할 수 있다.
