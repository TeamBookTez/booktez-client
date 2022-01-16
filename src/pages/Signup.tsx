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

export interface UserData {
  email: string;
  password: string;
  nickname: string;
}

export default function Layout() {
  const [isAniTime, setIsAniTime] = useState<boolean>(false);
  const { state, pathname } = useLocation();

  const [userData, setUserData] = useState<UserData>({
    email: "",
    password: "",
    nickname: "",
  });

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
      headerText = "OOOOOOOOOO님!\n나만의 서재가 완성됐어요!";
  }

  const handleIsAniTime = (isActive: boolean) => {
    setIsAniTime(isActive);
  };

  return (
    <>
      <NavHeader logocolor={theme.colors.gray100} />
      {state === "rightpath" ? (
        <StMain isrightpath={state === "rightpath"} isAniTime={isAniTime}>
          <StFormWrapper>
            {imgSrc && <StImage src={imgSrc} alt="회원가입 첫 단계" />}
            <StHeading2>{headerText}</StHeading2>
            <Outlet context={[userData, setUserData, handleIsAniTime]} />
          </StFormWrapper>
        </StMain>
      ) : (
        <div>404 에러</div>
      )}
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

  animation: ${fadein} 1s ease-in-out;
  ${({ isAniTime }) =>
    isAniTime
      ? css`
          animation: ${fadeout} 1s ease-in-out;
        `
      : ""};
`;

const StFormWrapper = styled.article`
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

  white-space: pre-wrap;
  text-align: center;
  ${({ theme }) => theme.fonts.header0}
`;
