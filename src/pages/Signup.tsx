import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { ImgLogo } from "../assets/images";
import FirstStep from "../components/signup/FirstStep";
import LastStep from "../components/signup/LastStep";
import SecondStep from "../components/signup/SecondStep";
import ThirdStep from "../components/signup/ThirdStep";

export default function Signup() {
  const { state } = useLocation();

  return (
    <>
      <StHeader>
        <a>
          <img src={ImgLogo} alt="홈페이지 로고 입니다. 클릭시 메인 페이지로 이동합니다" />
          <p>북스테어즈</p>
        </a>
      </StHeader>
      <StMain isFromLogin={state === "ani"}>
        <FirstStep />
        {/* <SecondStep /> */}
        {/* <ThirdStep /> */}
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
