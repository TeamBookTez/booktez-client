import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { NavHeader } from "../components/common";
import FirstStep from "../components/signup/FirstStep";
import LastStep from "../components/signup/LastStep";
import SecondStep from "../components/signup/SecondStep";
import ThirdStep from "../components/signup/ThirdStep";

export default function Signup() {
  const { state } = useLocation();

  return (
    <>
      <NavHeader logocolor="#242424" />
      <StMain isFromLogin={state === "fromlogin"}>
        <FirstStep />
        {/* <SecondStep /> */}
        {/* <ThirdStep /> */}
        {/* <LastStep /> */}
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
