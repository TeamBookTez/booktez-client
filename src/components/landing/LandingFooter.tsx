import { Link } from "react-router-dom";
import styled from "styled-components";

import { IcLandingFooter, IcLandingMobileMark, IcMainLogo } from "../../assets/icons";
import { Button } from "../common/styled/Button";
import { LandingMobileProps } from "./LandingHeader";

export default function LandingFooter(props: LandingMobileProps) {
  const { isMobileScreen } = props;

  return (
    <>
      {isMobileScreen ? (
        <>
          <StFooterMobileWrapper>
            <StMobileH1>
              책을 통한 성장의 계단, <br />
              함께 오르실 분들을 기다립니다.
            </StMobileH1>
            <StMobileParagraph>PC에서 이용해 주세요.</StMobileParagraph>
          </StFooterMobileWrapper>
          <StCopyrightMobileWrapper>
            <IcLandingMobileMark />
            <StMobileContact>Contact &nbsp; bookstairs.official@gmail.com</StMobileContact>
            <StMobileCopyright>Copyright &nbsp; 2022. Bookstairs All right reserved</StMobileCopyright>
          </StCopyrightMobileWrapper>
        </>
      ) : (
        <>
          <StFooterWrapper>
            <StH1>
              책을 통한 성장의 계단, <br />
              함께 오르실 분들을 기다립니다.{" "}
            </StH1>
            <Link to="/main">
              <StButton>북스테어즈 시작</StButton>
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
      )}
    </>
  );
}

const StFooterMobileWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 32rem;
  height: 28rem;

  margin: 0 auto;

  background-color: ${({ theme }) => theme.colors.gray100};
`;

const StMobileH1 = styled.h1`
  margin-bottom: 1.6rem;

  text-align: center;

  ${({ theme }) => theme.fonts.h2};
  color: ${({ theme }) => theme.colors.white};
`;

const StMobileParagraph = styled.h5`
  text-align: center;

  ${({ theme }) => theme.fonts.Body2};
  color: ${({ theme }) => theme.colors.white500};
`;

const StCopyrightMobileWrapper = styled(StFooterMobileWrapper)`
  background-color: ${({ theme }) => theme.colors.gray200};
`;

const StFooterWrapper = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffae88;

  height: 39.6rem;
`;

const StMobileContact = styled(StMobileParagraph)`
  margin-top: 8rem;
  margin-bottom: 0.7rem;

  text-align: center;

  ${({ theme }) => theme.fonts.Caption2};
`;

const StMobileCopyright = styled(StMobileContact)`
  margin-top: 0;
  margin-bottom: 0;
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
