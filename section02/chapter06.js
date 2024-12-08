// 반복문으로 배열과 객체 순회하기

// 순회(Iteration): 배열, 객체에 저장된 여러 개의 값에 순서대로 하나씩 접근하는 것을 말함
// ex. 배열 순회
// let numbers = [1, 2, 3];

// ex. 객체 순회
// let person = {
//   name: "바켸빙",
//   age: 29,
//   hobby: "전직 준비",
// };

// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr.length; i++) {
  console.log(arr2[i]);
}

// 1.2 for of 반복문 (배열에만 쓸 수 있음)
for (let item of arr) {
  console.log(item);
}
// arr배열의 값을 하나씩 순서대로 꺼내어 변수 item에 저장

// MDN > for
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for
// 인덱스를 활용하는 반복문은 카운터 변수에 인덱스가 저장되기 때문에, for문 안에서 인덱스를 통한 활동을 할 수 있음

// MDN > for of
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of
// 인덱스를 저장하지 않고 배열 안에 있는 값들을 순서대로 순회만 해줌

// 2. 객체 순회
let person = {
  name: "바켸빙이",
  age: 29,
  hobby: "전직 준비",
};

// 2-1. Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환

let keys = Object.keys(person);
console.log(keys);

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]);
}

for (let key of keys) {
  console.log(key);
}

for (let key of keys) {
  console.log(key, person[key]);
}

for (let key of keys) {
  const value = person[key];
  console.log(key, value);
}

// MDN > Object.keys()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

// 2-2. Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
console.log(values);

for (let value of values) {
  console.log(value);
}
// MDN > Object.values()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/values

// 2-3. for in (객체에만 쓸 수 있음)
for (let key in person) {
  console.log(key);
}

for (let key in person) {
  const value = person[key];
  console.log(key, value);
}

// MDN > for..in
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...in
