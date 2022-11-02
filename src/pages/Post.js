import { useParams } from "react-router-dom";
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
  const { id, edit } = useParams();
  const [postData, setPostData, setInit] = useInputForm(INIT);
  const [validation] = useValidation(postData);

  const isEdit = useMemo(() => edit === "edit", [edit]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    //TODO: 게시물 작성 코드 작성 예정
  };

  const updateUi = useCallback(async () => {
    //TODO: 업데이트 코드 작성 예정
  }, []);

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
