import styled from "styled-components";

const Input = (props) => {
  return <InputView {...props} />;
};

export default Input;

const InputView = styled.input`
  width: 100%;
  height: 50px;
  padding: 13px 16px;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  font-size: 16px;

  &:enabled {
    &:hover {
      border-color: #999999;
    }

    &:focus {
      border-color: #2663ff;
    }
  }
`;
