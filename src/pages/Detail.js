import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../elements/Button";

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [post, setPost] = useState();

  const navigateUpdate = useCallback(() => {
    navigate(`/post/${id}/edit`);
  }, [id, navigate]);

  const onDeletePost = useCallback(async () => {
    //TODO: 삭제 코드 작성 예정
  }, []);

  const updateUi = useCallback(async () => {
    //TODO: 조회 코드 작성 예정
  }, []);

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
      {post.myPost && (
        <>
          <Button onClick={onDeletePost}>삭제</Button>
          <Button onClick={navigateUpdate}>수정하기</Button>
        </>
      )}
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
