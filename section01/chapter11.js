// 함수선언
function greeting() {
  console.log("안녕하세요.");
}

console.log("호출 전");
greeting();
console.log("호출 후");

// 직사각형 넓이(1)
function getArea() {
  let width = 10;
  let height = 20;
  let area = width * height;

  console.log(area);
}

getArea();

// 직사각형 넓이(2)
function getArea2(width, height) {
  // (매개변수)
  let area2 = width * height;

  console.log(area2);
}

getArea2(10, 20); // 함수 호출할 때 인수를 매개변수에 전달하여 실행
getArea2(30, 30);
getArea2(120, 200);

// 직사각형 넓이(3)
function getArea3(width, height) {
  let area3 = width * height;

  return area3; // 반환값 = 함수호출의 반환값
}

let area4 = getArea3(100, 20);
console.log(area4);

let area5 = getArea3(2, 4);
console.log(area5);

// 호이스팅 -> 끌어올리다 라는 뜻
function getRange(width, height) {
  function another() {
    // 중첩 함수: 함수 내부에 또 다른 함수 선언 가능
    console.log("another");
  }

  another();
  let range = width * height;

  return range;
}
let range1 = getRange(30, 20);
console.log(range1);
