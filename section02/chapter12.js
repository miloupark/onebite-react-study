// 콜백함수
function task() {
  setTimeout(() => {
    console.log("자바스크립트를 잡으면 잡아슼흐립트!");
  }, 3000);
}

task();

// function add(a, b) {
//   setTimeout(() => {
//     const sum = a + b;
//     console.log(sum);
//   }, 3000);
// }

// add(1, 2);

// 비동기 처리의 결과값인 sum이라는 변수를 add함수 바깥에서도 사용할 수 있게 만들기
function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum); // 계산된 합을 콜백 함수에 전달
  }, 3000);
}

add(1, 2, (value) => {
  console.log(value); // 비동기 처리의 결과 값을 사용하고자하는 콜백 함수를 함께 전달
});

// 동작 설명:
// 1. add 함수 호출 시 setTimeout 함수가 실행되어 비동기적으로 3초 대기.
// 2. 3초 후 a와 b의 합(sum)을 계산한 뒤, 콜백 함수로 전달.
// 3. 전달받은 결과값(sum)을 콜백 함수에서 출력 (console.log).

// 음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "아아";
    callback(food);
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}

// 3초간 아아가 나오고 2초 동안 식히는 동작
// 콜백 지옥 -> promise 비동기 작업을 도와주는 객체 이용하기
orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});
