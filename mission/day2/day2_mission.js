// 미션1. switch case문 작성하기
// switch/case문을 사용해서 조건문을 작성하세요.

// 생성한 animal 변수에 할당된 값이 cat일 경우에 '고양이'가 출력될 수 있도록 조건문을 알맞게 작성해주세요.

// case 문은 dog, tiger, cat, lion으로 나눠서 작성하고, case문의 내부에는 각각의 동물을 출력하는 코드를 작성해주세요.

let animal = "cat"; // 동물 이름을 저장하는 변수

switch (
  animal // animal 값에 따라 실행할 코드를 선택
) {
  case "dog": // animal이 'dog'일 때
    console.log("강아지");
    break;
  case "tiger": // animal이 'tiger'일 때
    console.log("호랑이");
    break;
  case "lion": // animal이 'lion'일 때
    console.log("사자");
    break;
  case "cat": // animal이 'cat'일 때
    console.log("고양이");
    break;
  default: // 위의 경우에 모두 해당하지 않을 때
    console.log("참새");
}

// 미션2. 함수
let answer = ""; // 결과를 저장할 변수

function connectStrings(str1, str2) {
  // 두 문자열을 연결하는 함수, str1과 str2는 매개변수
  answer = str1 + " " + str2; // 두 문자열을 이어붙여 answer에 저장
}

connectStrings("hello", "javascript"); // 함수 호출, "hello"와 "javascript"를 연결

console.log(answer); // 연결된 결과를 출력
