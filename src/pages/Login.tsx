import { useState } from "react";
import styled from "styled-components";

import LoginForm from "../components/login/LoginForm";
import SignupNav from "../components/login/LoginNavSection";

export default function Login() {
  const [isAni, setIsAni] = useState(false);

  const handleAni = () => {
    setIsAni(true);
  };

  return (
    <StPageWrapper>
      <SignupNav isAni={isAni} onAniChange={handleAni} />
      <StMainWrapper isAni={isAni}>
        <StArticle>
          <StH2>북스테어즈 로그인</StH2>
          <StH3>북테에 로그인 ~~~ 더 아랓난 독서법 ~~~ 즐기세요롱 오유유</StH3>
          <LoginForm />
          <StContact>
            이메일/비밀번호를 잊어버리셨나요?
            <br />
            여기로 문의주세요.
          </StContact>
        </StArticle>
      </StMainWrapper>
    </StPageWrapper>
  );
}

// root에 flex?
const StPageWrapper = styled.div`
  height: 100vh;
  display: flex;
`;

const StMainWrapper = styled.main<{ isAni: boolean }>`
  width: 960px; //임의 px

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ isAni }) => (isAni ? "animation: opentoright 1s ease-in-out;" : "")};
  @keyframes opentoright {
    0% {
      opacity: 1;
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      transform: translateX(20em);
    }
  }
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

  // 글꼴 설정
  font-size: 3rem;
  font-weight: 800;
  line-height: 130%;
  letter-spacing: -0.1rem;
  color: ${({ theme }) => theme.colors.gray100};
`;

const StH3 = styled.h3`
  width: 33rem;
  margin-bottom: 5.2rem;

  text-align: center;

  // 글꼴 설정
  font-size: 1.8rem;
  line-height: 130%;
  letter-spacing: -0.1rem;
  color: ${({ theme }) => theme.colors.gray300};
`;

const StContact = styled.p`
  margin-top: 1.7rem;

  text-align: center;

  // 글꼴 설정
  font-size: 1.6rem;
  line-height: 130%;
  letter-spacing: -0.1rem;
  color: ${({ theme }) => theme.colors.gray100};
`;
