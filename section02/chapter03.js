// 구조 분해 할당
// 배열이나 객체에 저장된 여러 개의 값들을 분해해서 각각 다른 변수에 할당하는 문법
// 함수에 여러 개의 인수를 전달할 때 자주 사용함

// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

// 배열의 요소를 변수에 할당하려면 인덱스를 일일이 지정해야 하므로 비효율적.
// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

let [one, two, three, four = 4] = arr;
console.log(one, two, three, four);
// 배열의 요소보다 변수가 많을 경우, 없는 값은 기본값을 사용할 수 있음.
// four는 배열에 네 번째 값이 없으므로 기본값 4가 할당됨
// 기본값이 없을 경우 undefined가 출력됨

// 2. 객체의 구조 분해 할당
let person = {
  name: "바켸빈",
  age: 29,
  hobby: "전직 준비",
};

// 객체 안의 프로퍼티를 변수에 할당 비효율적이므로 구조분해 할당을 이용
// let name = person.name;
// let age = person.age;
// let hobby = person.hobby;

let { name, age, hobby, extra = "hello" } = person;
console.log(name, age, hobby, extra);
// 객체는 중괄호에 각각 객체의 프로퍼티의 키 값을 기준으로 변수에 저장할 수 있음
// 배열의 구조 분해 할당과는 다르게 객체를 상징하는 {}를 이용함
// 기본값을 설정하는 것 또한 배열의 구조 분해 할당과 동일하게 이루어짐

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person); // 함수 호출 시 person 객체를 넘겼기 때문에 구조분해할당 가능
