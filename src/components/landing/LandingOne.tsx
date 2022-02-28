import { Link } from "react-router-dom";
import styled from "styled-components";

import { ImgLanding01, ImgLandingMobileBanner } from "../../assets/images";
import { Button } from "../common/styled/Button";
import { LandingMobileProps } from "./LandingHeader";

export default function LandingOne(props: LandingMobileProps) {
  const { isMobileScreen } = props;

  return (
    <>
      {isMobileScreen ? (
        <MobileWrapper>
          <MobileTitle>
            진짜 독서가들을 위한
            <br />
            독서법을 만들어 갑니다
          </MobileTitle>
          <MobileComment>북스테어즈는 PC에서 이용해 주세요.</MobileComment>
        </MobileWrapper>
      ) : (
        <StWrapper>
          <StArticle>
            <StTitle>
              진짜 독서가들을 위한
              <br />
              독서법을 만들어 갑니다
            </StTitle>
            <Link to="/main">
              <StButton>북스테어즈 시작</StButton>
            </Link>
          </StArticle>
          <StImgLanding01 src={ImgLanding01} alt="여긴 어떤 이미지가 들어갈까요?" />
        </StWrapper>
      )}
    </>
  );
}

const MobileWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 44.3rem;

  background-image: url(${ImgLandingMobileBanner});

  width: 32rem;
`;

const MobileTitle = styled.h1`
  margin-bottom: 1.4rem;

  text-align: center;

  ${({ theme }) => theme.fonts.h1};
  color: ${({ theme }) => theme.colors.white};
`;

const MobileComment = styled.p`
  ${({ theme }) => theme.fonts.h6};
  color: ${({ theme }) => theme.colors.white};
`;

const StWrapper = styled.section`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;

const StArticle = styled.article`
  margin-top: 15rem;
`;

const StTitle = styled.h1`
  ${({ theme }) => theme.fonts.header001}
`;

const StButton = styled(Button)`
  margin-top: 5.1rem;
  border-radius: 1.6rem;
  padding: 1.8rem 2.5rem;

  ${({ theme }) => theme.fonts.header3}
`;

const StImgLanding01 = styled.img`
  width: 75.4rem;
  height: 76.1rem;
`;
