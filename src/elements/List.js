import styled from "styled-components";

const List = (props) => {
  const { items, onRender } = props;

  return <ListView>{items.map((item) => onRender(item))}</ListView>;
};

export default List;

const ListView = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
