import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { MainHeader } from "../common";
import { Navigation } from ".";

export default function BookcaseWrapper() {
  return (
    <StMainWrapper>
      <MainHeader>서재</MainHeader>
      <Navigation />
      <Outlet />
    </StMainWrapper>
  );
}

const StMainWrapper = styled.main`
  width: 1264px; // 임의 px
`;
