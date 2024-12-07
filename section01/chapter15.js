// 객체(Object)
// - 원시 타입이 아닌 객체 타입의 자료형
// - 여러가지 값을 동시에 저장할 수 있는 자료형을 의미

// JS의 자료형(DataType)
// 원시타입 - Number / String / Boolean / Null / Undefined
// (원시타입 = 기본형 타입, 프로그래밍에 있어 가장 기본적인 값들의 타입을 의미)
// 객체타입 - Object - Array / Function / RegexExp

// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자 (내장 함수)
let obj2 = {}; // 객체 리터럴 (대부분 사용)

let person = {
  name: "박혜빈",
  age: 29,
  hobby: "전직 준비",
  "future job": "FE Developer",
  love: "coffee n dog",
  extra: {},
  // key(프로퍼티의 이름 역할): value(프로퍼티의 값),
  // 프로퍼티의 개수에는 제한이 없음, value에 들어올 수 있는 자료형의 타입도 제한이 없다.
  // 프로퍼티의 key에 사용되는 문자열은 ""를 붙이지 않아도 됨, 예외적으로 띄어쓰기 포함인 경우 "" 감싸줘야함
  // ex) person 객체의 프로퍼티는 Key = Name, Value = 문자열 "박혜빈"
  // ex) 객체 프로퍼티들은 키의 이름에 따라 불림, 첫 번째 프로퍼티는 name 프로퍼티, 두번째는 age...
};

// 3. 객체 프로퍼티를 다루는 방법
// 3-1. 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
console.log(name); // 가로 줄 타입스크립트와 관련된 경고사항이므로 무시(vscode 기본 기능)

let age = person["age"]; // 괄호 표기법은 접근하고자 하는 프로퍼티의 키를 문자열로 명시
console.log(age);

let property = "hobby";
let hobby = person[property];
// person 객체에서 변수 property의 값인 hobby 프로퍼티의 값을 꺼내오게 됨
console.log(hobby);

// 3-2. 새로운 프로퍼티 추가하는 방법
person.job = "잡부"; // 점 표기법
person["favoriteFood"] = "아이스아메리카노"; // 괄호 표기법

console.log(person);

// 3-3. 프로퍼티를 수정하는 방법
person.job = "디자이너 가면을 쓴 잡부";
person["favoriteFood"] = "연남동 그리너 샐러드와 포케";

console.log(person);

// 3-4. 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

// 3-5. 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person; // name 프로퍼티가 person 객체에 있는지 없는지?
let result2 = ["cat"] in person;

console.log(result1); // true
console.log(result2); // false
