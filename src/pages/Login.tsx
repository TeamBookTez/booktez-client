import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled, { css, keyframes } from "styled-components";

import { Loading } from "../components/common";
import { LoginForm, LoginNavSection } from "../components/login";
import { isLoginState } from "../utils/atoms";
import { useCheckLoginState } from "../utils/useHooks";

export default function Login() {
  const [isAniTime, setIsAniTime] = useState<boolean>(false);
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

  const handleAni = () => {
    setIsAniTime(true);
  };

  return (
    <>
      {isLoginLoading ? (
        <Loading />
      ) : (
        <>
          <StPageWrapper>
            <LoginNavSection isAniTime={isAniTime} onAniChange={handleAni} />
            <StMainWrapper isAniTime={isAniTime}>
              <StArticle>
                <StH2>이미 서재가 있으신가요?</StH2>
                <StH3>
                  북스테어즈에 로그인하고
                  <br />
                  서재에서 독서를 이어가세요.
                </StH3>
                <LoginForm />
                <StContact>이메일/비밀번호를 잊어버리셨다면?</StContact>
              </StArticle>
            </StMainWrapper>
          </StPageWrapper>
        </>
      )}
    </>
  );
}

const StPageWrapper = styled.div`
  height: 100vh;
  display: flex;
`;

const opentoright = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(20em);
  }

`;

const StMainWrapper = styled.main<{ isAniTime: boolean }>`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ isAniTime }) =>
    isAniTime
      ? css`
          animation: ${opentoright} 1s ease-in-out;
        `
      : ""};
`;

const StArticle = styled.article`
  width: 46.4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StH2 = styled.h2`
  margin-bottom: 1.8rem;

  text-align: center;

  ${({ theme }) => theme.fonts.header0}
  color: ${({ theme }) => theme.colors.gray100};
`;

const StH3 = styled.h3`
  margin-bottom: 5.2rem;

  text-align: center;

  ${({ theme }) => theme.fonts.body2}
  color: ${({ theme }) => theme.colors.gray300};
`;

const StContact = styled.p`
  margin-top: 1.7rem;

  text-align: center;

  ${({ theme }) => theme.fonts.body6}
  color: ${({ theme }) => theme.colors.gray100};
`;
