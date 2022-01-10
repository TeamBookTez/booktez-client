import React from "react";
import styled from "styled-components";

import TopBanner from "./TopBanner";

export default function TopContent() {
  return (
    <StWrapper>
      <TopBanner />
      <StGrayButton>로그인</StGrayButton>
    </StWrapper>
  );
}

const StWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: 100%;
  height: 36.9rem; // 임시
  padding: 0 4rem;
`;

const StGrayButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 16.6rem;
  height: 4.2rem;

  border-radius: 0.8rem;

  background-color: ${({ theme }) => theme.colors.gray300};

  font-family: Pretendard;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -0.1rem;
  color: ${({ theme }) => theme.colors.white};
`;
