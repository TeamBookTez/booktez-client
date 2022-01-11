import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

import { NavHeader } from "../components/common";

export default function Layout() {
  const { state } = useLocation();

  return (
    <>
      <NavHeader logocolor="#242424" />
      <StMain isFromLogin={state === "fromlogin"}>
        <Outlet />
      </StMain>
    </>
  );
}

const StMain = styled.main<{ isFromLogin: boolean }>`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ isFromLogin }) => (isFromLogin ? "animation: fadein 1.5s ease-in-out;" : "")};

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
