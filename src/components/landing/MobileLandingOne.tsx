import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { ImgLandingMobileBanner, ImgLandingTabletBanner } from "../../assets/images";
import { Button } from "../common/styled/Button";

export default function MobileLandingOne() {
  const navigate = useNavigate();

  const isMobileWithButtonScreen = useMediaQuery({
    query: "(min-width: 1200px)",
  });

  return (
    <StWrapper>
      <StTitle>
        진짜 독서가들을 위한
        <br />
        독서법을 만들어 갑니다
      </StTitle>
      {isMobileWithButtonScreen ? (
        <StButton type="button" onClick={() => navigate("/main")}>
          북스테어즈 시작
        </StButton>
      ) : (
        <StComment>북스테어즈는 PC에서 이용해 주세요.</StComment>
      )}
    </StWrapper>
  );
}

const StWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 44.3rem;

  margin-top: 6rem;

  background-image: url(${ImgLandingMobileBanner});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (min-width: 641px) {
    background-image: url(${ImgLandingTabletBanner});
    height: 45.1rem;
  }
`;

const StTitle = styled.h1`
  margin-bottom: 1.4rem;

  text-align: center;

  ${({ theme }) => theme.fonts.h1};
  color: ${({ theme }) => theme.colors.white};
`;

const StComment = styled.p`
  ${({ theme }) => theme.fonts.h6};
  color: ${({ theme }) => theme.colors.white};
`;

const StButton = styled(Button)`
  width: 13.2rem;
  height: 4.7rem;

  margin-top: 2rem;

  border-radius: 1rem;

  ${({ theme }) => theme.fonts.button3}
`;
