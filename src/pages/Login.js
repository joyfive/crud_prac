import { useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/modules/user";
import { requestLogin } from "../axios/index";
import { useNavigate } from "react-router-dom";

const INIT = {
  nickname: "",
  password: "",
};

const Login = () => {
  const [account, setAccount] = useState(INIT);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setAccount((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const response = await requestLogin(account);

    const token = response.headers.authorization;

    localStorage.setItem("token", token);

    dispatch(setToken(token));
    navigate("/");
  };

  return (
    <div>
      로그인
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

export default Login;
