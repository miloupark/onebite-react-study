// 1. ?? = null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
// 양쪽 피연산자(연산에 사용되는 값) 중 null 또는 undefined이 아닌 값을 반환
let var5 = var1 ?? var3;
let var6 = var3 ?? var2;
// 양쪽 피연산자 모두 null 또는 undefined이 아니면 첫 번째 값을 반환

let userName = "박혜빈";
let userNickName = "마포구흙주먹";

let displayName = userName ?? userNickName;
// userName이 undefined이라면 hyebinpark
// userName이 있으면 useName이 displayName에 저장

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var7 = 1;
var7 = "hello";
var7 = true;
var7 = 20;

let t1 = typeof var7;
// console.log(t1);

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환
let var8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀"
let res = var8 % 2 === 0 ? "짝수" : "홀수";
// ?를 기준으로 첫번째 항에는 조건식
// :을 기준으로 왼쪽 항에는 참일 때의 반환값, 오른쪽에는 거짓일 때의 반환값
console.log(res);
