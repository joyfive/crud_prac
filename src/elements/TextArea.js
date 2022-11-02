import styled from "styled-components";

const TextArea = (props) => {
  return <TextAreaView {...props} />;
};

export default TextArea;

const TextAreaView = styled.textarea`
  width: 100%;
  height: 200px;
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
