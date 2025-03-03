import { use } from "react";
import { useState } from "react";
// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  // usestate를 이용한 상태관리
  // const [name, setName] = useState("이름");
  // const [birth, setBirth] = useState("");
  // const [country, setCountry] = useState("");
  // const [bio, setBio] = useState("");

  // 하나의 객체로, 하나의 state로 변경
  const [input, setInput] = useState({
    name: "",
    birth:"",
    country:"",
    bio:"",
  });

  console.log(input)
  
  // 각 입력 필드의 onchange 핸들러
  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // }; 

  // const onChangeBirth = (e) => {
  //   setBirth(e.target.value);
  // };

  // const onChangeCountry = (e) => {
  //   setCountry(e.target.value);
  // };

  // const onChangeBio = (e) => {
  //   setBio(e.target.value);
  // }
  
  // 통합 이벤트 핸들러
    const onChange = (e) => {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    };

  return (
    <div>
      <div>
        <input name="name" value={input.name} onChange={onChange} placeholder={"이름"} />
      </div>
      <div>
        <input name="birth" value={input.birth} onChange={onChange} type="date" />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange}></textarea>
      </div>
    </div>
  );
};

export default Register;
