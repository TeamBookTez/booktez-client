import React from "react";
import styled from "styled-components";

import { ImgLandingMobileBanner } from "../../assets/images";

export default function MobileLandingOne() {
  return (
    <StWrapper>
      <StTitle>
        진짜 독서가들을 위한
        <br />
        독서법을 만들어 갑니다
      </StTitle>
      <StComment>북스테어즈는 PC에서 이용해 주세요.</StComment>
    </StWrapper>
  );
}

const StWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 57.5rem;

  margin-top: 6rem;

  background-image: url(${ImgLandingMobileBanner});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const StTitle = styled.h1`
  margin-bottom: 1.4rem;

  text-align: center;

  ${({ theme }) => theme.fonts.h1};
  color: ${({ theme }) => theme.colors.white};
`;

const StComment = styled.p`
  ${({ theme }) => theme.fonts.h6};
  color: ${({ theme }) => theme.colors.white};
`;
