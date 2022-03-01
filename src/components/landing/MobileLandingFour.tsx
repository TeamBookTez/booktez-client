import styled from "styled-components";

import { IcLandingMobileFour01 } from "../../assets/icons";
import { StMobileMain } from "../../pages/Landing";

export default function MobileLandingFour() {
  return (
    <StMobileBg>
      <StMobileMain>
        <StBackgroundFour>
          <StWrapperFour>
            <StH2Four>
              머릿속에도 깔끔하게 정리되는 <br />
              <strong>특별한 북노트를 작성해 보세요.</strong>
            </StH2Four>
            <StParagraphFour>
              뻔한 메모 방식 대신, 색다른 방법으로 정리해보세요.
              <br />
              탄탄한 지식 체계가 머릿속에도 쌓이게 될 거예요.
            </StParagraphFour>
            <IcLandingMobileFour01 />
          </StWrapperFour>
        </StBackgroundFour>
      </StMobileMain>
    </StMobileBg>
  );
}

export const StMobileBg = styled.div`
  background-color: ${({ theme }) => theme.colors.white200};
`;

export const StBackgroundFour = styled.section`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 43rem;
`;

export const StWrapperFour = styled.article`
  width: 32rem;

  padding: 4.2rem 2rem 3.3rem 2rem;
`;

export const StH2Four = styled.h2`
  margin-left: 0.4rem;
  margin-bottom: 1.6rem;

  ${({ theme }) => theme.fonts.h5};

  & > strong {
    display: inline-block;
    margin-top: 0.4rem;

    ${({ theme }) => theme.fonts.h3};
  }
`;

export const StParagraphFour = styled.p`
  margin-left: 0.4rem;
  margin-bottom: 2.4rem;

  ${({ theme }) => theme.fonts.Body2};
`;
