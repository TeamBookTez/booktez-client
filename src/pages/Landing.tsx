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
import { getData } from "../utils/lib/api";

export default function Landing() {
  const navigate = useNavigate();
  const tempToken = localStorage.getItem("booktez-token");
  const localToken = tempToken ? tempToken : "";
  const isLogin = useRecoilValue(isLoginSelector);

  const getLogin = async (key: string, token: string) => {
    try {
      const { data } = await getData(key, token);

      console.log(key, token);
      const status = data.status;

      if (status === 200) {
        if (data.data.isLogin === true) {
          return navigate("/main");
        }
      }
    } catch (err) {
      return;
    }
  };

  useEffect(() => {
    // getLogin("/auth/check", localToken);
    console.log(isLogin);
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
