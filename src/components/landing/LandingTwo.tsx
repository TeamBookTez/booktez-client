import styled, { css } from "styled-components";

import {
  IcLandingIcon01,
  IcLandingIcon02,
  IcLandingIcon03,
  IcLandingMobileIcon01,
  IcLandingMobileIcon02,
  IcLandingMobileIcon03,
} from "../../assets/icons";
import { LandingCard } from ".";
import { LandingOneProps } from "./LandingHeader";

export default function LandingTwo(props: LandingOneProps) {
  const { isMobileScreen } = props;

  return (
    <StWrapper isMobileScreen={isMobileScreen}>
      {isMobileScreen ? (
        <>
          <MobileTopWrapper>
            <MobileH2>
              책이 장벽으로 <br /> 느껴졌던 적 없으신가요?
            </MobileH2>
            <MobileComment>
              책의 중요성은 알지만 여전히 독서는 어렵다고 <br /> 생각되지 않나요?
            </MobileComment>
          </MobileTopWrapper>
          <MobileBottomWrapper>
            <LandingCard
              title='"남는게 없어요"'
              subTitle="핵심 파악이 어려워, 책을 읽고 또 읽어도       
              머릿속에 남는 게 없는 것 같아요."
              isMobileScreen={isMobileScreen}>
              <IcLandingMobileIcon01 />
            </LandingCard>
            <LandingCard
              title='"정리가 어려워요"'
              subTitle="책 속 수많은 지식들을 잘 정리하는 게 어렵고      
          중요한 내용들을 빼먹었을까봐 두려워요."
              isMobileScreen={isMobileScreen}>
              <IcLandingMobileIcon02 />
            </LandingCard>
            <LandingCard
              title='"효과가 적어요"'
              subTitle="책을 읽는데 소요되는 시간에 비해 효과가        
              적은 것 같아 내게 맞는 방식으로 읽고 있는지           
              모르겠어요."
              isMobileScreen={isMobileScreen}>
              <IcLandingMobileIcon03 />
            </LandingCard>
          </MobileBottomWrapper>
        </>
      ) : (
        <>
          <StH2>책이 장벽으로 느껴졌던 적 없으신가요?</StH2>
          <p>책의 중요성은 알지만 여전히 독서는 어렵다고 생각되지 않나요?</p>
          <StCardsWrapper>
            <LandingCard
              title='"남는게 없어요"'
              subTitle="핵심 파악이 어려워, 책을 읽고 또 읽어도
          머릿속에 남는 게 없는 것 같아요."
              isMobileScreen={isMobileScreen}>
              <IcLandingIcon01 />
            </LandingCard>
            <LandingCard
              title='"정리가 어려워요"'
              subTitle="책 속 수많은 지식들을 잘 정리하는 게 어렵고      
          중요한 내용들을 빼먹었을까봐 두려워요."
              isMobileScreen={isMobileScreen}>
              <IcLandingIcon02 />
            </LandingCard>
            <LandingCard
              title='"효과가 적어요"'
              subTitle="책을 읽는데 소요되는 시간에 비해 효과가 적은 것 같아 내게 맞는 방식으로 읽고 있는지 모르겠어요."
              isMobileScreen={isMobileScreen}>
              <IcLandingIcon03 />
            </LandingCard>
          </StCardsWrapper>
        </>
      )}
    </StWrapper>
  );
}

const StWrapper = styled.section<{ isMobileScreen: boolean }>`
  ${({ isMobileScreen }) =>
    isMobileScreen
      ? css`
          padding: 0;
          max-width: 32rem;
        `
      : css`
          padding: 21rem 0 16rem 0;
          width: 100%;
        `}
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.fonts.body0}
`;

const MobileTopWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 19.8rem;
`;

const MobileH2 = styled.h2`
  ${({ theme }) => theme.fonts.h2};

  margin-bottom: 1.1rem;

  text-align: center;
`;

const MobileComment = styled.p`
  ${({ theme }) => theme.fonts.Body2};

  text-align: center;
`;

const MobileBottomWrapper = styled.section`
  display: flex;
  flex-direction: column;

  height: 68.8rem;

  background-color: ${({ theme }) => theme.colors.white200};
`;

const StH2 = styled.h2`
  margin-bottom: 1.6rem;
  ${({ theme }) => theme.fonts.header0}
  color: ${({ theme }) => theme.colors.gray200};
`;

const StCardsWrapper = styled.section`
  display: flex;
  justify-content: space-between;

  margin-top: 9.2rem;

  width: 100%;
`;
