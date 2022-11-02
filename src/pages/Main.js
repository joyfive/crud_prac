import { useEffect, useState } from "react";
import { getPostList } from "../axios";
import Card from "../elements/Card";
import List from "../elements/List";

const Main = () => {
  const [posts, setPosts] = useState([]);

  const updateUi = async () => {
    // TODO: 업데이트 코드 작성 예정
    try {
      const postList = await getPostList();

      if (postList) {
        setPosts(postList.data);
      }
    } catch (error) {
      alert("통신에 실패하였습니다.");
    }
  };

  useEffect(() => {
    updateUi();
  }, []);

  return (
    <div>
      <List
        items={posts}
        onRender={(item) => <Card key={item.id} {...item} />}
      />
    </div>
  );
};

export default Main;
