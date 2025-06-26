// 2_13 반복문
// 특정 작업을 반복적으로 수행 할 때 사용한다.
//
// [for문]
// 반복 횟수가 명확할 때 주로 사용
for (let i = 5; i > 0; i--) {
  console.log(i);
}
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// [while문]
// 조건이 참인 동안 반복. 반복 횟수가 명확하지 않을 때 주로 사용
let i = 1;
while (i < 5) {
  console.log(i);
  i++;
}

// [배열에 접근하는 반복문]
let arr = [1, 2, 3, 4, 5];

// 전통적인 for문으로 배열의 인덱스를 이용해 순회
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// [객체의 key, value, entries 활용]
let person = {
  name: "김요한",
  age: 25,
  height: 176,
};

// Object.keys: 객체의 key(프로퍼티명)만 배열로 반환
console.log(Object.keys(person));
// Object.values: 객체의 value(값)만 배열로 반환
console.log(Object.values(person));

let newArray = Object.keys(person);

// key, value값을 for문으로 순회
for (let i = 0; i < newArray.length; i++) {
  let nowkey = newArray[i]; // key value
  console.log(`key: ${nowkey}, value: ${person[nowkey]}`);
}

// values만 순회
let newArray2 = Object.values(person);

for (let i = 0; i < newArray2.length; i++) {
  console.log(`value: ${newArray2[i]}`);
}

// Object.entries: [key, value] 쌍의 배열 반환
console.log(Object.entries(person));
let newArray3 = Object.entries(person);

for (let i = 0; i < newArray3.length; i++) {
  console.log(`key: ${newArray3[i][0]}, value: ${newArray3[i][1]}`);
}

// [for...of문]
// 배열 등 반복 가능한(iterable) 객체를 순회할 때 사용
let arr4 = [1, 2, 3, 4, 5];

for (let i of arr) {
  console.log(i);
}

// [for...in문]
// 객체의 key(프로퍼티명)를 순회할 때 사용
let person2 = {
  name: "김좌진",
  age: 25,
  height: 180,
};
// for...in은 객체 순회에 적합, for...of는 배열 등 iterable 순회에 적합

for (let key in person2) {
  console.log(`key ${key}, value: ${person[key]}`);
}
