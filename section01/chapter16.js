// 1. 상수 객체
const animal = {
  type: "인간",
  name: "박혜빈",
  color: "인간 색",
};

// animal = 123; // 새로운 값 할당
animal.age = 29; // 추가
animal.name = "바켸빈"; // 수정
delete animal.color; // 삭제

console.log(animal);
// 상수 객체에 기존의 프로퍼티를 추가, 수정, 삭제하는 행위는 가능
// 새로운 값을 할당하는 것은 불가능

// 2. 메서드
// - 값이 함수인 프로퍼티를 말함

const person = {
  name: "바켸빈",
  // 메서드
  sayHi() {
    console.log("안녕!");
  },
};

person.sayHi();
person["sayHi"]();

// 메서드는 객체의 동작을 정의할 때 사용
// 프로퍼티들은 객체의 정보를 갖고, 함수 프로퍼티는 메서드로써 객체의 동작을 정의
