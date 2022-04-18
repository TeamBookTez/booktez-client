import styled from "styled-components";

import { ImgLandingBookcase } from "../../assets/images";
import { StLandingSectionH2, StLandingSectionWrapper } from "../common/styled/Landing";

export default function LandingFive() {
  return (
    <StSection>
      <div>
        <StLandingSectionH2>
          읽을수록 쌓여가는 <br />
          성장의 만족감을 느껴보세요.
        </StLandingSectionH2>
        <StParagraph>
          나만의 북노트를 모아보고 내용을 재확인하며,
          <br />
          내가 읽은 책들을 모두 흡수해보세요.
        </StParagraph>
      </div>
      <StImgLandingBookcase src={ImgLandingBookcase} alt="서재 이미지" />
    </StSection>
  );
}

const StSection = styled(StLandingSectionWrapper)`
  padding: 11.7rem 0;
`;

const StParagraph = styled.p`
  ${({ theme }) => theme.fonts.body00}
`;

const StImgLandingBookcase = styled.img`
  width: 58.3rem;
  height: 46.7rem;
`;
