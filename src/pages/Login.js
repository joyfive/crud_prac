import Input from "../elements/Input";
import styled from "styled-components";
import Button from "../elements/Button";
import useValidation from "../hooks/useValidation";
import useInputForm from "../hooks/useInputForm";
import { useNavigate } from "react-router-dom";
import { requestLogin } from "../axios";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/modules/user";

const INIT = {
  nickname: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [account, setAccount] = useInputForm(INIT);
  const [validation] = useValidation(account);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await requestLogin(account);

      const token = response.headers.authorization;
      
      dispatch(setToken(token));
      navigate("/", { replace: true });
    } catch (error) {
      alert("로그인에 실패하였습니다.");
    }
    //TODO: 로그인 코드 작성 예정
  };

  return (
    <FormView onSubmit={onSubmitHandler}>
      <h1>로그인</h1>
      <Input
        name="nickname"
        type="text"
        onChange={setAccount}
        placeholder="아이디"
      />
      <Input
        name="password"
        type="password"
        onChange={setAccount}
        placeholder="비밀번호"
      />
      <Button disabled={!validation} type="submit">
        로그인
      </Button>
    </FormView>
  );
};

export default Login;

const FormView = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
