// Truthy & Falsy
// 참이나 거짓을 의미하지 않는 값도, 조건문 내에서 참이나 거짓으로 평가하는 특징

// 1. Falsy한 값(거짓 같은 값)
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // Big Integer라는 특수한 자료형에 해당되는 값, 웹 개발에선 잘 사용하지 않음

if (!f1) {
  console.log("falsy");
}
// not f1 = f1은 falsy한 값으로써 거짓으로 평가되기 때문에 not을 만나서 조건식이 참이됨
// if (조건식) {
// // 조건식이 참일 때 실행할 코드
// }

// 2. Truthy한 값(참 같은 값)
// -7가지 Falsy 한 값들 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t4) {
  console.log("Truthy");
}

// 3. 활용 사례
function printName(person) {
  if (!person) {
    // (person === undefined || person === null)
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person = { name: "바켸빈" };
printName(person);

// MDN > Falsy
// https://developer.mozilla.org/ko/docs/Glossary/Falsy

// MDN > Truthy
// https://developer.mozilla.org/en-US/docs/Glossary/Truthy
