// 조건문(Conditional Statement)
// - 특정 조건을 만족했을 때에만 실행되는 코드를 작성하기 위한 문법
// - 대표적으로 if, switch 조건문이 존재함

// 1. if 조건문 (=if문)
let num = 10;

if (num >= 10) {
  console.log("num은 10 이상입니다.");
} else if (num >= 5) {
  console.log("num은 5 이상입니다.");
} else if (num >= 3) {
  console.log("num은 3 이상입니다.");
} else {
  console.log("조건이 거짓입니다.");
}

// 하나의 조건
// if (조건식) {
//   // 조건식이 만족했을 때 수행할 코드들
// } else {
//   // 조건식이 만족하지 않을 때 수행할 코드
// }

// 여러 조건을 연속적으로 작성할 수 있음
// if (조건식) {
//   // 조건식이 만족했을 때 수행할 코드들
// } else if (다른 조건식) {
//   // 다른 조건식이 만족했을 때 수행할 코드들
// } else {
//   // 모든 조건식이 만족하지 않을 때 수행할 코드
// }

// 2. switch문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if보다 더 직관적이다.

// 소괄호 안에 있는 변수의 값과 일치하는 케이스를 탐색,
// 일치하는 케이스를 만나면 해당 블록을 실행 및 전체 케이스 출력
// break 키워드를 만나면 일치하는 케이스 까지만 실행하고 switch문 종료.

let animal = "cat";

switch (animal) {
  case "cat": {
    console.log("고양이");
    break;
  }
  case "dog": {
    console.log("강아지");
    break;
  }
  case "bear": {
    console.log("곰");
    break;
  }
  case "snake": {
    console.log("뱀");
    break;
  }
  case "tiger": {
    console.log("호랑이");
    break;
  }
  default: {
    // 위의 모든 케이스와 일치하지 않을 경우 실행
    console.log("그런 동물은 전 모릅니다유");
  }
}
