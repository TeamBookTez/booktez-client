import styled from "styled-components";

import { IcLandingMobileFour02 } from "../../assets/icons";
import { ImgLandingBookcase } from "../../assets/images";
import { LandingMobileProps } from "./LandingHeader";
import { StH2, StWrapper } from "./LandingThree";
import { StH2Four, StParagraphFour, StWrapperFour } from "./MobileLandingFour";

export default function LandingFive(props: LandingMobileProps) {
  const { isMobileScreen } = props;

  return (
    <>
      {isMobileScreen ? (
        <StWrapperFour>
          <StH2Four>
            읽을수록 쌓여가는 <br />
            <strong>성장의 만족감을 느껴보세요.</strong>
          </StH2Four>
          <StParagraphFour>
            나만의 북노트를 모아보고 내용을 재확인하며,
            <br />
            내가 읽은 책들을 모두 흡수해보세요.
          </StParagraphFour>
          <IcLandingMobileFour02 />
        </StWrapperFour>
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
