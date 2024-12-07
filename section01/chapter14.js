// 스코프(Scope) = 범위, 변수나 함수에 접근하거나 호출할 수 있는 범위를 말함
// -> 전역(전체 영역) 스코프 / 지역(특정 영역) 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcA() {
  let b = 2; // 지역 스코프
  console.log(a);
}

funcA();
// console.log(b); // is not defined

if (true) {
  let c = 1; // 지역스코프
}

for (let i = 0; i < 10; i++) {
  let d = 1; // 지역스코프
}

// 조건문, 반복문 안에서는 지역스코프를 갖지 않는다.
