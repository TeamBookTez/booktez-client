import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";

import {
  LandingFive,
  LandingFooter,
  LandingFour,
  LandingHeader,
  LandingOne,
  LandingThree,
  LandingTwo,
} from "../components/landing";
import { isLoginSelector, isLoginState } from "../utils/atoms";

export default function Landing() {
  const navigate = useNavigate();
  const isLoginFromSelector = useRecoilValue(isLoginSelector);
  const setIsLogin = useSetRecoilState(isLoginState);

  const tempToken = localStorage.getItem("booktez-token");
  const localToken = tempToken ? tempToken : "";

  useEffect(() => {
    if (isLoginFromSelector) {
      setIsLogin(true);
      navigate("/main");
    } else {
      setIsLogin(false);
    }
  }, []);

  return (
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
  );
}

const StMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 11.5rem;
`;
