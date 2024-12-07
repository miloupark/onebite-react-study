// 변수, 상수란? = 값을 저장하는 박스

// 1. 변수
let age; // 초기화가 이루어지지 않는(초기값 없음) 변수 선언 가능 = undefined가 할당되고 출력됨

age = 30;

// 2. 상수
const birth = "1997.01.07"; // const로 선언한 변수는 초기값 필수, 재할당 불가능

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다.
let name1;
let $2name;

// 3-3. 예약어를 사용할 수 없다.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words
// https://www.w3schools.com/js/js_reserved.asp

// 4. 변수 명명 가이드
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
