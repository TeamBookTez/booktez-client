import styled from "styled-components";

import { Logo } from "../assets/imgs";
import FirstStep from "../components/signup/FirstStep";
import LastStep from "../components/signup/LastStep";
import SecondStep from "../components/signup/SecondStep";
import ThirdStep from "../components/signup/ThirdStep";

export default function Signup() {
  return (
    <>
      <StHeader>
        <a>
          <img src={Logo} alt="홈페이지 로고 입니다. 클릭시 메인 페이지로 이동합니다" />
          <p>북스테어즈</p>
        </a>
      </StHeader>
      <StMain>
        {/* <FirstStep /> */}
        {/* <SecondStep /> */}
        <ThirdStep />
        {/* <LastStep /> */}
      </StMain>
    </>
  );
}

const StHeader = styled.header`
  position: absolute;
  height: 9rem;
  display: flex;
  align-items: center;

  & > a {
    height: 3.6rem;
    margin-left: 2rem;

    align-items: center;
    display: flex;
  }

  & > a:hover {
    cursor: pointer;
  }

  & > a > img {
    height: 100%;
    width: auto;
    margin-right: 0.8rem;
  }

  & > a > p {
    text-align: center;

    /* 임의글꼴 */
    font-weight: 600;
    font-size: 1.6rem;
    text-align: center;
  }
`;

const StMain = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
