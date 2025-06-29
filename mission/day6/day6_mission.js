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

// 미션2 API 호출2
// 아래의 API 주소는 포켓몬들의 정보가 담겨있는 data를 반환합니다. 주어진 API 주소를 사용해, 아래의 조건을 모두 만족하는 코드를 작성하세요.
// try/catch를 사용한 에러 핸들링
// async/await을 사용한 비동기 처리
// 받아온 데이터들 중 "color 값이 green"인 포켓몬의 정보들이 담긴 배열을 출력하세요.
// 출력 결괏값 : (이상해씨, 이상해풀, 이상해꽃, 캐터피, 단데기, 모다피, 우츠동, 우츠보트, 스라크의 정보가 담긴 9개의 객체들이 모인 배열)

// 1. API 호출에 사용할 URL을 상수로 선언
const API_URL = "https://pokemon-api-ecru-eta.vercel.app";

// 2. 포켓몬 데이터를 비동기로 가져오는 함수 선언 (async 사용)
const fetchMissionData = async () => {
  // 3. 에러 처리를 위해 try-catch 사용
  try {
    // 4. fetch로 API에 요청을 보내고, 응답을 기다림
    const response = await fetch(API_URL);
    // 5. 응답(response)에서 JSON 데이터를 추출해서 data 변수에 저장
    const data = await response.json();
    // 6. data.data 배열에서 color가 'green'인 포켓몬만 골라냄
    const filteredPokemons = data.data.filter((el) => el.color === "green");
    // 7. green 포켓몬들의 정보가 담긴 배열을 콘솔에 출력
    console.log(filteredPokemons);
  } catch (err) {
    // 에러 발생 시 에러 내용을 콘솔에 출력
    console.log(err);
  }
};

// 8. 위에서 정의한 함수 실행 (실제로 API 호출 시작)
fetchMissionData();
