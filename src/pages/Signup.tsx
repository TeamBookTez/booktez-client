import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

import { NavHeader } from "../components/common";

export default function Layout() {
  const { state } = useLocation();

  return (
    <>
      <NavHeader logocolor="#242424" />
      <StMain isrightpath={state === "ani"}>
        <Outlet />
      </StMain>
    </>
  );
}

const StMain = styled.main<{ isrightpath: boolean }>`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ isrightpath }) => (isrightpath ? "animation: fadein 1s ease-in-out;" : "")};

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
