// 3_2 프로미스 객체

// Promise란?
// - 비동기 작업의 성공/실패를 처리하는 객체
// - 콜백 지옥 문제를 해결하기 위해 등장
// - 3가지 상태를 가짐: Pending(대기), Fulfilled(성공), Rejected(실패)

// Promise 생성자 함수
// executor: Promise의 실행 함수 (resolve, reject를 매개변수로 받음)
const executor = (resolve, reject) => {
  // 코드
  setTimeout(() => {
    resolve("성공"); // 성공 시 호출되는 함수
    reject("실패"); // 실패 시 호출되는 함수 (주석: resolve가 먼저 호출되면 reject는 무시됨)
  }, 3000);
};

// then 메서드와 catch 메서드
// 콜백 지옥이란?
// - 콜백 함수가 중첩되어 코드가 복잡해지는 현상
// - 가독성이 떨어지고 유지보수가 어려워짐

const promise = new Promise(executor);
promise
  // 성공했을때 then 메서드를 가져올 수 있다.
  .then((result) => {
    console.log(result); // "성공" 출력
  })
  // 실패했을 때 catch 메서드
  .catch((error) => {
    console.log(error); // "실패" 출력 (resolve가 먼저 호출되면 실행되지 않음)
  });

// 콜백지옥 예시
// 여러 비동기 작업을 순차적으로 처리할 때 발생하는 문제
// const workA = (value, callback) => {
//   setTimeout(() => {
//     callback(value + 5); // 5초 후 value + 5 반환
//   }, 5000);
// };
// const workB = (value, callback) => {
//   setTimeout(() => {
//     callback(value - 3); // 3초 후 value - 3 반환
//   }, 3000);
// };
// const workC = (value, callback) => {
//   setTimeout(() => {
//     callback(value + 10); // 10초 후 value + 10 반환
//   }, 10000);
// };

// 콜백 지옥 PROMISE 적용
// Promise를 사용하여 각 함수를 개선
const workA = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value + 5); // 5초 후 value + 5 반환
    }, 5000);
  });
  return promise; // Promise 객체 반환
};
const workB = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value - 3); // 3초 후 value - 3 반환
    }, 3000);
  });
  return promise; // Promise 객체 반환
};
const workC = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value + 10); // 10초 후 value + 10 반환
    }, 10000);
  });
  return promise; // Promise 객체 반환
};

// 콜백 지옥 예시 (문제가 되는 코드)
// 중첩된 콜백으로 인해 코드가 복잡해짐
// workA(10, (resA) => {
//   console.log(`workA : ${resA}`); // 15 출력
//   workB(resA, (resB) => {
//     console.log(`workB: ${resB}`); // 12 출력
//     workC(resB, (resC) => {
//       console.log(`workC : ${resC}`); // 22 출력
//       workC;
//     });
//   });
// });

// 문제점:
// 1. 코드가 계속 들여쓰기됨 (가독성 떨어짐)
// 2. 에러 처리가 어려움
// 3. 유지보수가 힘듦
// 4. "콜백 지옥" 현상 발생

// promise 적용하여 콜백지옥 해결 (기본 버전)
// Promise를 사용하지만 여전히 중첩 구조
// workA(10).then((resA) => {
//   console.log(`workA : ${resA}`); // 15 출력
//   workB(resA).then((resB) => {
//     console.log(`workB : ${resB}`); // 12 출력
//     workC(resB).then((resC) => {
//       console.log(`workC : ${resC}`); // 22 출력
//     });
//   });
// });

// 장점: 에러 처리가 쉬워짐 (.catch() 사용 가능)
// 단점: 여전히 중첩 구조가 남아있음

// 완화버전, 프로미스 체이닝!
// Promise Chaining: then() 메서드를 연속으로 호출하여 중첩을 피하는 방법
workA(10)
  .then((resA) => {
    console.log(`workA : ${resA}`); // 15 출력
    // 프로미스 객체를 반환 (중요!)
    return workB(resA); // workB의 Promise 반환
  })
  .then((resB) => {
    console.log(`workB : ${resB}`); // 12 출력
    return workC(resB); // workC의 Promise 반환
  })
  .then((resC) => {
    console.log(`workC : ${resC}`); // 22 출력
  })
  .catch((error) => {
    // 모든 단계에서 발생하는 에러를 한 번에 처리
    console.log("에러 발생:", error);
  });

// Promise Chaining의 장점:
// 1. 코드가 평면적으로 작성됨 (가독성 향상)
// 2. 에러 처리가 간단함 (.catch() 하나로 모든 에러 처리)
// 3. 유지보수가 쉬움
// 4. 비동기 작업의 순서가 명확함

// 실행 흐름:
// 1. workA(10) 실행 → 5초 후 15 반환
// 2. 첫 번째 then에서 15 출력 후 workB(15) 실행
// 3. 3초 후 12 반환
// 4. 두 번째 then에서 12 출력 후 workC(12) 실행
// 5. 10초 후 22 반환
// 6. 세 번째 then에서 22 출력

// 총 실행 시간: 18초 (5 + 3 + 10)
// 각 작업이 순차적으로 실행되므로 시간이 누적됨

// Promise의 3가지 상태:
// 1. Pending (대기): 초기 상태, 성공/실패가 결정되지 않음
// 2. Fulfilled (이행): 작업이 성공적으로 완료됨
// 3. Rejected (거부): 작업이 실패함

// Promise의 주요 메서드:
// - .then(): 성공 시 실행될 함수
// - .catch(): 실패 시 실행될 함수
// - .finally(): 성공/실패 상관없이 실행될 함수
// - .all(): 여러 Promise를 병렬로 실행
// - .race(): 여러 Promise 중 가장 빨리 완료되는 것만 처리
