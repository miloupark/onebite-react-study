// date 객체와 날짜

// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
// Date 객체를 생성자 함수로 호출할 때 인수를 전달하지 않으면, 현재 날짜와 시간이 저장된 date 객체가 생성
console.log(date1);

let date2 = new Date("1996-04-07");
let datentime = new Date("1996-04-07/10:10:10"); // 시간도 설정 가능
// let date2 = new Date("1996. 04. 07");
// let date2 = new Date("1996/04/07");
console.log(date2);
console.log(datentime);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
// "1970.01.01 00시 00분 00초" = UTC
let ts1 = date1.getTime();
let date4 = new Date(ts1);

console.log(date1, date4);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
// 자바스크립트의 월은 0부터 시작하기 때문에 + 1 (배열 인덱스와 비슷함)
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(year, month, date, hour, minute, seconds);

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2); // 실제로는 3월
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleString());

// MDN > Date()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/Date

// MDN > toDateString()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString

// MDN > toLocaleString()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
