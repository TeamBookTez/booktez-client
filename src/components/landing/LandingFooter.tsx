import { Link } from "react-router-dom";
import styled from "styled-components";

import { IcLandingFooter } from "../../assets/icons";
import { Button } from "../common/styled/Button";

export default function LandingFooter() {
  return (
    <>
      <StFooterWrapper>
        <StH1>북스테어즈 사용해보기</StH1>
        <Link to="/main">
          <StButton>북스테어즈 시작</StButton>
        </Link>
        <StIcFooter />
      </StFooterWrapper>
      <StFooter />
    </>
  );
}

const StFooterWrapper = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffae88;

  height: 39.6rem;
`;

const StH1 = styled.h1`
  ${({ theme }) => theme.fonts.header00}
  color: ${({ theme }) => theme.colors.gray200};
`;

const StButton = styled(Button)`
  margin-top: 2.8rem;
  border-radius: 1.6rem;
  padding: 1.8rem 2.5rem;

  ${({ theme }) => theme.fonts.header3}
`;

const StIcFooter = styled(IcLandingFooter)`
  position: absolute;

  // vector가 약간 뜸
  bottom: -0.1rem;
  right: 0;
`;

const StFooter = styled.div`
  height: 14.7rem;
  background-color: ${({ theme }) => theme.colors.gray100};
`;
