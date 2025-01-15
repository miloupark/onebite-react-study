import "./Main.css";
// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// 2. 숫자, 문자열, 배열 값만 렌더링 된다.
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야만 한다.
// 5. 자바스크립트 예약어인 class를 사용할 수 없어서 className으로 작성

const Main = () => {
  const user = {
    name: "바켸빈",
    isLogin: true,
  };

  // 삼항연산자.ver
  // return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;

  // 조건문.ver
  if (user.isLogin) {
    return <div className="logout">로그아웃</div>;
  } else {
    return <div>로그인</div>;
  }
};

export default Main;
