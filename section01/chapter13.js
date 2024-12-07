// 콜백 함수(Callback Function) = 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미

// 1. 콜백함수
// function main(value) {
//   value();
// }

// function sub() {
//   console.log("i am sub");
// }

// main(sub);

// 1. 콜백함수 -> 함수 표현식으로 작성 가능
function main(value) {
  value();
}

main(() => {
  console.log("i am sub");
});

// 2. 콜백함수의 활용
// function repeat(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx);
//   }
// }

// function repeatDouble(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx * 2);
//   }
// }

// repeat(5);
// repeatDouble(5);

// 2. 콜백 함수를 이용해서, 중복 코드 개선
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});

repeat(5, (idx) => {
  console.log(idx * 3);
});
