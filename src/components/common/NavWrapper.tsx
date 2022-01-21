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

    if (pathname === `/main${nav}` || pathname.startsWith(`/main/${sub}`)) {
      color = highlightColor;
    } else {
      color = defaultColor;
    }

    return color;
  };

  return (
    <StSection>
      <NavHeader logocolor={theme.colors.white} />
      <StNav>
        <StUl>
          <StItem color={getColor("")}>
            <StLink to="/main">
              <IcHome fill={getColor("")} />홈
            </StLink>
          </StItem>
          <StItem color={getColor("/add-book", "bookcase")}>
            <StLink to="/main/bookcase">
              <IcBookcase fill={getColor("/add-book", "bookcase")} />
              서재
            </StLink>
          </StItem>
          <StItem color={getColor("/my-page")}>
            <StLink to="/main/my-page">
              <IcMyPage fill={getColor("/my-page")} />
              마이페이지
            </StLink>
          </StItem>
          <StItem color={getColor("/to-be")}>
            <StLink to="/main/to-be">
              <IcToBe fill={getColor("/to-be")} />
              준비중
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
  position: absolute;
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
  ${({ theme }) => theme.fonts.body5};
`;
