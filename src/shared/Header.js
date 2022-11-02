import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { clearToken } from "../redux/modules/user";

const Header = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.user.token);

  return (
    <HeaderWrap>
      <Link to={"/"}>CRUD</Link>

      <nav>
        {token ? (
          <>
            <Link to={"post"}>게시글 작성</Link>
            <Link to={"/"} onClick={() => dispatch(clearToken())}>
              로그아웃
            </Link>
          </>
        ) : (
          <>
            <Link to={"login"}>로그인</Link>
            <Link to={"join"}>회원가입</Link>
          </>
        )}
      </nav>
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.header`
  position: sticky;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 50px;
  padding: 0 10px;
  border-bottom: 1px solid black;

  backdrop-filter: blur(10px);

  nav {
    display: flex;
    gap: 10px;
  }
`;
