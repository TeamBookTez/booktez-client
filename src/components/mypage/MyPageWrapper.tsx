import React from "react";
import styled from "styled-components";

import { MainHeader } from "../../components/common";
import { StWrapper } from "../../components/main/MainWrapper";
import BottomContent from "./BottomContent";
import TopContent from "./TopContent";

export default function MyPageWrapper() {
  return (
    <StMyPageWrapper>
      <MainHeader>마이페이지</MainHeader>
      <TopContent />
      <BottomContent />
    </StMyPageWrapper>
  );
}

export const StMyPageWrapper = styled(StWrapper)`
  width: 1264px; // 임의
`;
