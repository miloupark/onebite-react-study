// 5가지 배열 변형 메서드

// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
// ex. 웹서비스 개발 시 특정 조건에 의해서 검색시키는 기능 또는 카테고리별 필터 같은 기능을 만드는데 사용

let arr1 = [
  { name: "박혜빈", hobby: "전직 준비" },
  { name: "바켸빈", hobby: "이직 준비" },
  { name: "바켸뿡", hobby: "방구 준비" },
];

// const hobbyPeople = arr1.filter((item) => {
//   if (item.hobby === "방구 준비") return true;
// });

// 화살표 함수를 조건문만 떼어서 조건식만 반환하는 걸로 단축할 수 있다.
const hobbyPeople = arr1.filter((item) => item.hobby === "방구 준비");

console.log(hobbyPeople);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  // 매개변수로 현재요소, 반복 카운트, 원본 배열 전달받음
  return item * 2;
});

console.log(mapResult1);

const names = arr1.map((item) => item.name);
// arr1 배열을 순회하면서 각각 item.name 프로퍼티의 값들만 모아서 새로운 배열로 map메서드가 반환시켜줌
console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드(숫자의 대소관계를 기준으로 정렬하는 것이 아니고 사전순으로 정렬!)
// let arr3 = [10, 3, 5];
// arr3.sort();

// console.log(arr3);

// 숫자의 대소 관계로 오름차순 정렬
let arr3 = [10, 3, 5];
arr3.sort((a, b) => {
  if (a > b) {
    // b가 a앞에 와라
    return 1;
  } else if (a < b) {
    // a가 b앞에 와라
    return -1;
  } else {
    // 두 값의 자리를 바꾸지 마라
    return 0; // a, b 자리를 그대로 유지
  }
});

console.log(arr3);

// 4. toSorted (가장 최근에 추가된 최신 함수)
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "im", "hyebin"];
const joined = arr6.join(" ");
console.log(joined);
