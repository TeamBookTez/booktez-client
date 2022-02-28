import styled from "styled-components";

import { IcLandingMobileFour01 } from "../../assets/icons";
import { ImgLandingBookNote } from "../../assets/images";
import { LandingMobileProps } from "./LandingHeader";
import { StH2, StWrapper } from "./LandingThree";

export default function LandingFour(props: LandingMobileProps) {
  const { isMobileScreen } = props;

  return (
    <>
      {isMobileScreen ? (
        <StMobileWrapper>
          <StMobileH2>
            머릿속에도 깔끔하게 정리되는 <br />
            <strong>특별한 북노트를 작성해 보세요.</strong>
          </StMobileH2>
          <StMobileParagraph>
            뻔한 메모 방식 대신, 색다른 방법으로 정리해보세요.
            <br />
            탄탄한 지식 체계가 머릿속에도 쌓이게 될 거예요.
          </StMobileParagraph>
          <IcLandingMobileFour01 />
        </StMobileWrapper>
      ) : (
        <StSection>
          <div>
            <StH2>
              머릿속에도 깔끔하게 정리되는 <br />
              특별한 북노트를 작성해 보세요.
            </StH2>
            <StParagraph>
              뻔한 메모 방식 대신, 색다른 방법으로 정리해보세요.
              <br />
              탄탄한 지식 체계가 머릿속에도 쌓이게 될 거예요.
            </StParagraph>
          </div>
          <StImgLandingBookNote src={ImgLandingBookNote} alt="북노트 작성 이미지" />
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
  padding-top: 11.1rem;
  padding-bottom: 12.4rem;
`;

const StParagraph = styled.p`
  ${({ theme }) => theme.fonts.body00};
`;

const StImgLandingBookNote = styled.img`
  width: 62.9rem;
  height: 51.3rem;
`;
