import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled, { css } from "styled-components";

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
import { isLoginState } from "../utils/atom";
import { useCheckLoginState } from "../utils/useHooks";

export default function Landing() {
  const navigate = useNavigate();
  const { isLogin, isLoginLoading } = useCheckLoginState();
  const setIsLogin = useSetRecoilState(isLoginState);

  const isMobileScreen = useMediaQuery({
    query: "(max-width: 414px)",
  });

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
          <LandingHeader isMobileScreen={isMobileScreen} />
          <StMain isMobileScreen={isMobileScreen}>
            <LandingOne isMobileScreen={isMobileScreen} />
            <LandingTwo />
            <LandingThree />
            <LandingFour />
            <LandingFive />
          </StMain>
          <LandingFooter />
        </>
      )}
    </>
  );
}

const StMain = styled.main<{ isMobileScreen: boolean }>`
  ${({ isMobileScreen }) =>
    isMobileScreen
      ? css`
          padding: 0;
        `
      : css`
          padding: 0 11.5rem;
        `}
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 32rem;
`;
