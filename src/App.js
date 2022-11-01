import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Join from "./pages/Join";
import Login from "./pages/Login";
import styled from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import Post from "./pages/Post";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/post/:id" element={<Detail />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 600px;
  min-height: 100vh;
  padding: 50px;

  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
