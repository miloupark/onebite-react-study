const Button = ({ text, color, children }) => {
  // 이벤트 객체 / 선언식.ver
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button
      // 익명함수.ver
      // onClick={() => {
      //   console.log(text);
      // }}
      onClick={onClickButton}
      // 마우스이벤트
      // onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} - {color} - {color.toUpperCase()}
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};

export default Button;
