// 형 변환(Type Casting) = 어떤  값의 타입을 다른 타입으로 변경하는 것

// 형 변환 = 묵시적 형 변환 / 명시적 형 변환
// 묵시적 형 변환(암묵적 형변환) = 개발자가 직접 설정하지 않아도 자바스크립트 엔젠이 형 변환 하는 것
// 명시적 형 변환 = 개발자가 직업 함수등을 이용해 형 변환을 일으킴

// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는것

let num = 10;
let str = "20";

const result = num + str;

// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
// -> 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);

let str2 = "10개";
let strToNum2 = parseInt(str2);

// -> 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + "입니다");

// number 내장함수
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number

// parseInt 내장함수
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/parseInt

// sting 내장함수
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/String
