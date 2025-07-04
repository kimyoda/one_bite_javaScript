// const num = 35;

// function add(num1, num2) {
//   return num1 + num2;
// }

function User(name) {
  this.name = name;
}

// export { num, add, User };

export default User;

/*
  - 위의 num, add, User는 각각 export할 수 있음 (named export)
  - export default는 한 파일에 하나만 존재 가능하며, import 시 이름을 자유롭게 지정할 수 있음
  - 예시:
    export { num, add, User };
    import { num, add, User } from './test.mjs';

    export default User;
    import User from './test.mjs';
*/
