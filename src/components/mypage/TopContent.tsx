import React from "react";
import styled from "styled-components";

import { Button } from "../common";
import TopBanner from "./TopBanner";

export default function TopContent() {
  return (
    <StWrapper>
      <TopBanner />
      {/* <StLoginButton>로그인</StLoginButton> */}
      <StLogoutBtn>로그아웃</StLogoutBtn>
    </StWrapper>
  );
}

const StWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: 100%;
  height: 34.2rem; // 임시

  margin-bottom: 5.3rem;
  padding: 0 4rem;
`;

// const StLoginButton = styled(Button)`
//   width: 12rem;
//   height: 4.6rem;

//   border-radius: 0.8rem;
// `;

const StLogoutBtn = styled(Button)`
  width: 13.5rem;
  height: 4.6rem;

  border-radius: 0.8rem;

  background-color: ${({ theme }) => theme.colors.gray300};
`;
