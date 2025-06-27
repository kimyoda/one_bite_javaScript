### 2_17_spread와 rest

---

## 📘 Spread와 Rest

### Spread (전개 연산자)

> 반복적인 값을 퍼뜨리고, 얕은 복사하는 문법

```js
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
```

---

## ✅ Rest (나머지 매개변수)

| 배열이나 객체로 묶어주는 문법

```js
const blueToy2 = {
  type: "bear",
  price: 15000,
  color: "blue",
};

// const { type, ...rest } = blueToy2;
// const { ...rest, type } = blueToy2; // 순서에 따라 에러 발생

const color = ["red", "orange", "yellow", "green"];
const [c1, c2, ...rest] = color;

console.log(c1, c2);
// console.log(rest);

const print = (a, b, ...rest) => {
  console.log(a, b, rest);
};

print(1, 2, 3, 4, 5, 6);
```

---

## ✅ 값 교환 (Swap)

- Sread(...)
- 배열이나 객체의 값을 펼쳐서 복사한다.
- 원본 데이터는 변경되지 않는다(.얕은복사)

````js
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

---

## ✅ 객체의 구조 분해 할당

```js
let colors2 = {
  c1: "green",
  c2: "blue",
  c3: "red",
};

// 구조 분해 할당 + 변수 이름 바꾸기
let { c1: objC1, c2: objC2, c3: objC3 } = colors2;

console.log(objC1); // "green"
console.log(objC2); // "blue"
console.log(objC3); // "red"
````

```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
```

---

## ✅ Rest (...)

- 여러 값을 하나로 묶어 배열 또는 객체로 만들 때 사용

```js
function func(a, b, ...rest) {
  console.log(a, b, rest);
}

func(1, 2, 3, 4); // a=1, b=2, rest=[3,4]
const arr = [1, 2, 3, 4];
const [first, ...restArr] = arr;
console.log(first); // 1
console.log(restArr); // [2,3,4]
```

---

## 📝 ## 📌 쉽게 구분하기

| 개념   | 의미   | 사용 목적   |
| ------ | ------ | ----------- |
| Spread | 펼친다 | 복사, 확장  |
| Rest   | 모은다 | 나머지 수집 |
