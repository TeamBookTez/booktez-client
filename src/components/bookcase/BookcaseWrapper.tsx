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
  border-radius: 2rem 0 0 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  width: 1264px; // 임의 px
`;
