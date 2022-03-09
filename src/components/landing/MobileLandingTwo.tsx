import React from "react";
import styled from "styled-components";

import { IcLandingMobileIcon01, IcLandingMobileIcon02, IcLandingMobileIcon03 } from "../../assets/icons";
import { StMobileMain } from "../../pages/Landing";
import MobileLandingCard from "./MobileLandingCard";

export default function MobileLandingTwo() {
  return (
    <>
      <StMobileMain>
        <StMobileTopWrapper>
          <StMobileH2>
            책이 장벽으로 <br /> 느껴졌던 적 없으신가요?
          </StMobileH2>
          <StMobileComment>
            책의 중요성은 알지만 여전히 독서는 어렵다고 <br /> 생각되지 않나요?
          </StMobileComment>
        </StMobileTopWrapper>
      </StMobileMain>
      <StMobileBgBottom>
        <StMobileMain>
          <StMobileBottomWrapper>
            <MobileLandingCard
              title='"남는게 없어요"'
              subTitle="핵심 파악이 어려워, 책을 읽고 또 읽어도       
            머릿속에 남는 게 없는 것 같아요.">
              <IcLandingMobileIcon01 />
            </MobileLandingCard>
            <MobileLandingCard
              title='"정리가 어려워요"'
              subTitle="책 속 수많은 지식들을 잘 정리하는 게 어렵고      
          중요한 내용들을 빼먹었을까봐 두려워요.">
              <IcLandingMobileIcon02 />
            </MobileLandingCard>
            <MobileLandingCard
              title='"효과가 적어요"'
              subTitle="책을 읽는데 소요되는 시간에 비해 효과가        
              적은 것 같아 내게 맞는 방식으로 읽고 있는지           
              모르겠어요.">
              <IcLandingMobileIcon03 />
            </MobileLandingCard>
          </StMobileBottomWrapper>
        </StMobileMain>
      </StMobileBgBottom>
    </>
  );
}

const StMobileBgBottom = styled.div`
  background-color: ${({ theme }) => theme.colors.white200};
`;

const StMobileTopWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 19.8rem;
`;

const StMobileH2 = styled.h2`
  ${({ theme }) => theme.fonts.h2};

  margin-bottom: 1.1rem;

  text-align: center;
`;

const StMobileComment = styled.p`
  ${({ theme }) => theme.fonts.Body2};

  text-align: center;
`;

const StMobileBottomWrapper = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 68.8rem;

  background-color: ${({ theme }) => theme.colors.white200};
`;
