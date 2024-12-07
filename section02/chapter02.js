// 단락평가(Short-circuit Evaluation)
function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

// console.log(returnFalse() && returnTrue()); // false
// AND 연산과 같은 논리 연산식에서 첫 번째 피연산자의 값만으로도 이 연산의 결과를 확정할 수 있다면,
// 두 번째 피연산자에는 접근조차 하지 않는 실행 방식, returnTrue 함수는 호출조차 되지 않음

// console.log(returnTrue() && returnFalse()); // True 함수, False 함수
// returnTrue 함수 호출의 결과가 true이기 때문에 true && true = true이고
// true && false = false이기 때문에, 첫번째 피연산자 값만으로는 이 연산의 결과가 확정나지 않음
// 따라서 콘솔에 True 함수, False 함수 그리고 마지막 연산 결과까지 모두 출력됨

console.log(returnTrue() || returnFalse()); // True 함수, true

// *단락평가는 Truthy, Falsy한 값에도 적용 가능
function returnFalse2() {
  console.log("False 함수");
  return undefined;
}

function returnTrue2() {
  console.log("True 함수");
  return 10;
}

// console.log(returnTrue2() || returnFalse2()); // True 함수, 10
console.log(returnFalse2() && returnTrue2()); // False 함수, undefined

// 단락 평가 활용 사례
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "바켸빈" });

// 참고
// Truthy || Truthy = 연산의 결과값은 첫 번쪠 Truthy한 값 반환
// Truthy && Truthy = 연산의 결과값은 두 번쪠 Truthy한 값 반환

// MDN > Short-circuit Evaluation
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_operators
