import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
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
import { isLoginSelector } from "../utils/atoms";

export default function Landing() {
  const navigate = useNavigate();
  const tempToken = localStorage.getItem("booktez-token");
  const localToken = tempToken ? tempToken : "";
  const isLogin = useRecoilValue(isLoginSelector);

  useEffect(() => {
    if (isLogin) navigate("/main");
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
