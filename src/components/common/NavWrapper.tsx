import { Link } from "react-router-dom";
import styled from "styled-components";

import { IcBookcase, IcHome, IcMyPage, IcToBe } from "../../assets/icons";
import { NavHeader } from ".";

export default function NavWrapper() {
  return (
    <StSection>
      <NavHeader logocolor={"#FFFFFFF"} />
      <StNav>
        <StUl>
          <StItem>
            <StLink to="">
              <IcHome fill="#C1C1C1" />홈
            </StLink>
          </StItem>
          <StItem>
            <StLink to="">
              <IcBookcase fill="#C1C1C1" />
              서재
            </StLink>
          </StItem>
          <StItem>
            <StLink to="">
              <IcMyPage fill="#C1C1C1" />
              마이페이지
            </StLink>
          </StItem>
          <StItem>
            <StLink to="">
              <IcToBe fill="#C1C1C1" />곧 만나요
            </StLink>
          </StItem>
        </StUl>
      </StNav>
    </StSection>
  );
}

const StSection = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.colors.gray100};
  width: 17.5rem;
  color: ${({ theme }) => theme.colors.white500};
`;

const StNav = styled.nav`
  margin-top: 12.3rem;
  padding-left: 2.2rem;
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 1.9rem;
`;

const StUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
`;

const StItem = styled.li`
  display: flex;
  align-items: center;

  svg {
    margin-right: 1rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.orange100};

    svg {
      fill: ${({ theme }) => theme.colors.orange100};
    }
  }
`;

const StLink = styled(Link)`
  display: flex;
  align-items: center;
`;
