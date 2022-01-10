import React from "react";
import styled from "styled-components";

export default function BottomContent() {
  return (
    <StWrapper>
      <StHeader>서비스 정보</StHeader>
      <StArticleWrapper>
        <StServiceInfo>
          <StInfoTitle>개인정보 처리 방침</StInfoTitle>
          <StInfoDesc>개인정보 처리 방침 탭에서 확인 할 수 있는 정보를 쬐금 적으면 좋을 것</StInfoDesc>
        </StServiceInfo>
        <StServiceInfo>
          <StInfoTitle>문의하기</StInfoTitle>
          <StInfoDesc>개인정보 처리 방침 탭에서 확인 할 수 있는 정보를 쬐금 적으면 좋을 것 </StInfoDesc>
        </StServiceInfo>
        <StServiceInfo>
          <StInfoTitle>북스테어즈 피드백 남기기</StInfoTitle>
          <StInfoDesc>개인정보 처리 방침 탭에서 확인 할 수 있는 정보를 쬐금 적으면 좋을 것 </StInfoDesc>
        </StServiceInfo>
        <StServiceInfo>
          <StInfoTitle>북스테어즈를 만든 사람들</StInfoTitle>
          <StInfoDesc>개인정보 처리 방침 탭에서 확인 할 수 있는 정보를 쬐금 적으면 좋을 것 </StInfoDesc>
        </StServiceInfo>
      </StArticleWrapper>
    </StWrapper>
  );
}

const StWrapper = styled.section`
  width: 100%;
  padding: 0 4rem;
`;

const StHeader = styled.header`
  margin-bottom: 3.2rem;

  font-family: Pretendard;
  font-size: 2.2rem;
  font-weight: 800;
  line-height: 2.9rem;
  letter-spacing: -0.01rem;
`;

const StArticleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 4rem;
  row-gap: 4rem;
`;

const StServiceInfo = styled.article`
  width: 57.2rem;
  height: 13.6rem;

  padding: 3.7rem 4.9rem;

  border: 0.2rem solid #e3e3e3;
  border-radius: 2rem;
`;

const StInfoTitle = styled.h5`
  margin-bottom: 1.5rem;

  font-family: Pretendard;
  font-size: 2.2rem;
  font-weight: 600;
  line-height: 2.6rem;
  letter-spacing: -0.01rem;
  color: #3d3d3d;
`;

const StInfoDesc = styled.p`
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.1rem;
  letter-spacing: -0.01rem;
  color: #939393;
`;
