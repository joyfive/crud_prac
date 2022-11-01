import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { getPost, updatePost } from "../axios";
import { deletePost } from "../axios/index";

const Detail = () => {
  const { id } = useParams();

  const [post, setPost] = useState();

  const updateUi = useCallback(async () => {
    console.log(1);
    const response = await getPost(id);

    console.log(response);

    setPost(response.data);
  }, [id]);

  const deletePostHandler = () => {
    deletePost(id);
  };

  const updatePostHandler = () => {
    updatePost(id);
  };

  useEffect(() => {
    updateUi();
  }, [updateUi]);

  if (!post) {
    return null;
  }
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.contents}</p>
      <button onClick={deletePostHandler}>삭제</button>
      <button onClick={updatePostHandler}>업데이트</button>
    </div>
  );
};

export default Detail;
