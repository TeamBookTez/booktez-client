import { IcLandingMobileFour02 } from "../../assets/icons";
import { StMobileMain } from "../../pages/Landing";
import { StBackgroundFour, StH2Four, StMobileBg, StParagraphFour, StWrapperFour } from "./MobileLandingFour";

export default function MobileLandingFive() {
  return (
    <StMobileBg>
      <StMobileMain>
        <StBackgroundFour>
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
        </StBackgroundFour>
      </StMobileMain>
    </StMobileBg>
  );
}
