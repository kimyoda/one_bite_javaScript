// 배열 내장함수
// 자바스크립트 배열에서 자주 사용하는 내장 함수들에 대한 설명과 예시

let arr = [1, 2, 3, 4, 5];

// [forEach]
// 정의: 배열의 각 요소에 대해 주어진 콜백 함수를 한 번씩 실행 (반환값 없음)
// 용도: 단순 반복, 요소 출력, 부수 효과(side effect) 작업에 사용
// 원본 배열 변경: X
// 사용법: 배열.forEach(콜백)
// 콜백 인자: (요소값, 인덱스, 원본배열)
arr.forEach((el, idx, array) => {
  console.log(`${idx}번째 요소는 ${el}입니다.`);
  console.log(array);
});

// [map]
// 정의: 배열의 각 요소를 변환하여 새로운 배열을 반환
// 용도: 배열의 값을 가공해 새 배열을 만들 때 사용
// 원본 배열 변경: X
// 반환값: 변환된 새 배열
// 사용법: 배열.map(콜백)
let newArray = arr.map((el) => {
  return el * 10;
});
console.log(newArray); // [10, 20, 30, 40, 50]

// [at]
// 정의: 지정한 인덱스의 요소를 반환 (음수면 뒤에서부터 셈)
// 용도: 배열의 특정 위치 요소에 쉽게 접근
// 원본 배열 변경: X
// 사용법: 배열.at(인덱스)
let colors = ["green", "blue", "purple"];
console.log(colors.at(-1)); // "purple" (마지막 요소)

// [includes]
// 정의: 배열에 특정 값이 포함되어 있는지 boolean으로 반환
// 용도: 값 존재 여부 확인
// 원본 배열 변경: X
// 사용법: 배열.includes(값, [검색시작인덱스])
console.log(colors.includes("red", 2)); // false (2번 인덱스부터 "red" 찾기)
console.log(colors.includes("blue", 1)); // true (1번 인덱스부터 "blue" 찾기)

// [indexOf]
// 정의: 배열에서 특정 값의 첫 번째 인덱스를 반환, 없으면 -1
// 용도: 값의 위치(인덱스) 찾기
// 원본 배열 변경: X
// 사용법: 배열.indexOf(값, [검색시작인덱스])
console.log(colors.indexOf("purple")); // 2
console.log(colors.indexOf("yellow")); // -1

// [findIndex]
// 정의: 콜백이 true를 반환하는 첫 번째 요소의 인덱스를 반환, 없으면 -1
// 용도: 객체 배열 등에서 조건에 맞는 요소의 인덱스 찾기
// 원본 배열 변경: X
// 사용법: 배열.findIndex(콜백)
let colors2 = [
  { id: 1, color: "green" },
  { id: 2, color: "blue" },
  { id: 3, color: "purple" },
  { id: 4, color: "yellow" },
];
// 아래는 단순 출력 예시 (실제 인덱스 반환은 아님)
colors2.findIndex((el, idx, array) =>
  console.log(`${idx} 번째 값은 id : ${el.id}, color : ${el.color}`)
);
colors2.findIndex((el, idx, array) => console.log(array));
// 실제 조건에 맞는 인덱스 찾기 예시:
const idxPurple = colors2.findIndex((el) => el.color === "purple");
console.log(idxPurple); // 2

// [find]
// 정의: 콜백이 true를 반환하는 첫 번째 요소 자체를 반환, 없으면 undefined
// 용도: 객체 배열 등에서 조건에 맞는 요소(값) 자체를 찾을 때
// 원본 배열 변경: X
// 사용법: 배열.find(콜백)
let idx = colors2.find((el) => el.color === "purple");
console.log(idx); // { id: 3, color: "purple" }

// [filter]
// 정의: 콜백이 true를 반환하는 모든 요소로 새 배열 생성
// 용도: 조건에 맞는 요소만 추출해 새 배열 만들기
// 원본 배열 변경: X
// 반환값: 조건에 맞는 요소만 담긴 새 배열
// 사용법: 배열.filter(콜백)
let filterArray = colors2.filter((el, idx, arr) => el.id > 1);
console.log(filterArray); // id가 1보다 큰 객체들만 배열로 반환

// [slice]
// 정의: 지정한 범위(start~end-1)의 요소로 새 배열 반환 (원본 불변)
// 용도: 배열의 일부분만 복사해 새 배열 만들기
// 원본 배열 변경: X
// 반환값: 잘라낸 새 배열
// 사용법: 배열.slice(start, end)
let slicedArray = colors2.slice(1, 3);
console.log(slicedArray); // [{ id: 2, color: "blue" }, { id: 3, color: "purple" }]

// [정리]
// - 모든 함수는 배열 뒤에 .으로 붙여 사용 (ex: arr.map, arr.filter 등)
// - forEach: 반환값 없음, 단순 반복
// - map: 변환된 새 배열 반환
// - at: 특정 위치 요소 반환(음수 인덱스 지원)
// - includes: 값 존재 여부 확인
// - indexOf/findIndex: 인덱스 반환, find: 값 자체 반환
// - filter: 조건에 맞는 요소만 추출해 새 배열 생성
// - slice: 배열의 일부분만 복사해 새 배열 생성(원본 불변)
