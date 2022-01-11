import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

import { NavHeader } from "../components/common";

interface StMainProps {
  isrightpath: boolean;
  isAniTime: boolean;
}

export default function Layout() {
  const [isAniTime, setIsAniTime] = useState<boolean>(false);
  const { state } = useLocation();

  useEffect(() => {
    console.log("isAniTime", isAniTime);
  }, [isAniTime]);

  return (
    <>
      <NavHeader logocolor="#242424" />
      <StMain isrightpath={state === "ani"} isAniTime={isAniTime}>
        <Outlet context={[isAniTime, setIsAniTime]} />
      </StMain>
    </>
  );
}

const StMain = styled.main<StMainProps>`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ isrightpath }) => (isrightpath ? "animation: fadein 1s ease-in-out;" : "")};
  /* ${({ isAniTime }) => (isAniTime ? "animation: fadein 1s ease-in-out;" : "")} */
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
