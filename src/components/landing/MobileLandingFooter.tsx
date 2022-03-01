import React from "react";
import styled from "styled-components";

import { IcLandingMobileMark } from "../../assets/icons";

export default function MobileLandingFooter() {
  return (
    <>
      <StFooterWrapper>
        <StH1>
          책을 통한 성장의 계단, <br />
          함께 오르실 분들을 기다립니다.
        </StH1>
        <StParagraph>PC에서 이용해 주세요.</StParagraph>
      </StFooterWrapper>
      <StCopyrightWrapper>
        <IcLandingMobileMark />
        <StContact>Contact &nbsp; bookstairs.official@gmail.com</StContact>
        <StCopyright>Copyright &nbsp; 2022. Bookstairs All right reserved</StCopyright>
      </StCopyrightWrapper>
    </>
  );
}

const StFooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 28rem;

  margin: 0 auto;

  background-color: ${({ theme }) => theme.colors.gray100};
`;

const StH1 = styled.h1`
  margin-bottom: 1.6rem;

  text-align: center;

  ${({ theme }) => theme.fonts.h2};
  color: ${({ theme }) => theme.colors.white};
`;

const StParagraph = styled.h5`
  text-align: center;

  ${({ theme }) => theme.fonts.Body2};
  color: ${({ theme }) => theme.colors.white500};
`;

const StCopyrightWrapper = styled(StFooterWrapper)`
  background-color: ${({ theme }) => theme.colors.gray200};
`;

const StContact = styled(StParagraph)`
  margin-top: 8rem;
  margin-bottom: 0.7rem;

  text-align: center;

  ${({ theme }) => theme.fonts.Caption2};
`;

const StCopyright = styled(StContact)`
  margin-top: 0;
  margin-bottom: 0;
`;
