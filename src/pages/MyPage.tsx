import styled from "styled-components";

import { NavWrapper } from "../components/common";
import { MyPageWrapper } from "../components/mypage";

export default function MyPage() {
  return (
    <StPageWrapper>
      <NavWrapper />
      <MyPageWrapper />
    </StPageWrapper>
  );
}

const StPageWrapper = styled.div`
  display: flex;
  height: 100vh;
`;
