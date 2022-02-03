import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { MainLayout, NavWrapper } from ".";

export default function CommonLayout() {
  return (
    <StWrapper>
      <NavWrapper />
      <MainLayout>
        <Outlet />
      </MainLayout>
    </StWrapper>
  );
}

const StWrapper = styled.section`
  display: flex;
  background-color: ${({ theme }) => theme.colors.gray100};
  min-height: 100vh;
`;
