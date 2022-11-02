import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = (props) => {
  const { id, title, contents } = props;

  const navigate = useNavigate();

  return (
    <CardView onClick={() => navigate(`post/${id}`)}>
      <Title>{title}</Title>
      <Contents>{contents}</Contents>
    </CardView>
  );
};

export default Card;

const CardView = styled.li`
  border-radius: 15px;
  min-height: 100px;
  padding: 15px;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 20px;
`;

const Contents = styled.p`
  font-size: 14px;
  word-wrap: break-word;
  white-space: pre-wrap;
  margin-top: 10px;
`;
