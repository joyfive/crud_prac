import { Link } from "react-router-dom";

const Card = (props) => {
  const { id, title, contents } = props;
  return (
    <li>
      <Link to={`/post/${id}`}>
        <p>{title}</p>
        <p>{contents}</p>
      </Link>
    </li>
  );
};

export default Card;
