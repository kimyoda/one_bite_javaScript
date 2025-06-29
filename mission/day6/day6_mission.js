// Day6 미션
// 미션1. API 호출1
// 아래와 같은 fakeApiCall 함수가 있습니다. 이 함수는 2초 후에 사용자 정보를 반환합니다.

// async와 await를 사용하여 이 API 호출을 기다리고, 사용자 이름을 콘솔에 출력하는 fetchUserData 함수를 작성하세요.

function fakeApiCall() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "John Doe", age: 30 });
    }, 2000);
  });
}

// fetchUserData 함수 완성
const fetchUserData = async () => {
  try {
    const userInfo = await fakeApiCall(); // userInfo: 사용자 정보 객체
    console.log(`사용자 이름 : ${userInfo.name}`);
  } catch (err) {
    console.log("호출 중 오류가 발생했습니다.");
  }
};

fetchUserData();
