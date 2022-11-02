import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createUser } from "../axios";
import Button from "../elements/Button";
import Input from "../elements/Input";
import useInputForm from "../hooks/useInputForm";
import useValidation from "../hooks/useValidation";

const INIT = {
  nickname: "",
  password: "",
};

const Join = () => {
  const navigate = useNavigate();

  const [account, setAccount] = useInputForm(INIT);
  const [validation] = useValidation(account);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      await createUser(account);

      alert("회원가입에 성공하였습니다.");
      navigate("/");
    } catch (error) {
      alert("회원가입에 실패하였습니다.");
    }
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
