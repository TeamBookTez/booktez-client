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

export default function LandingTwo() {
  return (
    <StWrapper>
      <StH2>책이 장벽으로 느껴졌던 적 없으신가요?</StH2>
      <p>책의 중요성은 알지만 여전히 독서는 어렵다고 생각되지 않나요?</p>
      <StCardsWrapper>
        <LandingCard
          title='"남는게 없어요"'
          subTitle="핵심 파악이 어려워, 책을 읽고 또 읽어도
          머릿속에 남는 게 없는 것 같아요.">
          <IcLandingIcon01 />
        </LandingCard>
        <LandingCard
          title='"정리가 어려워요"'
          subTitle="책 속 수많은 지식들을 잘 정리하는 게 어렵고      
          중요한 내용들을 빼먹었을까봐 두려워요.">
          <IcLandingIcon02 />
        </LandingCard>
        <LandingCard
          title='"효과가 적어요"'
          subTitle="책을 읽는데 소요되는 시간에 비해 효과가 적은 것 같아 내게 맞는 방식으로 읽고 있는지 모르겠어요.">
          <IcLandingIcon03 />
        </LandingCard>
      </StCardsWrapper>
    </StWrapper>
  );
}

const StWrapper = styled.section`
  padding: 21rem 0 16rem 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.fonts.body0}
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
