// 연산자(operator) = 프로그래밍에서의 다양한 연산을 위한 기호, 키워드를 말함
// 덧셈 +, 뺄셈 -, 곱셈 *, 나눗셈 /

// 1. 대입 연산자: =
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = (1 + 2) * 10;

// 3. 복합 대입 연산자
let num7 = 10;
num7 += 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 10;

// 4. 증감 연산자
let num8 = 10;
num8++; // 전위 연산
++num8; // 후위 연산
// console.log(++num8);
// console.log(num8++);

// 5. 논리 연산자
let or = true || false;
// || = OR 연산자 = 두 값 중 하나라도 참이면 참

let and = true && false;
// && = AND 연산자 = 두 값이 모두 참일 때만 참

let not = !true;
// ! = NOT 연산자 = 논리 값을 반전시켜 true는 false로, false는 true로 바꿈

// console.log(or, and, not); // true false false

// 6. 비교연산자(두 개의 값을 비교)
let comp1 = 1 === 2; // 동등 비교 연산자
let comp2 = 1 !== 2; // 비동등 비교 연산자
// console.log(comp1, comp2); // false, true

let comp3 = 2 > 1;
let comp4 = 2 < 1;
// console.log(comp3, comp4); // true, false

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;
// console.log(comp5, comp6); // true, true

// ||
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Logical_OR

// &&
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Logical_AND

// !
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Logical_NOT

// ===
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_operators
