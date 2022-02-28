import styled from "styled-components";

import { IcLandingMobileFour02 } from "../../assets/icons";
import { ImgLandingBookcase } from "../../assets/images";
import { LandingMobileProps } from "./LandingHeader";
import { StH2, StWrapper } from "./LandingThree";

export default function LandingFive(props: LandingMobileProps) {
  const { isMobileScreen } = props;

  return (
    <>
      {isMobileScreen ? (
        <StMobileWrapper>
          <StMobileH2>
            읽을수록 쌓여가는 <br />
            <strong>성장의 만족감을 느껴보세요.</strong>
          </StMobileH2>
          <StMobileParagraph>
            나만의 북노트를 모아보고 내용을 재확인하며,
            <br />
            내가 읽은 책들을 모두 흡수해보세요.
          </StMobileParagraph>
          <IcLandingMobileFour02 />
        </StMobileWrapper>
      ) : (
        <StSection>
          <div>
            <StH2>
              읽을수록 쌓여가는 <br />
              성장의 만족감을 느껴보세요.
            </StH2>
            <StParagraph>
              나만의 북노트를 모아보고 내용을 재확인하며,
              <br />
              내가 읽은 책들을 모두 흡수해보세요.
            </StParagraph>
          </div>
          <StImgLandingBookcase src={ImgLandingBookcase} alt="서재 이미지" />
        </StSection>
      )}
    </>
  );
}

const StMobileWrapper = styled.section`
  width: 32rem;
  height: 43rem;

  padding: 4.2rem 2rem 3.3rem 2rem;

  background-color: ${({ theme }) => theme.colors.white200};
`;

const StMobileH2 = styled.h2`
  margin-left: 0.4rem;
  margin-bottom: 1.6rem;

  ${({ theme }) => theme.fonts.h5};

  & > strong {
    display: inline-block;
    margin-top: 0.4rem;

    ${({ theme }) => theme.fonts.h3};
  }
`;

const StMobileParagraph = styled.p`
  margin-left: 0.4rem;
  margin-bottom: 2.4rem;

  ${({ theme }) => theme.fonts.Body2};
`;

const StSection = styled(StWrapper)`
  padding: 11.7rem 0;
`;

const StParagraph = styled.p`
  ${({ theme }) => theme.fonts.body00}
`;

const StImgLandingBookcase = styled.img`
  width: 58.3rem;
  height: 46.7rem;
`;
