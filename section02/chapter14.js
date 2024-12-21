// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 키워드
// async는 프로미스를 반환하지 않는 함수에 붙여서 자동으로 해당 함수를 비동기로 작동하도록 변환하는 기능을 함

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "이정환",
        id: "winterlood",
      });
    }, 1500);
  });
}

console.log(getData());

// await
// async 함수 내부에서만 사용이 가능 한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
  const data = await getData();

  console.log(data);
}

printData();
// data 라는 변수에 getData 함수가 반환하는 프로미스의 비동기 작업이 종료되기까지 기다렸다가 종료가 되면 결과 값을 data에 넣음
