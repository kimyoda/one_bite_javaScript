// 3_4 API 호출
// api란?
// API(Application Programming Interface)는 프로그램끼리 소통할 수 있게 해주는 '약속'입니다.
// 여기서는 웹에서 클라이언트(브라우저)와 서버가 데이터를 주고받는 통로 역할을 합니다.
// 즉, 웹 브라우저(클라이언트)가 서버에 데이터를 요청하고, 서버가 응답을 보내는 구조입니다.

// 클라이언트와 서버 통신
// 웹 브라우저(클라이언트)는 네트워크를 통해 서버에 요청(request)을 보내고,
// 서버는 요청에 맞는 데이터를 찾아 응답(response)합니다.
// 이 과정에서 데이터를 주고받는 규칙이 바로 API입니다.

// 웹 브라우저에서 네트워크를 통해 데이터를 제공하는 서버와 통신한다.
// 브라우저는 서버로부터 정보를 제공받는 클라이언트라고 할 수 있다. 웹이나 앱을 사용할 때 원하는 데이터를 요청하고 전달받는 과정이다.
// → 사용자가 웹사이트에서 버튼을 누르거나 페이지를 열 때, 서버에 데이터를 요청하고 받아오는 것이 바로 API 호출입니다.

// 커피를 주문하는 방식 (API의 비유)
// 손님(클라이언트)이 원하는 커피를 주문(요청) -> 바리스타(서버)가 원두(데이터)를 선택한다.
// 바리스타가 창고(데이터베이스)에서 원두를 가져오고 커피(응답)를 제작 후 전달하는 과정과 유사하다고 볼 수 있다.
// → 즉, 사용자가 원하는 정보를 요청하면, 서버가 데이터를 찾아서 전달해주는 것과 같습니다.

// 웹에서 데이터를 받는 단계
// 1. 클라이언트가 원하는 데이터 요청을 서버로부터 한다. (fetch 등으로 요청)
// 2. 서버는 요청 받은 데이터를 데이터베이스에서 찾는다.
// 3. 찾은 데이터를 꺼내서 서버에 전달한다.
// 4. 서버는 알맞은 데이터를 클라이언트에 전달한다. (응답)
// → 이 전체 과정이 API 호출의 흐름입니다.

// json을 통해 fetch로 결과값 할당
// let response = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
// 위 코드는 fetch로 서버에 요청을 보내고, 응답을 받은 후 콘솔에 출력합니다.
// .then()은 요청이 성공했을 때 실행, .catch()는 실패했을 때 실행됩니다.

// async, awiat를 활용하여 호출
// const getData = async () => {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await response.json();
//   console.log(data);
// };
//
// getData();
// 위 코드는 async/await를 사용해 비동기 코드를 더 읽기 쉽게 작성한 예시입니다.
// fetch로 데이터를 받아올 때까지 기다렸다가, json으로 변환한 뒤 콘솔에 출력합니다.

// try, catch
// 아래 코드는 async/await와 try-catch를 함께 사용해, 에러가 발생해도 안전하게 처리할 수 있도록 한 예시입니다.
const getData = async () => {
  try {
    // fetch로 서버에 요청을 보내고, 응답을 기다림
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    // 응답(response)에서 JSON 데이터를 추출
    let data = await response.json();
    // 받아온 데이터를 콘솔에 출력
    console.log(data);
  } catch (err) {
    // 에러가 발생하면 콘솔에 에러 내용 출력
    console.log(err);
  }
};

getData(); // 위에서 정의한 함수 실행 (실제로 API 호출 시작)
