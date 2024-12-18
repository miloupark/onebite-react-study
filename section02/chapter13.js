// promise란?
// 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
// 비동기 작업 실행, 상태관리, 결과 저장, 병렬 실행, 다시 실행 등등..

// promise의 3가지 상태
// 대기 Pending: 아직 작업이 완료되지 않은 상태
// 성공 Fulfilled: 비동기 작업이 성공적으로 마무리 된 상태 = 해결 resolve
// 실패 Rejected: 비동기 작업이 실패한 상태 = 거부 reject

// 예시) 유튜브 로딩중 = pending 상태
// -> 영상 로딩 완료 = resolve / 영상 시청 가능 상태 = fulfilled 상태
// -> 영상 로딩 실패 = reject / 영상 시청 불가능 상태 = rejected 상태

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업을 실행하는 함수 = executor

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 2000);
  });

  return promise;
}

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(undefined);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// then 메서드 = 그 후에
// promise 체이닝
// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch(() => {
//     console.log(error);
//   });
