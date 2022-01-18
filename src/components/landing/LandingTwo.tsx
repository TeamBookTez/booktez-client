import styled from "styled-components";

import { IcLandingIcon01, IcLandingIcon02, IcLandingIcon03 } from "../../assets/icons";

export default function LandingTwo() {
  return (
    <StWrapper>
      <StH2>책을 읽을 때 이런 어려움이 있으셨나요?</StH2>
      <p>독서에 들어가기 전 망설여지는 점들이 있지 않으신가요</p>
      <StCardsWrapper>
        <StCard>
          <IcLandingIcon01 />
          <div>
            <StH4>남는게 없어요</StH4>
            <p>
              책을 읽고 또 읽어도 요점을 파악하기 어려워
              <br />다 읽어도 머릿속에 남는게 없는 것 같아요
            </p>
          </div>
        </StCard>
        <StCard>
          <IcLandingIcon02 />
          <div>
            <StH4>정리가 어려워요</StH4>
            <p>
              책 속 수많은 지식들을 잘 정리하는 게 어렵고
              <br />
              중요한 내용들을 빼먹었을까봐 두려워요
            </p>
          </div>
        </StCard>
        <StCard>
          <IcLandingIcon03 />
          <div>
            <StH4>효과가 적어요</StH4>
            <p>
              책을 읽는데 소요되는 시간에 비해 효과가 적은 것<br />
              같아 내게 맞는 방식으로 읽고 있는지 모르겠어요
            </p>
          </div>
        </StCard>
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

const StCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 0.8rem;
  box-shadow: 0px 6px 10px 8px rgba(45, 45, 45, 0.04);

  padding: 4rem 3.5rem 6.4rem 2.8rem;

  width: 38.8rem;
  height: 34.8rem;

  ${({ theme }) => theme.fonts.body4}

  & > svg {
    width: 4.5rem;
    height: 4.5rem;
    margin-left: 0.7rem;
  }
`;

const StH4 = styled.h4`
  margin-bottom: 2.2rem;
  ${({ theme }) => theme.fonts.header3}
  color: ${({ theme }) => theme.colors.gray100};
`;
