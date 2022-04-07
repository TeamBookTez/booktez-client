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
