import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

import Loading from "../components/common/Loading";
import { LoginForm, LoginNavSection } from "../components/login";
import { getData } from "../utils/lib/api";

export default function Login() {
  const [isAniTime, setIsAniTime] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const tempToken = localStorage.getItem("booktez-token");
  const localToken = tempToken ? tempToken : "";

  const getLogin = async (key: string, token: string) => {
    try {
      const { data } = await getData(key, token);
      const status = data.status;

      if (status === 200) {
        if (data.data.isLogin === true) {
          return navigate("/main");
        }
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log("err", err.response?.data);
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getLogin("/auth/check", localToken);
  }, []);

  const handleAni = () => {
    setIsAniTime(true);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
}

// root에 flex?
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
