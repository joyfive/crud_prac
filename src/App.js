import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Join from "./pages/Join";
import Login from "./pages/Login";
import styled from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import Post from "./pages/Post";
import Header from "./shared/Header";
import { useEffect } from "react";
import { getStorage } from "./common";
import { useDispatch } from "react-redux";
import { setToken } from "./redux/modules/user";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getStorage("token", null);

    if (token) {
      dispatch(setToken(token));
    }
  }, [dispatch]);

  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Contents>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post" element={<Post />} />
          <Route path="/post/:id" element={<Detail />} />
          <Route path="/post/:id/:edit" element={<Post />} />
        </Routes>
      </Contents>
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 600px;
  min-height: 100vh;

  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Contents = styled.div`
  padding: 20px;
`;
