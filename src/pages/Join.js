import styled from "styled-components";
import Button from "../elements/Button";
import Input from "../elements/Input";
import useInputForm from "../hooks/useInputForm";
import useValidation from "../hooks/useValidation";

const INIT = {
  nickname: "",
  password: "",
};

const Join = () => {
  const [account, setAccount] = useInputForm(INIT);
  const [validation] = useValidation(account);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    //TODO: 회원가입 코드 작성 예정
  };

  return (
    <FormView onSubmit={onSubmitHandler}>
      <h1>회원가입</h1>
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
        회원가입
      </Button>
    </FormView>
  );
};

export default Join;

const FormView = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
