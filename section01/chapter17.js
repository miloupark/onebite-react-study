// 배열(Array) = 여러 개의 값을 순차적으로 담을 수 있는 자료형
// 배열은 객체와 동일하게 여러 개의 값을 담는 자료형, 차이점은 배열은 순차적으로 담는다.

// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 (대부분 사용)

let arrC = [1, 2, 3, true, "hello", null, undefined, () => {}, {}, []];

// 2. 배열 요소 접근
let item1 = arrC[0];
let item2 = arrC[1];

arrC[0] = "hello"; // 특정 원소의 값 수정가능

console.log(item1, item2);
console.log(arrC);
