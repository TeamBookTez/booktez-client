import React from "react";
import styled from "styled-components";

import { EmptyBookImg } from "../../assets/imgs";
import { StButton } from "../../components/common/Button";

export default function NoCards() {
  return (
    <StSection>
      <StArticleWrapper>
        <StImg src={EmptyBookImg} alt="아직 읽은 책이 없어요" />
        <StCardHeader>아직 읽은 책이 없어요</StCardHeader>
        <StCardDesc>이정도면 좋겠니아ㅣㅏㄹ</StCardDesc>
        <StMiddleButton>+ 책 추가</StMiddleButton>
      </StArticleWrapper>
    </StSection>
  );
}

const StSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 83%;
`;

const StArticleWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

const StImg = styled.img`
  margin-bottom: 1.7rem;
`;

const StCardHeader = styled.h3`
  margin-bottom: 0.9rem;

  font-size: 2.2rem;
  font-weight: 800;
  line-height: 2.86rem;
  letter-spacing: -0.1rem;
  color: ${({ theme }) => theme.colors.gray300};
`;

const StCardDesc = styled.p`
  margin-bottom: 2.8rem;

  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: -0.1rem;
  color: ${({ theme }) => theme.colors.gray300};
`;

const StMiddleButton = styled(StButton)`
  width: 17.5rem;
  height: 4.5rem;

  font-size: 1.6rem;
`;
