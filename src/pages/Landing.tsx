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
import { isLoginState } from "../utils/atoms";
import { useCheckLoginState } from "../utils/useHooks";

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
          <LandingHeader />
          <StMain>
            <LandingOne />
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

const StMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 11.5rem;
`;
