import { Link } from "react-router-dom";
import styled from "styled-components";

import { IcLogo, IcTitleLogo } from "../../assets/icons";
import { LabelHidden } from "./styled/LabelHidden";

interface NavHeaderProps {
  logocolor: string;
}

export default function NavHeader(props: NavHeaderProps) {
  const { logocolor } = props;

  return (
    <StHeader>
      <StLink to="/main">
        <StIcCool />
        <StIcTitleLogo logocolor={logocolor} />
        <LabelHidden>북스테어즈</LabelHidden>
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

const StLink = styled(Link)`
  display: flex;
  align-items: center;

  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.2rem;
`;

const StIcCool = styled(IcLogo)`
  margin: 0 1.37rem 0 2.65rem;
`;

const StIcTitleLogo = styled(IcTitleLogo)<{ logocolor: string }>`
  fill: ${({ logocolor }) => logocolor};
`;
