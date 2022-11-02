import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { getPost } from "../axios";
import { deletePost } from "../axios/index";
import styled from "styled-components";
import Button from "../elements/Button";

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [post, setPost] = useState();

  const onDeletePost = async () => {
    try {
      await deletePost(id);

      alert("게시물을 삭제하였습니다.");
      navigate("/");
    } catch (error) {
      alert("게시물 삭제에 실패하였습니다.");
    }
  };

  const updateUi = useCallback(async () => {
    const response = await getPost(id);

    setPost(response.data);
  }, [id]);

  useEffect(() => {
    updateUi();
  }, [updateUi]);

  if (!post) {
    return null;
  }
  return (
    <DetailView>
      <Title>{post.title}</Title>
      <Contents>{post.contents}</Contents>
      <Button onClick={onDeletePost}>삭제</Button>
      <Button onClick={() => navigate(`/post/${id}/edit`)}>수정하기</Button>
    </DetailView>
  );
};

export default Detail;

const DetailView = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 30px;
`;

const Contents = styled.p`
  font-size: 20px;
  word-wrap: break-word;
  white-space: pre-wrap;
`;
