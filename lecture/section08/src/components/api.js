const API_URL = "https://animal-api-two.vercel.app/"; // 동물 사진 데이터를 제공하는 API 엔드포인트

// API 요청 함수: 비동기로 API_URL에 fetch 요청을 보내고, 결과에서 photos 배열을 반환한다.
export const request = async (name) => {
  // name이 있으면 해당 동물, 없으면 전체 사진 요청
  const res = await fetch(name ? `${API_URL}${name}`: API_URL) ; // API에 GET 요청
  try {
    if (res) {
      let data = await res.json(); // 응답을 JSON으로 파싱
      return data.photos; // photos 배열 반환
    }
  } catch (err) {
    console.log(err); // 에러 발생 시 콘솔에 출력
  }
};
// api.js는 외부 API와의 통신(데이터 요청)을 담당하는 모듈이다.
