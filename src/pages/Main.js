import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPostList } from "../axios";
import Card from "../elements/Card";
import { useSelector } from "react-redux";

const Main = () => {
  const user = useSelector((state) => state.user);
  const [posts, setPosts] = useState(null);
  console.log(user);

  const updateUi = async () => {
    const response = await getPostList();

    setPosts(response.data);
  };

  useEffect(() => {
    updateUi();
  }, []);

  return (
    <div>
      메인
      {user.token ? (
        <Link to={"post"}>게시글 작성</Link>
      ) : (
        <>
          <Link to={"login"}>로그인</Link>
          <Link to={"join"}>회원가입</Link>
        </>
      )}
      {posts && (
        <ul>
          {posts.map((post) => {
            return <Card {...post} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default Main;
