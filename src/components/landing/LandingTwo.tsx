import styled from "styled-components";

import { IcLandingIcon01, IcLandingIcon02, IcLandingIcon03 } from "../../assets/icons";
import { LandingCard } from ".";

export default function LandingTwo() {
  return (
    <StWrapper>
      <StH2>책을 읽을 때 이런 어려움이 있으셨나요?</StH2>
      <p>독서에 들어가기 전 망설여지는 점들이 있지 않으신가요</p>
      <StCardsWrapper>
        <LandingCard
          title="남는게 없어요"
          subTitle="책을 읽고 또 읽어도 요점을 파악하기 어려워 다 읽어도 머릿속에 남는게 없는 것 같아요">
          <IcLandingIcon01 />
        </LandingCard>
        <LandingCard
          title="정리가 어려워요"
          subTitle="책 속 수많은 지식들을 잘 정리하는 게 어렵고 중요한 내용들을 빼먹었을까봐 두려워요">
          <IcLandingIcon02 />
        </LandingCard>
        <LandingCard
          title="효과가 적어요"
          subTitle="책을 읽는데 소요되는 시간에 비해 효과가 적은 것 같아 내게 맞는 방식으로 읽고 있는지 모르겠어요">
          <IcLandingIcon03 />
        </LandingCard>
      </StCardsWrapper>
    </StWrapper>
  );
}

const StWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 21rem 0;

  ${({ theme }) => theme.fonts.body0}
`;

const StH2 = styled.h2`
  margin-bottom: 1.6rem;
  ${({ theme }) => theme.fonts.header0}
  color: ${({ theme }) => theme.colors.gray200};
`;

const StCardsWrapper = styled.section`
  display: flex;
  gap: 2.3rem;

  margin-top: 9.2rem;
`;
