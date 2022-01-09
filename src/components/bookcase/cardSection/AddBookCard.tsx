import React from "react";
import styled from "styled-components";

import Button from "../../common/Button";

export default function AddBookCard() {
  return (
    <>
      <StAddCard>
        <StContent>
          <StImgWrapper>
            <img src={require("../../../assets/imgs/addbooksimg.png")} alt="다음 책을 쌓아볼까요?" />
          </StImgWrapper>
          <StCardHeader>아직 읽은 책이 없어요</StCardHeader>
          <StCardDesc>이정도면 좋겠니아ㅣㅏㄹ</StCardDesc>
          <Button>+ 책 추가</Button>
        </StContent>
      </StAddCard>
    </>
  );
}

const StAddCard = styled.article`
  width: 24.5rem;
  height: 39.3rem;
  padding: 1.6rem 2rem;
`;

const StContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 20.5rem;
  height: 30rem;

  border: 2px solid ${({ theme }) => theme.colors.white400};
  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.colors.white200};
`;

const StImgWrapper = styled.div`
  width: 13.6rem;
  height: 9.6rem;
  margin-bottom: 2rem;

  & > img {
    width: 100%;
    height: 100%;
  }
`;

const StCardHeader = styled.h3`
  margin-bottom: 0.4rem;

  font-size: 1.6rem;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.1rem;
  color: ${({ theme }) => theme.colors.gray100};
`;

const StCardDesc = styled.p`
  margin-bottom: 2.7rem;

  font-size: 1.4rem;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.1rem;
  color: ${({ theme }) => theme.colors.gray200};
`;
