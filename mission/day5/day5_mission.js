// Day4 미션

// 미션1 배열, 객체, 반복문
// 아래와 같은 배열에서, 칼로리가 500이상인 음식의 이름을 출력
let foods = [
  { name: "Burger", calories: 800 },
  { name: "Apple", calories: 52 },
  { name: "Pizza", calories: 550 },
  { name: "Salad", calories: 150 },
];

const result = [];

// forEach 반복문을 사용해 foods 배열의 각 요소를 순회
foods.forEach((el) => {
  if (el.calories > 500) {
    // 조건이 맞을 시 result에 값 추가
    result.push(el.name); // 500칼로리 초과 음식의 이름을 result 배열에 추가
    console.log(el.name); // 해당 음식 이름을 콘솔에 출력
  }
});

console.log(result); // 500칼로리 초과 음식 이름이 담긴 배열 출력

// 미션2 생성자 함수
// 동물의 종류와 소리를 인자로 받아 객체를 생성하는 Animal 생성자 함수를 작성해주세요. 그리고 makeSound 메서드를 추가하여 동물이 내는 소리를 출력하는 기능을 구현하세요.

// Animal 생성자 함수 정의
// animal(종류), sound(소리)를 받아서 객체의 속성으로 저장
function Animal(animal, sound) {
  this.animal = animal;
  this.sound = sound;

  // makeSound 메서드: 동물이 내는 소리를 출력
  this.makeSound = function () {
    console.log(`${this.animal}가 소리를 낸다: ${this.sound}`);
  };
}

// Animal 생성자 함수로 객체 생성
const dog = new Animal("개", "멍멍");
dog.makeSound(); // "개가 소리를 낸다: 멍멍"
const cat = new Animal("고양이", "미야옹");
cat.makeSound(); // "고양이가 소리를 낸다: 미야옹"
