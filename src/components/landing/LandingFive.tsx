import styled from "styled-components";

import { ImgLandingBookcase } from "../../assets/images";
import { StH2, StWrapper } from "./LandingThree";

export default function LandingFive() {
  return (
    <StSection>
      <div>
        <StH2>
          작성한 북노트를
          <br />
          서재에 쌓아서 모아보세요
        </StH2>
        <p>
          책을 서재에서 모아보고 내용을 재확인하며
          <br />
          내가 읽은 책들을 모두 습득해보세요
        </p>
      </div>
      <img src={ImgLandingBookcase} alt="서재 이미지" />
    </StSection>
  );
}

const StSection = styled(StWrapper)`
  padding: 11.7rem 0;
`;
