// Day3 미션
// 미션1. 화살표 함수 작성하기
// 두 숫자의 곱을 반환하는 화살표 함수를 작성하고, 3과 4를 인자로 호출하여 결과를 출력
const secondMultiply = (num1, num2) => num1 * num2;
console.log(secondMultiply(3, 4)); // 12

// 미션2. 함수 작성하기
// 책의 제목과 저자 이름을 속성으로 가진 `book` 객체를 만들고, 책의 정보를 반환하는 getSummary 메서드를 작성.
const book = {
  title: "한입북스",
  author: "김요한",

  getSummary: function () {
    // this를 사용해 객체의 속성에 접근
    return `이 책의 제목은 "${this.title}이고 책의 저자는 ${this.author}입니다.`;
  },
};

console.log(book.getSummary());

// 미션3. 스코프와 함수
// 두 숫자 a와 b를 인자로 받아, b에 5를 더한 값을, a에 더한 결과를 반환하는 sumNumbers 함수를 작성하세요.
function sumNumbers(a, b) {
  // 내부 함수(중첩 함수) 정의
  function addFive(number) {
    // b에 5를 더하는 역할
    return number + 5;
  }
  // addFive를 호출해 b에 5를 더한 값을 result에 저장
  let result = addFive(b);
  // a와 result를 더해 반환
  return a + result;
}
console.log(sumNumbers(3, 7)); // 출력: 15 (7에 5를 더한 후 3을 더함)
console.log(sumNumbers(10, 5)); // 출력: 20 (5에 5를 더한 후 10을 더함)
