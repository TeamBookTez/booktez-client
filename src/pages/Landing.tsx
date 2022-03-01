import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";

import { Loading } from "../components/common";
import {
  LandingFive,
  LandingFooter,
  LandingFour,
  LandingHeader,
  LandingOne,
  LandingThree,
  LandingTwo,
} from "../components/landing";
import MobileLandingHeader from "../components/landing/MobileLandingHeader";
import { isLoginState } from "../utils/atom";
import { useCheckLoginState } from "../utils/useHooks";
import { Desktop, Mobile } from "../utils/useMediaQuery";

export default function Landing() {
  const navigate = useNavigate();
  const { isLogin, isLoginLoading } = useCheckLoginState();
  const setIsLogin = useSetRecoilState(isLoginState);

  useEffect(() => {
    if (isLogin) {
      setIsLogin(true);
      navigate("/main");
    } else {
      setIsLogin(false);
    }
  }, [isLogin]);

  return (
    <>
      {isLoginLoading ? (
        <Loading />
      ) : (
        <>
          <Mobile>
            <MobileLandingHeader />
            <StMobileMain></StMobileMain>
          </Mobile>
          <Desktop>
            <LandingHeader />
            <StMain>
              <LandingOne />
              <LandingTwo />
              <LandingThree />
              <LandingFour />
              <LandingFive />
            </StMain>
            <LandingFooter />
          </Desktop>
        </>
      )}
    </>
  );
}

const StMobileMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 32rem;

  margin: 0 auto;
`;

const StMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 11.5rem;
`;
