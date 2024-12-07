// 자료형(Type) = 집합
// 동일한 속성이나 특징을 가진 원소들을 묶은 것

// JS의 자료형(DataType)
// 원시타입 - Number / String / Boolean / Null / Undefined
// (원시타입 = 기본형 타입, 프로그래밍에 있어 가장 기본적인 값들의 타입을 의미)
// 객체타입 - Object - Array / Function / RegexExp

// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN; // not a number

// 2. String Type
let myName = "박혜빈";
let myLocation = "마포구청역";
let introduce = myName + myLocation;

let introduceText = `${myName}은 ${myLocation}에 거주합니다`;
// 백틱(`)을 사용하면 ${} 안에 변수를 넣어 문자열을 동적으로 작성할 수 있음

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null;
// 명시적으로 변수에 할당

// 5. Undefined Type
let none;
console.log(none);
// undefined 변수를 선언하고 그 변수에 어떠한 값도 집어넣지 않았을 때 자동으로 할당되는 값
