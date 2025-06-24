// 2_5 조건문
// 특정 조건에 따라 코드를 실행하거나, 실행하지 않을 때 사용하는 구문이다.

// 1. if 문

let num = 50; // num 변수에 50을 할당

// if문 예시 (중첩 if문)
// if (num < 10) {
//   console.log("num은 10보다 작습니다");
//   // num이 10보다 작을 때 실행
//   // 중첩 조건문: 위 조건이 아니면 아래 조건을 다시 확인
// } else {
//   if (num > 10) {
//     console.log("num은 10보다 큽니다.");
//     // num이 10보다 클 때 실행
//   } else {
//     console.log("num은 10입니다.");
//     // num이 10과 같을 때 실행
//   }
// }

// if ~ else if ~ else 문 예시
if (num < 10) {
  console.log("num은 10보다 작습니다."); // num이 10보다 작으면 실행
} else if (num > 10) {
  console.log("num은 10보다 큽니다."); // num이 10보다 크면 실행
} else {
  console.log("num은 10입니다."); // 위 조건이 모두 아니면(즉, 10과 같으면) 실행
}

// switch case문 예시

let fruit = "pineapple"; // fruit 변수에 'pineapple' 할당

switch (fruit) {
  case "banana": // fruit가 'banana'일 때
    console.log("바나나");
    break; // 해당 case 실행 후 switch문 종료
  case "orange": // fruit가 'orange'일 때
    console.log("오렌지");
    break;
  case "apple": // fruit가 'apple'일 때
    console.log("사과");
    break;
  case "grape": // fruit가 'grape'일 때
    console.log("포도");
    break;
  default: // 위의 case에 모두 해당하지 않을 때
    console.log("다른 과일");
}
