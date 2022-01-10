import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { Navigation } from "../bookcase";
import { MainHeader } from "../common";
import { Banner } from ".";

export default function MainWrapper() {
  return (
    <StWrapper>
      <MainHeader>메인</MainHeader>
      <Banner />
      <section>
        <Navigation />
        <Outlet />
      </section>
    </StWrapper>
  );
}

export const StWrapper = styled.main`
  flex: 1;
  border-radius: 2rem 0 0 2rem;
  background-color: ${({ theme }) => theme.colors.white};
`;
