// 동기와 비동기

// 동기: 여러 개의 작업을 순서대로, 하나씩 처리하는 방법
// 쓰레드(Thread)----> Task A 실행, 종료-> Task B 실행, 종료 -> Task C 실행, 종료 ----> 동기적으로 처리한다.
// 작업을 실행하고 처리해주는 역할 쓰레드(Thread)

// 자바스크립트 엔진은 특별한 함수를 사용해서 코드를 비동기적으로 동작하도록 설정한 게 아니라면,
// 기본적으로는 모든 코드가 순서대로 즉 동기적으로 실행된다.(위에서 아래로)

// 동기 방식에는 치명적인 단점이 존재한다.
// 쓰레드(Thread)----> Task A 0.1초-> Task B 10초 -> Task C 0.2초
// b처럼 오래걸리는 작업이라면 다음 작업인 c를 진행할 수 없기 때문에 전체 프로그램의 성능이 악화된다.

// 자바나 C#같은 언에서는 이러한 문제를 해결하기 위해 여러 개의 스레드를 동시 사용하는 멀티쓰레드 기법을 활용한다.
// 자바스크립트 엔진에는 쓰레드가 1개 밖에 없다. 따라서 비동기라는 방식을 통해서 해결한다.
// A 쓰레드 ----> Task A ---->
// B 쓰레드 ----> Task B ---->
// C 쓰레드 ----> Task C ---->

// 비동기: 동기적이지 않다는 뜻, 작업을 순서대로 처리하지 않음
//                    Task C ---->
//                    Task B ---->
// 쓰레드(Thread) ----> Task A --------------------->
// 각각의 작업들이 종료되었을 때 해당 작업의 결과 값을 이용해서 또 다른 동작을 수행시켜줘야 한다면
// 각각의 작업에 콜백 함수를 붙여서 처리해주는 것도 가능

// 예시
console.log(1);

setTimeout(() => {
  console.log(2);
}, 3000); // 비동기적으로 작동하는 특수한 함수
// 첫 번째 인수로 콜백함수, 두 번째 인수로 3000 전달 -> 3000ms 만큼 대기했다가 첫 번째 콜백 함수 실행

console.log(3);

// 자바스크립트 엔진이 첫번째 1 출력
// 비동기 함수 setTimeout()호출 -> Web APIs라는 웹 브라우저의 영역에서 대신 실행, 콜백 함수까지 같이 넘겨줌
// 비동기 작업의 완료를 기다리지 않고 아래 코드 실행하여 3 출력
// Web APIs에서 비동기 작업 완료 즉 타이머 3초 완료 -> Web APIs에서 콜백 함수 돌려받아서 호출 2 출력

// 스레드가 하나인데 동시에 여러 개의 작업을 처리할 수 있는 이유는?
// setTimeout 함수 같은 비동기 작업들은 자바스크립트 엔진이 아닌 Web APIs라는 웹 브라우저가 직접 관리하는 별도의 영역에서 실행 됨
// 타이머가 끝나면 실행할 콜백 함수까지 같이 넘겨줌