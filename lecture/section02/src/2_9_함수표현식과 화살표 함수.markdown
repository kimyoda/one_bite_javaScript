# 📘 2.9 함수 표현식과 화살표 함수

---

## ✅ 함수 선언식

- `function` 키워드 뒤에 함수 이름을 작성
- **호이스팅이 발생**하므로 선언 전에 호출 가능

````js
function func() {
  console.log("hello javascript");
}

func(); // ✅ 정상 동작

---

## ✅ 함수 표현식
- 함수를 하나의 값처럼 변수에 할당
- 변수 호이스팅은 되지만 초기화 전엔 참조 불가 -> 선언 전에 호출하면 에러 발생
```js
const func2 = () => {
  console.log("hello javascript");
};

func2(); // ✅ 선언 후 호출하면 정상 동작
````

---

## 🔍 함수 선언식 vs 함수 표현식 (호이스팅 차이)

```js
// 함수 선언식
// hoisted(); // ✅ 주석 해제 시 정상 작동 (호이스팅 O)

function hoisted() {
  console.log("hoisting");
}

// 함수 표현식
// hoisted(); // ❌ ReferenceError 발생 (호이스팅 초기화 X)

// const hoisted = function () {
//   console.log("hoisting");
// };
```

---

## ✅ 화살표 함수 (Arrow Function)

- 함수 표현식의 간결한 문법
- `this` 바인딩 방식이 다르다(상위 스코프의 this 사용)

```js
const add = (a, b) => a + b;

console.log(add(10, 20)); // 출력: 30
```

---

## ✅ 콜백 함수 (Callback Function)

- 다른 함수의 인자로 전달되어 나중에 호출되는 함수
  콜백을 받는 함수 예시

```js
const calculate = (a, b, callback) => {
  let result = a + b;
  callback(result); // 콜백 실행
};
```

콜백 함수들

```js
const printResult = (result) => {
  console.log("결과: " + result);
};

const doubleResult = (result) => {
  console.log("결과에 2를 곱한 값: " + result * 2);
};
```

콜백 전달 예시

```js
calculate(5, 3, printResult); // 결과: 8
calculate(5, 3, doubleResult); // 결과에 2를 곱한 값: 16
```

---

## ✅ 익명 함수를 콜백으로 직접 전달

```js
const testFunc = (callback) => {
  callback();
};

testFunc(() => {
  console.log("콜백 함수 테스트 (화살표 함수)");
});

testFunc(function () {
  console.log("콜백 함수 테스트 (익명 함수)");
});
```

## 📌 정리 요약

| 구분        | 호이스팅 | 선언 전 호출 가능 여부  | 특징                     |
| ----------- | -------- | ----------------------- | ------------------------ |
| 함수 선언식 | O        | 가능                    | 전통적인 방식, 이름 지정 |
| 함수 표현식 | X        | 불가능 (ReferenceError) | 변수로 할당              |
| 화살표 함수 | X        | 불가능 (ReferenceError) | 표현식 + 간결한 문법     |
| 콜백 함수   | -        | -                       | 다른 함수에 인자로 전달  |
