import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { NavHeader } from "../common";

interface SignupNav {
  isAni: boolean;
  onAniChange: () => void;
}

export default function SignupNav(props: SignupNav) {
  const { isAni, onAniChange } = props;

  const nav = useNavigate();

  const handleGoSignupBtn = () => {
    onAniChange();
    setTimeout(() => nav("/signup", { state: "ani" }), 1000);
  };

  return (
    <StSection isAni={isAni}>
      <NavHeader isCommon={false} />
      <StArticle>
        <StH2>북스테어즈에 오신 걸 환영합니다아ㅏㅇ</StH2>
        <StH3>
          북테즈와 함께 똑또또칸 사람이 되어보아용
          <br />
          회원가입하시면~~~나만의 서~~
        </StH3>
        {/* <img src="#" alt="북테즈 이미지" /> */}
        <StTempImg>이미지 칸</StTempImg>
        <StGoSignupBtn type="button" onClick={handleGoSignupBtn}>
          회원가입
        </StGoSignupBtn>
      </StArticle>
    </StSection>
  );
}

const StSection = styled.section<{ isAni: boolean }>`
  ${({ isAni }) => (isAni ? "animation: opentoleft 1s ease-in-out;" : "")};

  @keyframes opentoleft {
    0% {
      opacity: 1;
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      transform: translateX(-20em);
    }
  }
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 480px; // 임의 px

  background-color: ${({ theme }) => theme.colors.white500};
`;

const StArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StH2 = styled.h2`
  margin-bottom: 1.6rem;

  text-align: center;

  // 글꼴 설정
  width: 23.7rem;
  font-size: 3rem;
  font-weight: 800;
  line-height: 130%;
  letter-spacing: -0.1rem;
  color: ${({ theme }) => theme.colors.gray100};
`;

const StH3 = styled.h3`
  margin-bottom: 5.2rem;

  text-align: center;

  // 글꼴 설정
  width: 29.4rem;
  font-size: 1.8rem;
  line-height: 130%;
  letter-spacing: -0.1rem;
  color: ${({ theme }) => theme.colors.gray300};
`;

// 이미지 칸 임의의 css
const StTempImg = styled.div`
  width: 20.1rem;
  height: 17.7rem;

  margin-bottom: 5.2rem;

  background-color: white;
`;

const StGoSignupBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32.5rem;
  height: 5.6rem;

  background-color: ${({ theme }) => theme.colors.orange100};
  border-radius: 1rem;

  // 글꼴 설정
  font-size: 1.8rem;
  letter-spacing: -0.1rem;
  color: ${({ theme }) => theme.colors.white};
`;
