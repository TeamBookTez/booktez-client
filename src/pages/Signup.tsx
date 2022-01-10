import styled from "styled-components";

import { NavHeader } from "../components/common";
import FirstStep from "../components/signup/FirstStep";
import LastStep from "../components/signup/LastStep";
import SecondStep from "../components/signup/SecondStep";
import ThirdStep from "../components/signup/ThirdStep";

export default function Signup() {
  return (
    <>
      <NavHeader logocolor="#242424" />
      <StMain>
        <FirstStep />
        {/* <SecondStep /> */}
        {/* <ThirdStep /> */}
        {/* <LastStep /> */}
      </StMain>
    </>
  );
}

const StMain = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
