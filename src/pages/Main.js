import { useEffect, useState } from "react";
import { getPostList } from "../axios";
import Card from "../elements/Card";
import List from "../elements/List";

const Main = () => {
  const [posts, setPosts] = useState([]);

  const updateUi = async () => {
    const response = await getPostList();

    setPosts(response.data);
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
