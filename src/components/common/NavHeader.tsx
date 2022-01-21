import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

import { IcLogo, IcTitleLogo } from "../../assets/icons";

interface NavHeaderProps {
  logocolor: string;
}

export default function NavHeader(props: NavHeaderProps) {
  const { logocolor } = props;
  const { pathname } = useLocation();

  return (
    <StHeader>
      <StLink to="/main" logocolor={logocolor} pathname={pathname}>
        <StIcCool />
        <IcTitleLogo />
      </StLink>
    </StHeader>
  );
}

const StHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;

  width: 100%;
  height: 9rem;
`;

const StLink = styled(Link)<{ logocolor: string; pathname: string }>`
  display: flex;
  align-items: center;

  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.2rem;
  color: ${({ logocolor }) => logocolor};

  ${({ pathname }) =>
    pathname.startsWith("/signup")
      ? css`
          & > svg:last-child path {
            fill: #242424;
          }
        `
      : ""}
`;

const StIcCool = styled(IcLogo)`
  margin: 0 1.37rem 0 2.65rem;
`;
