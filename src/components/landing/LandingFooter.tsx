import { Link } from "react-router-dom";
import styled from "styled-components";

import { IcLandingFooter, IcMainLogo } from "../../assets/icons";
import { Button } from "../common/styled/Button";

export default function LandingFooter() {
  return (
    <>
      <StFooterWrapper>
        <StH1>
          책을 통한 성장의 계단, <br />
          함께 오르실 분들을 기다립니다.{" "}
        </StH1>
        <Link to="/main">
          <StButton id="cta_bottom">북스테어즈 시작</StButton>
        </Link>
        <StIcFooter />
      </StFooterWrapper>
      <StFooter>
        <IcMainLogo />
        <StContactWrapper>
          <StContact>Contact</StContact>
          <StEmail>bookstairs.official@gmail.com</StEmail>
        </StContactWrapper>
        <StCopyright>Copyright 2022. Bookstairs All right reserved</StCopyright>
      </StFooter>
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

  text-align: center;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 24.2rem;
  background-color: ${({ theme }) => theme.colors.gray100};

  & > svg {
    margin-bottom: 1.6rem;
  }

  & > svg path {
    fill: ${({ theme }) => theme.colors.white};
  }
`;

const StContactWrapper = styled.section`
  display: flex;
  align-items: center;

  margin-bottom: 0.8rem;
`;

const StContact = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body2};

  margin-right: 1rem;
`;

const StEmail = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body2};
`;

const StCopyright = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body4};
`;
