import styled from "styled-components";

import { NavWrapper } from "../components/common";
import { MainWrapper } from "../components/main";

export default function Main() {
  return (
    <StWrapper>
      <NavWrapper />
      <MainWrapper />
    </StWrapper>
  );
}

const StWrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.gray100};
`;
