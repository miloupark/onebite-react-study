// 반복문(Loop, Iteration) = 어떠한 동작을 반복해서 수행할 수 있도록 만들어주는 문법
// 요구사항 ex) 1부터 100까지 콘솔에 하나씩 출력하세요.

// for (초기식; 조건식; 증감식) {
//   console.log("반복!")
// }

for (let idx = 0; idx <= 5; idx++) {
  // console.log(idx);
}

// for문의 조건식을 유지해야한다면 if문으로 break를 사용
for (let idx = 0; idx <= 10; idx++) {
  if (idx >= 5) {
    break;
  }
}

// 특정 회차를 건너뛰는 방법
for (let idx = 0; idx <= 10; idx++) {
  if (idx % 2 === 0) {
    // idx가 2로 나누어떨어지는 경우(짝수)
    continue; // 현재를 건너뛰고 다음 반복으로 이동
  }
  console.log(idx);

  if (idx >= 5) {
    break;
  }
}
