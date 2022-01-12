import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

import { NavHeader } from "../components/common";

interface StMainProps {
  isrightpath: boolean;
  isAniTime: boolean;
}

export default function Layout() {
  const [isAniTime, setIsAniTime] = useState<boolean>(false);
  const { state } = useLocation();

  const handleIsAniTime = (isActive: boolean) => {
    setIsAniTime(isActive);
  };

  return (
    <>
      <NavHeader logocolor="#242424" />
      <StMain isrightpath={state === "ani"} isAniTime={isAniTime}>
        <Outlet context={[handleIsAniTime]} />
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
