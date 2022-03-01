import styled from "styled-components";

import { ImgLandingBookNote } from "../../assets/images";
import { StH2, StWrapper } from "./LandingThree";

export default function LandingFour() {
  return (
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
  );
}

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
