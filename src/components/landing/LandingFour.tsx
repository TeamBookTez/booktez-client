import styled from "styled-components";

import { ImgLandingBookNote } from "../../assets/images";
import { StH2, StWrapper } from "./LandingThree";

export default function LandingFour() {
  return (
    <StSection>
      <div>
        <StH2>
          비문학 책을 읽으며
          <br />
          나만의 북노트를 작성해보세요
        </StH2>
        <p>
          관심이 가는 주제에 질문 리스트를 작성하고
          <br />
          답변을 달아보며 효율적인 독서를 즐겨보세요
        </p>
      </div>
      <img src={ImgLandingBookNote} alt="북노트 작성 이미지" />
    </StSection>
  );
}

const StSection = styled(StWrapper)`
  padding-top: 11.1rem;
  padding-bottom: 12.4rem;
`;
