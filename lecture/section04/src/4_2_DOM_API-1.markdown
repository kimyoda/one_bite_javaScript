# 🚀 3_2 프로미스 객체

---

## ✅ Promise란?

- 비동기 작업의 **성공/실패**를 처리하는 객체
- 콜백 지옥 문제를 해결하기 위해 등장
- **3가지 상태**: Pending(대기), Fulfilled(성공), Rejected(실패)

---

## ✅ Promise 생성자 함수 예시

```js
const executor = (resolve, reject) => {
  setTimeout(() => {
    resolve("성공"); // 성공 시
    reject("실패"); // 실패 시 (resolve가 먼저 호출되면 reject는 무시됨)
  }, 3000);
};

const promise = new Promise(executor);

promise
  .then((result) => {
    console.log(result); // "성공"
  })
  .catch((error) => {
    console.log(error); // "실패" (resolve가 먼저 실행되면 무시됨)
  });
```

## 🤯 콜백 지옥 (Callback Hell) 문제

- 콜백 함수가 중첩되어 코드가 복잡해진다.
- 가독성이 떨어지고 유지보수가 어렵다.

# ❌ 콜백 지옥 예시

```js
workA(10, (resA) => {
  console.log(`workA : ${resA}`);
  workB(resA, (resB) => {
    console.log(`workB: ${resB}`);
    workC(resB, (resC) => {
      console.log(`workC : ${resC}`);
    });
  });
});
```

---

# ✅ Promise로 개선 (기본 버전)

```js
const workA = (value) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value + 5);
    }, 5000);
  });
};

const workB = (value) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value - 3);
    }, 3000);
  });
};

const workC = (value) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value + 10);
    }, 10000);
  });
};

// 여전히 중첩 구조
// workA(10).then((resA) => {
//   console.log(`workA : ${resA}`);
//   workB(resA).then((resB) => {
//     console.log(`workB : ${resB}`);
//     workC(resB).then((resC) => {
//       console.log(`workC : ${resC}`);
//     });
//   });
// });
```

---

# 💡 Promise Chaining (체이닝)

```js
workA(10)
  .then((resA) => {
    console.log(`workA : ${resA}`); // 15
    return workB(resA);
  })
  .then((resB) => {
    console.log(`workB : ${resB}`); // 12
    return workC(resB);
  })
  .then((resC) => {
    console.log(`workC : ${resC}`); // 22
  })
  .catch((error) => {
    console.log("에러 발생:", error);
  });
```

# 실행 흐름

1. workA(10) → 5초 후 15 반환
2. then: 15 출력 후 workB(15)
3. workB(15) → 3초 후 12 반환
4. then: 12 출력 후 workC(12)
5. workC(12) → 10초 후 22 반환
6. then: 22 출력

---

# 🌟 Promise Chaining 장점

- 코드가 평면적으로 작성되어 가독성이 향상된다.
- `.catch()` 하나로 모든 에러가 처리한다.
- 유지보수가 쉽다.
- 작업 순서가 명확하다.

---

# 💬 Promise의 상태

1. Pending: 대기 중
2. Fulfilled: 작업 성공
3. Rejected: 작업 실패

---

## 🔧 Promise 주요 메서드

- `.then()` : 성공 시 실행
- `.catch()` : 실패 시 실행
- `.finally()` : 성공/실패 상관없이 항상 실행
- `.all()` : 여러 Promise 병렬 실행
- `.race()` : 가장 먼저 완료된 Promise 처리
