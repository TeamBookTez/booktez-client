import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

import { ImgSignupFirst, ImgSignupSecond, ImgSignupThird } from "../assets/images";
import { NavHeader } from "../components/common";
import theme from "../styles/theme";

interface StMainProps {
  isrightpath: boolean;
  isAniTime: boolean;
}

export default function Layout() {
  const [isAniTime, setIsAniTime] = useState<boolean>(false);
  const { state, pathname } = useLocation();

  let imgSrc = "";
  let headerText = "";

  switch (pathname) {
    case "/signup":
      imgSrc = ImgSignupFirst;
      headerText = "나만의 서재를 만드는 중이에요!";
      break;
    case "/signup/2":
      imgSrc = ImgSignupSecond;
      headerText = "나만의 서재를 만드는 중이에요!";
      break;
    case "/signup/3":
      imgSrc = ImgSignupThird;
      headerText = "나만의 서재를 만드는 중이에요!";
      break;
    default:
      imgSrc = "";
      headerText = "";
  }

  const handleIsAniTime = (isActive: boolean) => {
    setIsAniTime(isActive);
  };

  return (
    <>
      <NavHeader logocolor={theme.colors.gray100} />
      <StMain isrightpath={state === "ani"} isAniTime={isAniTime}>
        <StArticle>
          {imgSrc && <StImage src={imgSrc} alt="회원가입 첫 단계" />}
          {headerText ? (
            <StHeading2>{headerText}</StHeading2>
          ) : (
            <StHeading2>
              OOOOOOOOOO님!
              <br />
              나만의 서재가 완성됐어요!
            </StHeading2>
          )}
          <Outlet context={[handleIsAniTime]} />
        </StArticle>
      </StMain>
    </>
  );
}

const fadein = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`;

const fadeout = keyframes`
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
`;

const StMain = styled.main<StMainProps>`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ isrightpath }) =>
    isrightpath
      ? css`
          animation: ${fadein} 1s ease-in-out;
        `
      : ""};
  ${({ isAniTime }) =>
    isAniTime
      ? css`
          animation: ${fadeout} 1s ease-in-out;
        `
      : ""};
`;

const StArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StImage = styled.img`
  margin-bottom: 5.8rem;
  width: 24.1rem;
  height: 4.3rem;
`;

const StHeading2 = styled.h2`
  margin-bottom: 3.2rem;

  text-align: center;
  ${({ theme }) => theme.fonts.header0}
`;
