import styled from "styled-components";

import { BookcaseWrapper } from "../components/bookcase";
import { NavWrapper } from "../components/common";

export default function Bookcase() {
  return (
    <StPageWrapper>
      <NavWrapper />
      <BookcaseWrapper />
    </StPageWrapper>
  );
}

const StPageWrapper = styled.div`
  height: 100vh;
  display: flex;
`;
