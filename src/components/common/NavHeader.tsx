import { Link } from "react-router-dom";
import styled from "styled-components";

import { IcLogo } from "../../assets/icons";

interface NavHeaderProps {
  logocolor: string;
}

export default function NavHeader(props: NavHeaderProps) {
  const { logocolor } = props;

  return (
    <StHeader>
      <StLink to="/main" logocolor={logocolor}>
        <StIcCool />
        북스테어즈
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

  height: 9rem;
`;

const StLink = styled(Link)<{ logocolor: string }>`
  display: flex;
  align-items: center;

  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: -0.2rem;
  color: ${({ logocolor }) => logocolor};
`;

const StIcCool = styled(IcLogo)`
  margin: 0 0.8rem 0 2rem;
`;
