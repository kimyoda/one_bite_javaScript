// import { num, add, User } from "./test.mjs";
// import * as testModule from "./test.mjs";
import testModule from "./test.mjs";

// console.log(testModule);
// console.log(testModule.add(10, 19));
console.log(new testModule("요한"));

/*
  - 첫 번째 import: 각각의 export된 변수/함수를 개별적으로 불러옴
  - 두 번째 import: testModule이라는 네임스페이스 객체로 모든 export를 묶어서 불러옴
  - 세 번째 import: default로 export된 User만 import (이 경우 이름을 자유롭게 지정 가능)
  - 마지막 줄: testModule(User 생성자 함수)로 객체를 생성하여 콘솔에 출력
*/
