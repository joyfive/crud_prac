import { getPost, setPost, updatePost } from "../axios";
import { useNavigate, useParams } from "react-router-dom";
import useInputForm from "../hooks/useInputForm";
import useValidation from "../hooks/useValidation";
import Input from "../elements/Input";
import Button from "../elements/Button";
import styled from "styled-components";
import TextArea from "../elements/TextArea";
import { useCallback, useEffect, useMemo } from "react";

const INIT = {
  title: "",
  contents: "",
};

const Post = () => {
  const navigate = useNavigate();

  const { id, edit } = useParams();
  const [postData, setPostData, setInit] = useInputForm(INIT);
  const [validation] = useValidation(postData);

  const isEdit = useMemo(() => edit === "edit", [edit]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (isEdit) {
        await updatePost(id, postData);
      } else {
        await setPost(postData);
      }

      alert("게시물 작성에 성공하였습니다.");
      navigate("/", { replace: true });
    } catch (error) {
      alert("에러가 발생하였습니다.");
    }
  };

  const updateUi = useCallback(async () => {
    const response = await getPost(id);

    setInit(response.data);
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
