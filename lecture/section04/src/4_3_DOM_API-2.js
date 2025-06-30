// 3_3 async와 await
// async와 await는 비동기 작업을 더 쉽게 작성할 수 있게 해주는 문법입니다.

// delay 함수: ms(밀리초)만큼 기다린 후, '3초가 지났습니다.'라는 문자열을 반환하는 Promise를 리턴
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("3초가 지났습니다.");
    }, ms);
  });
};

// async를 함수 앞에 붙이면, 해당 함수는 항상 Promise를 반환합니다.
// await는 async 함수 안에서만 사용 가능하며, Promise가 처리될 때까지 기다립니다.

// 아래 start 함수는 delay 함수가 끝날 때까지 기다렸다가 결과를 출력합니다.
// const start = async () => {
//   // await는 delay(3000)이 끝날 때까지 기다립니다.
//   // 즉, 3초 후에 result에 값이 할당됩니다.
//   // let result = await delay(3000);
//   // console.log(result); // '3초가 지났습니다.' 출력

//   // 에러가 발생할 수 있으므로 try-catch로 감쌉니다.
//   try {
//     let result = await delay(3000);
//     console.log(result);
//   } catch (error) {
//     console.log(error); // 에러 발생 시 출력
//   }
// };

// start(); // 위의 start 함수 실행

// 아래는 여러 개의 비동기 작업을 예시로 만든 함수들입니다.
// workA, workB, workC는 각각 5초, 3초, 10초 후에 완료되는 Promise를 반환합니다.
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

// 아래는 비동기 작업을 순차적으로 처리하는 예시입니다.
// 각 작업이 끝날 때까지 기다렸다가 다음 작업을 시작합니다.
// const start = async () => {
//   try {
//     let resultA = await workA(); // workA가 끝날 때까지 기다림
//     let resultB = await workB(); // workB가 끝날 때까지 기다림
//     let resultC = await workC(); // workC가 끝날 때까지 기다림
//     console.log(resultA); // 'workA'
//     console.log(resultB); // 'workB'
//     console.log(resultC); // 'workC'
//   } catch (err) {
//     console.log(err); // 에러 발생 시 출력
//   }
// };

// 아래는 모든 작업을 동시에 시작하고, 모두 끝날 때까지 기다리는 예시입니다.
// Promise.all을 사용하면 모든 작업이 병렬로 실행됩니다.
const start = async () => {
  try {
    // workA, workB, workC를 동시에 실행하고, 모두 끝날 때까지 기다림
    let results = await Promise.all([workA(), workB(), workC()]);
    // results는 ['workA', 'workB', 'workC'] 배열이 됨 (완료된 순서와 상관없이 배열 순서대로)
    results.forEach((res) => console.log(res)); // 각 작업 결과 출력
  } catch (err) {
    console.log(err); // 에러 발생 시 출력
  }
};

start(); // 위의 start 함수 실행 (모든 작업이 동시에 시작됨)
