import { useNavigate, useParams } from "react-router-dom";
import useInputForm from "../hooks/useInputForm";
import useValidation from "../hooks/useValidation";
import Input from "../elements/Input";
import Button from "../elements/Button";
import styled from "styled-components";
import TextArea from "../elements/TextArea";
import { useCallback, useEffect, useMemo } from "react";
import { createPost, getPost, updatePost } from "../axios/index";

const INIT = {
  title: "",
  contents: "",
};

const Post = () => {
  const { id, edit } = useParams();
  const navigate = useNavigate();
  const [postData, setPostData, setInit] = useInputForm(INIT);
  const [validation] = useValidation(postData);

  const isEdit = useMemo(() => edit === "edit", [edit]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (isEdit) {
        await updatePost(id, postData);
      } else {
        await createPost(postData);
      }
      alert("게시물작성에 성공하였습니다.");
      navigate("/");
    } catch (error) {
      alert("게시물작에 실패하였습니다.");
    }
  };

  const updateUi = useCallback(async () => {
    const post = await getPost(id);

    setInit(post.data);
  }, [id, setInit]);

  useEffect(() => {
    if (isEdit) {
      updateUi();
    }
  }, [isEdit, updateUi]);

  return (
    <FormView onSubmit={onSubmitHandler}>
      게시글
      <Input
        name="title"
        value={postData.title}
        onChange={setPostData}
        placeholder="제목"
      />
      <TextArea
        name="contents"
        value={postData.contents}
        onChange={setPostData}
        placeholder="내용"
      />
      <Button disabled={!validation} type={"submit"}>
        작성
      </Button>
    </FormView>
  );
};

export default Post;

const FormView = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
