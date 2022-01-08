import { Link } from "react-router-dom";
import styled from "styled-components";

import { NavHeader } from ".";

export default function NavWrapper() {
  return (
    <StSection>
      <NavHeader />
      <nav>
        <ul>
          <li>
            <Link to="">홈</Link>
          </li>
          <li>
            <Link to="">서재</Link>
          </li>
          <li>
            <Link to="">마이페이지</Link>
          </li>
          <li>
            <Link to="">곧 만나요</Link>
          </li>
        </ul>
      </nav>
    </StSection>
  );
}

const StSection = styled.section`
  position: relative;
  width: 17.5rem;
`;
