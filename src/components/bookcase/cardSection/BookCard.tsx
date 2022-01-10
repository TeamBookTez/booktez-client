import React from "react";
import styled from "styled-components";

import { TempBookImg } from "../../../assets/images";

export default function BookCard() {
  return (
    <>
      <StBookCard>
        <StImgWrapper>
          <StImg src={TempBookImg} alt="다음 책을 쌓아볼까요?" />
        </StImgWrapper>
        <StCardTitle>조화로운 부</StCardTitle>
        <StCardAuthor>제임스 아세 러이</StCardAuthor>
      </StBookCard>
      <StBookCard>
        <StImgWrapper>
          <StImg src={TempBookImg} alt="다음 책을 쌓아볼까요?" />
        </StImgWrapper>
        <StCardTitle>조화로운 부</StCardTitle>
        <StCardAuthor>제임스 아세 러이</StCardAuthor>
      </StBookCard>
      <StBookCard>
        <StImgWrapper>
          <StImg src={TempBookImg} alt="다음 책을 쌓아볼까요?" />
        </StImgWrapper>
        <StCardTitle>조화로운 부</StCardTitle>
        <StCardAuthor>제임스 아세 러이</StCardAuthor>
      </StBookCard>
      <StBookCard>
        <StImgWrapper>
          <StImg src={TempBookImg} alt="다음 책을 쌓아볼까요?" />
        </StImgWrapper>
        <StCardTitle>조화로운 부</StCardTitle>
        <StCardAuthor>제임스 아세 러이</StCardAuthor>
      </StBookCard>
      <StBookCard>
        <StImgWrapper>
          <StImg src={TempBookImg} alt="다음 책을 쌓아볼까요?" />
        </StImgWrapper>
        <StCardTitle>조화로운 부</StCardTitle>
        <StCardAuthor>제임스 아세 러이</StCardAuthor>
      </StBookCard>
      <StBookCard>
        <StImgWrapper>
          <StImg src={TempBookImg} alt="다음 책을 쌓아볼까요?" />
        </StImgWrapper>
        <StCardTitle>조화로운 부</StCardTitle>
        <StCardAuthor>제임스 아세 러이</StCardAuthor>
      </StBookCard>
      <StBookCard>
        <StImgWrapper>
          <StImg src={TempBookImg} alt="다음 책을 쌓아볼까요?" />
        </StImgWrapper>
        <StCardTitle>조화로운 부</StCardTitle>
        <StCardAuthor>제임스 아세 러이</StCardAuthor>
      </StBookCard>
    </>
  );
}

const StBookCard = styled.article`
  display: flex;
  flex-direction: column;

  width: 24.5rem;
  height: 39.3rem;

  padding: 1.6rem 2rem;

  border-radius: 1.6rem;

  cursor: pointer;

  &:hover {
    background-color: #fff1eb;
  }
`;

export const StImg = styled.img`
  width: 100%;
  height: 100%;
`;

const StImgWrapper = styled.div`
  width: 20.5rem;
  height: 30rem;

  margin-bottom: 1.6rem;
`;

const StCardTitle = styled.strong`
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 130%;
  letter-spacing: -0.1rem;
  color: ${({ theme }) => theme.colors.gray100};
`;

const StCardAuthor = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.1rem;
  color: ${({ theme }) => theme.colors.gray300};
`;
