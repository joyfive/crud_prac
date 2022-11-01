import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../axios";

const INIT = {
  nickname: "",
  password: "",
};

const Join = () => {
  const navigate = useNavigate();

  const [account, setAccount] = useState(INIT);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setAccount((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onSubmitHandler = async (e) => {
    console.log("singup");
    e.preventDefault();

    try {
      await createUser(account);

      alert("회원가입에 성공하였습니다.");
      navigate("login");
    } catch (error) {
      alert("에러가 발생하였습니다.");
    }
  };

  return (
    <div>
      회원가입
      <form onSubmit={onSubmitHandler}>
        <input
          name="nickname"
          type="text"
          onChange={onChangeHandler}
          placeholder="닉네임"
        />
        <input
          name="password"
          type="password"
          onChange={onChangeHandler}
          placeholder="비밀번호"
        />

        <button type={"submit"}>로그인</button>
      </form>
    </div>
  );
};

export default Join;
