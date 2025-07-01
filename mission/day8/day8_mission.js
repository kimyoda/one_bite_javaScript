// 미션1. 자바스크립트의 this
// 다음 코드에서 regularFunction과 arrowFunction이 있습니다.

// 두 함수 모두 this가 어떻게 작동하는지 확인하기 위해 각각 this.value를 출력하려고 합니다.

// 각 함수의 this가 무엇을 가리키는지 확인하고, 각 함수가 정상적으로 this.value를 출력할 수 있도록 코드를 수정하세요. (주석으로 작성된 질문에 대한 답도 주석으로 남겨주세요!!)
const obj = {
  value: 42,
  regularFunction: function () {
    console.log(this.value); // 여기서 this는 무엇을 가리키나요?
    // 여기서 this는 obj의 객체 즉 42를 가리킨다.
  },
  arrowFunction: () => {
    console.log(this.value); // 여기서 this는 무엇을 가리키나요?
    // 여기서 this는 전역객체를 가리킨다. 화살표 함수의 this는 전역 객체를 가리킨다.
  },
};

obj.regularFunction(); // 출력: 42
obj.arrowFunction(); // 출력: undefined (이유를 설명해보세요) -> undefined의 이유는 전역객체의 value를 찾지 못해서이다. 외부 스코프를 참조하기 때문인데, 현재 외부 스코프는 전역객체이기 떄문이다.
