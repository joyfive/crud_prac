import { useEffect, useState } from "react";
import Card from "../elements/Card";
import List from "../elements/List";

const Main = () => {
  const [posts, setPosts] = useState([]);

  const updateUi = async () => {
    // TODO: 업데이트 코드 작성 예정
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
