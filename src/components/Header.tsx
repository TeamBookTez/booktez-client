import { Link } from "react-router-dom";
import styled from "styled-components";

// import { ReactComponent as IcLogo } from "../../assets/icons/logoicon.svg";

export default function Header() {
  return (
    <StHeader>
      <StLink to="/main">
        {/* <StIcCool /> */}
        북스테어즈
      </StLink>
    </StHeader>
  );
}

const StHeader = styled.header`
  display: flex;
  align-items: center;

  width: 100%;
  height: 9rem;
`;

const StLink = styled(Link)`
  display: flex;

  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: -0.2rem;
  color: ${({ theme }) => theme.colors.gray100};
`;

// const StIcCool = styled(IcLogo)``;
