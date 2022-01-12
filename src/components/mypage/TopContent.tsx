import React from "react";
import styled from "styled-components";

import { Button } from "../common";
import TopBanner from "./TopBanner";

export default function TopContent() {
  return (
    <StWrapper>
      <TopBanner />
      <StLoginButton>로그인</StLoginButton>
      {/* <StLogoutBtn>로그아웃</StLogoutBtn> */}
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

const StLoginButton = styled(Button)`
  height: 4.6rem;

  padding: 0 3.75rem;

  border-radius: 0.8rem;
`;

// 분기 처리 필요
// const StLogoutBtn = styled(StLoginButton)`
//   background-color: ${({ theme }) => theme.colors.gray300};
// `;
