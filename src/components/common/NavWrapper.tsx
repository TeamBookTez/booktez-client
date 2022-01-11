import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import { IcBookcase, IcHome, IcMyPage, IcToBe } from "../../assets/icons";
import theme from "../../styles/theme";
import { NavHeader } from ".";

export default function NavWrapper() {
  const { pathname } = useLocation();
  const defaultColor: string = theme.colors.white500;
  const highlightColor: string = theme.colors.orange100;

  const getColor = (nav: string, sub?: string): string => {
    let color;

    if (pathname.startsWith(`/${nav}`) || pathname === sub) {
      color = highlightColor;
    } else {
      color = defaultColor;
    }

    return color;
  };

  return (
    <StSection>
      <NavHeader logocolor={"#FFFFFFF"} />
      <StNav>
        <StUl>
          <StItem color={getColor("main")}>
            <StLink to="main">
              <IcHome fill={getColor("main")} />홈
            </StLink>
          </StItem>
          <StItem color={getColor("bookcase", "/add-book")}>
            <StLink to="bookcase">
              <IcBookcase fill={getColor("bookcase", "/add-book")} />
              서재
            </StLink>
          </StItem>
          <StItem color={getColor("mypage")}>
            <StLink to="my-page">
              <IcMyPage fill={getColor("mypage")} />
              마이페이지
            </StLink>
          </StItem>
          <StItem color={getColor("to-be")}>
            <StLink to="to-be">
              <IcToBe fill={getColor("to-be")} />곧 만나요
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
  position: fixed;
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

const StItem = styled.li<{ color: string }>`
  display: flex;
  align-items: center;
  color: ${({ color }) => color};

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
