// 2_11. 배열
// 비원시타입 - 배열
// 순서가 있는 요소들의 집합, 리스트라고 할 수 있다.

// 배열 생성 첫번째 방법
 let arr1 = new Array(1, 2, 3); // 추가 설명: new Array(1, 2, 3)은 [1, 2, 3]과 같은 배열을 생성
 let arr2 = new Array(3); // 추가 설명: new Array(3)은 3개의 빈 요소를 가진 배열([empty × 3])을 생성
 
 console.log(arr1);
 console.log(arr2);

// 배열 생성 2번째 방법
 let arr3 = [1, 2, 3]; // 추가 설명: 대괄호([])를 사용한 배열 리터럴 방식이 더 많이 사용됨
 let arr4 = [3]; // 추가 설명: [3]은 숫자 3 하나만 들어있는 배열 생성

 console.log(arr3);
 console.log(arr4);

 let multipleArr = [
  {name: "김요한"}, // 추가 설명: 객체도 배열의 요소로 넣을 수 있음
  1,
  'array',
  function () {
    console.log("hello world!");
  }, // 추가 설명: 함수도 배열의 요소로 넣을 수 있음
  null,
  undefined,
 ];

 console.log(multipleArr);

//  index는 0번부터 시작한다. 배열의 개수보다 -1작은 값을 추가해줘야한다.
 let array = [1, "Hello", null];

 console.log(array[0]); // 추가 설명: 0번째 인덱스는 첫 번째 요소
 console.log(array[1]); // 추가 설명: 1번째 인덱스는 두 번째 요소
 console.log(array[2]); // 추가 설명: 2번째 인덱스는 세 번째 요소

//  배열요소 추가 는 push, unshift()가 있다.
// push는 배열의 맨마지막에 요소를 추가한다.
// unshift요소는 배열의 맨첫번째에 추가한다.
let fruits = ['apple', 'orange', 'peach'];
fruits.unshift('grape'); // 추가 설명: 'grape'가 배열의 맨 앞에 추가됨
// fruits.push('banana'); // 추가 설명: push를 사용하면 'banana'가 맨 뒤에 추가됨

console.log(fruits);

// 배열요소를 수정하면, 배열 자체가 아니라 배열 요소 또한 특정 요소에 접근해서 수정할 수 있다.
const animal = ['cat', 'dog', 'hamster'];


animal[2] = 'parrot'; // 추가 설명: 2번째 인덱스(세 번째 요소)인 'hamster'가 'parrot'으로 변경됨

console.log(animal);


// 배열 요소 삭제
// pop, 맨 마지막 요소 삭제
// shift 맨 첫번째 요소 삭제
// splice 첫번째 인덱스에서, 두번째 인덱스만큼 삭제를 반환하여 삭제하는 
const colors = ['purple', 'skyblue', 'green', 'yellow', 'red'];
// colors.pop(); // 추가 설명: 맨 마지막 요소('red')가 삭제됨
// colors.shift(); // 추가 설명: 맨 첫 번째 요소('purple')가 삭제됨
// colors.splice(1, 3) // 추가 설명: 1번 인덱스부터 3개 요소('skyblue', 'green', 'yellow')가 삭제됨
colors.pop(); // 추가 설명: 실제로 'red'가 삭제됨
console.log(colors.length); // 추가 설명: pop 이후 배열의 길이(요소 개수) 출력
