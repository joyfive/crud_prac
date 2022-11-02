import styled from "styled-components";

const Button = (props) => {
  return <ButtonView {...props} />;
};

export default Button;

const ButtonView = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  background-color: #2663ff;
  font-size: 15px;
  font-weight: 700;

  &:enabled:hover {
    background-color: #003bd2;
  }

  &:disabled {
    opacity: 0.5;
  }
`;
