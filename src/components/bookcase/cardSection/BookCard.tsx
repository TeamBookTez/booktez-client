import React from "react";
import styled from "styled-components";

export default function BookCard() {
  return (
    <>
      <StBookCard>
        <StImgWrapper>
          <img src={require("../../../assets/imgs/tempimg.png")} alt="다음 책을 쌓아볼까요?" />
        </StImgWrapper>
        <StCardHeader>조화로운 부</StCardHeader>
        <StCardDesc>제임스 아세 러이</StCardDesc>
      </StBookCard>
      <StBookCard>
        <StImgWrapper>
          <img src={require("../../../assets/imgs/tempimg.png")} alt="다음 책을 쌓아볼까요?" />
        </StImgWrapper>
        <StCardHeader>조화로운 부</StCardHeader>
        <StCardDesc>제임스 아세 러이</StCardDesc>
      </StBookCard>
      <StBookCard>
        <StImgWrapper>
          <img src={require("../../../assets/imgs/tempimg.png")} alt="다음 책을 쌓아볼까요?" />
        </StImgWrapper>
        <StCardHeader>조화로운 부</StCardHeader>
        <StCardDesc>제임스 아세 러이</StCardDesc>
      </StBookCard>
      <StBookCard>
        <StImgWrapper>
          <img src={require("../../../assets/imgs/tempimg.png")} alt="다음 책을 쌓아볼까요?" />
        </StImgWrapper>
        <StCardHeader>조화로운 부</StCardHeader>
        <StCardDesc>제임스 아세 러이</StCardDesc>
      </StBookCard>
      <StBookCard>
        <StImgWrapper>
          <img src={require("../../../assets/imgs/tempimg.png")} alt="다음 책을 쌓아볼까요?" />
        </StImgWrapper>
        <StCardHeader>조화로운 부</StCardHeader>
        <StCardDesc>제임스 아세 러이</StCardDesc>
      </StBookCard>
      <StBookCard>
        <StImgWrapper>
          <img src={require("../../../assets/imgs/tempimg.png")} alt="다음 책을 쌓아볼까요?" />
        </StImgWrapper>
        <StCardHeader>조화로운 부</StCardHeader>
        <StCardDesc>제임스 아세 러이</StCardDesc>
      </StBookCard>
      <StBookCard>
        <StImgWrapper>
          <img src={require("../../../assets/imgs/tempimg.png")} alt="다음 책을 쌓아볼까요?" />
        </StImgWrapper>
        <StCardHeader>조화로운 부</StCardHeader>
        <StCardDesc>제임스 아세 러이</StCardDesc>
      </StBookCard>
      <StBookCard>
        <StImgWrapper>
          <img src={require("../../../assets/imgs/tempimg.png")} alt="다음 책을 쌓아볼까요?" />
        </StImgWrapper>
        <StCardHeader>조화로운 부</StCardHeader>
        <StCardDesc>제임스 아세 러이</StCardDesc>
      </StBookCard>
      <StBookCard>
        <StImgWrapper>
          <img src={require("../../../assets/imgs/tempimg.png")} alt="다음 책을 쌓아볼까요?" />
        </StImgWrapper>
        <StCardHeader>조화로운 부</StCardHeader>
        <StCardDesc>제임스 아세 러이</StCardDesc>
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

const StImgWrapper = styled.div`
  width: 20.5rem;
  height: 30rem;
  margin-bottom: 1.6rem;

  & > img {
    width: 100%;
    height: 100%;
  }
`;

const StCardHeader = styled.strong`
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 130%;
  letter-spacing: -0.1rem;
  color: ${({ theme }) => theme.colors.gray100};
`;

const StCardDesc = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.1rem;
  color: ${({ theme }) => theme.colors.gray300};
`;
