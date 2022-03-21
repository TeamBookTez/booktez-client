import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

import { Error404, NavHeader } from "../components/common";
import theme from "../styles/theme";

export interface UserData {
  email: string;
  password: string;
  nickname: string;
}

export default function Signup() {
  const { state } = useLocation();

  const [userData, setUserData] = useState<UserData>({
    email: "",
    password: "",
    nickname: "",
  });

  return (
    <>
      {state === "rightpath" ? (
        <>
          <NavHeader logocolor={theme.colors.gray100} />
          <StMain>
            <StFormWrapper>
              <AnimatePresence exitBeforeEnter>
                <Outlet context={[userData, setUserData]} />
              </AnimatePresence>
            </StFormWrapper>
          </StMain>
        </>
      ) : (
        <Error404 />
      )}
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

const StFormWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StImage = styled.img`
  width: 24.1rem;
  height: 4.3rem;

  display: block;

  margin: 0 auto 5.8rem;
`;

export const StHeading2 = styled.h2`
  margin-bottom: 2.4rem;

  white-space: pre-wrap;
  text-align: center;
  ${({ theme }) => theme.fonts.header0}
`;

export const StParagraph = styled.p`
  margin-bottom: 5.2rem;

  text-align: center;

  ${({ theme }) => theme.fonts.body0}
`;
