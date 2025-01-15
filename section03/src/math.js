// math 모듈
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// export { add, sub };
// 상단과 같이 함수 선언문 앞에 export 키워드를 붙여줘도 괜찮음

// 하나의 모듈을 대표하는 디폴트 값을 내보내는 방법
export default function multifly(a, b) {
  return a * b;
}
// multifly 함수는 default로서 내보내져서 이 math 모듈을 대표하는 단 하나의 기본 값이 된다.
// multifly 함수는 다른 모듈에서 import로 불러올 때 새로운 import문으로 중괄호없이 작성
