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
  MobileLandingFive,
  MobileLandingFooter,
  MobileLandingFour,
  MobileLandingHeader,
  MobileLandingOne,
  MobileLandingThree,
  MobileLandingTwo,
} from "../components/landing";
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
            <MobileLandingOne />
            <MobileLandingTwo />
            <MobileLandingThree />
            <MobileLandingFour />
            <MobileLandingFive />
            <MobileLandingFooter />
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

export const StMobileMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 32rem;
  max-width: 41.4rem;

  margin: 0 auto;
`;

const StMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 11.5rem;
`;
