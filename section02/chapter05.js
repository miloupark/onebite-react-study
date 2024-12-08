// 원시타입 vs 객체타입
// **강의 pdf 참고 필요!!**

// 원시타입: 값 자체로써 변수에 저장되고 복사된다
// 예: Number, String, Boolean 등...
// 불변값이다 -> 메모리 값 수정 X

// 객체타입: 참조값을 통해 변수에 저장되고 복사된다
// 예: Object, Array, Function 등...
// 가변값이다 -> 메모리 값 수정 O
// *참조값: 객체나 배열과 같은 객체 타입 데이터가 메모리에 저장된 위치(주소),
// 객체 타입 데이터는 크기가 크기 때문에 실제 값 자체를 변수에 저장하지 않고, 메모리 주소(참조값)를 변수에 저장함

// 객체 타입 주의사항
// 1. 의도치 않게 값이 수정될 수 있다.
// 2. 객체간의 비교는 기본적으로 참조값을 기준으로 이루어진다.
// 얕은 비교: 참조값을 기준으로 비교(ex. o1 === o2)
// 깊은 비교: 객체를 문자열로 변환하여 비교, JSON.stringify() 등의 내장 함수를 이용해야 함 (ex. JSON.stringify(o1) === JSON.stringify(o2))
// 3. 배열과 함수도 사실 객체이다.

// JSON.stringify(): 자바스크립트 내장함수, 객체를 문자열로 변환하는 기능
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
