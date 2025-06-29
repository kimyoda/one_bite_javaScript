# 🚀 3_3 async와 await

---

## ✅ async와 await란?

- 비동기 작업을 더 간결하고 읽기 쉽게 작성할 수 있는 문법이다.
- `async`를 붙인 함수는 항상 `Promise`를 반환한다.
- `await`는 `async` 함수 안에서만 사용 가능하고, 해당 `Promise`가 처리될 때까지 기다린다.

---

## ⏰ delay 함수 예제

```js
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("3초가 지났습니다.");
    }, ms);
  });
};

const start = async () => {
  try {
    let result = await delay(3000);
    console.log(result); // '3초가 지났습니다.' 출력
  } catch (error) {
    console.log(error); // 에러 발생 시 출력
  }
};

start();
```

---

## ⚙️ 여러 개의 비동기 작업 예제

```js
const workA = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("workA"); // 5초 후 'workA' 반환
    }, 5000);
  });
};

const workB = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("workB"); // 3초 후 'workB' 반환
    }, 3000);
  });
};

const workC = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("workC"); // 10초 후 'workC' 반환
    }, 10000);
  });
};
```

---

## 🔁 순차 실행 예제

# async

- `async` 키워드를 함수 앞에 붙이면 무조건 Promise를 반환하는 함수가 된다.
- 함수 내부에서 `return`값을 쓰면, 자동으로 `Promise.resolve(값)`로 감싸서 변환된다.
- `async` 함수 안에서 에러가 발생하면, 에러는 `Promise.reject(에러)` 형태로 반환된다.

# await

- `await`는 Promise가 해결될 때까지 기다리게 한다.
- `await`는 async 함수 안에서 사용 가능하다.
- `await`를 만나면, Promise가 성공 또는 실패 될 때까지 함수 실행을 잠깐 멈춘다.

# 💡 왜 async/await가 좋은가?

✅ 동기 코드처럼 작성 → 가독성 및 유지보수성 향상
✅ 콜백 지옥(callback hell)을 해결
✅ 에러 처리가 try-catch 문으로 간단

```js
const start = async () => {
  try {
    let resultA = await workA(); // workA가 끝날 때까지 기다림
    let resultB = await workB(); // workB가 끝날 때까지 기다림
    let resultC = await workC(); // workC가 끝날 때까지 기다림
    console.log(resultA); // 'workA'
    console.log(resultB); // 'workB'
    console.log(resultC); // 'workC'
  } catch (err) {
    console.log(err); // 에러 발생 시 출력
  }
};

start();
```

---

## ⚡️ 병렬 실행 (Promise.all) 예제

# Promise.all

- 여러 개의 Promise를 동시에 실행, 모두 완료될때까지 기다리는 메서드.
- 모든 Promise가 성공, 결과를 배열로 반환한다.
- 하나라도 실패하면 즉시 `reject` 상태 -> 에러를 반환한다.

```js
const start = async () => {
  try {
    let results = await Promise.all([workA(), workB(), workC()]);
    results.forEach((res) => console.log(res));
  } catch (err) {
    console.log(err); // 에러 발생 시 출력
  }
};

start();
```

---

# 💡정리

- `await`는 Promise가 끝날 때까지 기다림
- 순차 실행은 각각 끝날 때까지 기다린 후 다음 작업 진행 → 실행 시간 누적
- `Promise.all()`은 병렬 실행 → 가장 오래 걸리는 작업 시간만큼만 기다림

| 키워드/메서드 | 설명                                                    | 사용 목적              |
| ------------- | ------------------------------------------------------- | ---------------------- |
| `async`       | 함수가 항상 Promise를 반환하도록 만듦                   | 비동기 함수 작성 시    |
| `await`       | Promise가 끝날 때까지 기다리고 결과를 반환              | 순차 처리, 가독성 향상 |
| `Promise.all` | 여러 Promise를 병렬로 실행하고, 전부 끝날 때까지 기다림 | 병렬 처리, 속도 최적화 |
