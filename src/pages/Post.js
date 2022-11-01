import { useState } from "react";
import { setPost } from "../axios";
import { useNavigate } from "react-router-dom";

const INIT = {
  title: "",
  contents: "",
};

const Post = () => {
  const navigate = useNavigate();

  const [postData, setPostData] = useState(INIT);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setPostData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await setPost(postData);

      const post_id = response.data.data.id;

      alert("게시물 작성에 성공하였습니다.");
      navigate(`post/${post_id}`);
    } catch (error) {
      alert("에러가 발생하였습니다.");
    }
  };

  return (
    <div>
      게시글
      <form onSubmit={onSubmitHandler}>
        <input
          name="title"
          type="text"
          onChange={onChangeHandler}
          placeholder="제목"
        />
        <input
          name="contents"
          type="text"
          onChange={onChangeHandler}
          placeholder="내용"
        />

        <button type={"submit"}>작성</button>
      </form>
    </div>
  );
};

export default Post;
