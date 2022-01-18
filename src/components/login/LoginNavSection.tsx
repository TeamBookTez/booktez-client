import { useNavigate } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

import { NavHeader } from "../common";
import { Button } from "../common/styled/Button";

interface SignupNavProps {
  isAniTime: boolean;
  onAniChange: () => void;
}

export default function SignupNav(props: SignupNavProps) {
  const { isAniTime, onAniChange } = props;

  const nav = useNavigate();

  const handleGoSignupBtn = () => {
    onAniChange();
    setTimeout(() => nav("/signup", { state: "rightpath" }), 1000);
  };

  return (
    <StSection isAniTime={isAniTime}>
      <NavHeader logocolor={"#242424"} />
      <StArticle>
        <StH2>
          북스테어즈에 오신 걸<br />
          환영합니다아ㅏㅇ
        </StH2>
        <StH3>
          북테즈와 함께 똑또또칸 사람이 되어보아용
          <br />
          회원가입하시면~~~나만의 서~~
        </StH3>
        {/* <img src="#" alt="북테즈 이미지" /> */}
        <StTempImg>이미지 칸</StTempImg>
        <StSignupBtn type="button" onClick={handleGoSignupBtn}>
          회원가입
        </StSignupBtn>
      </StArticle>
    </StSection>
  );
}

const opentoleft = keyframes`
    0% {
      opacity: 1;
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      transform: translateX(-20em);
    }
`;

const StSection = styled.section<{ isAniTime: boolean }>`
  ${({ isAniTime }) =>
    isAniTime
      ? css`
          animation: ${opentoleft} 1s ease-in-out;
        `
      : ""};

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 48rem;

  background-color: ${({ theme }) => theme.colors.white500};
  border-radius: 0 2rem 2rem 0;
`;

const StArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StH2 = styled.h2`
  margin-bottom: 1.6rem;

  ${({ theme }) => theme.fonts.header0}
  text-align: center;
  color: ${({ theme }) => theme.colors.gray100};
`;

const StH3 = styled.h3`
  margin-bottom: 5.2rem;

  text-align: center;

  ${({ theme }) => theme.fonts.body2}
  color: ${({ theme }) => theme.colors.gray300};
`;

// 이미지 칸 임의의 css
const StTempImg = styled.div`
  width: 20.1rem;
  height: 17.7rem;

  margin-bottom: 5.2rem;

  background-color: white;
`;

const StSignupBtn = styled(Button)`
  width: 32.5rem;
  height: 5.6rem;

  border-radius: 1rem;

  ${({ theme }) => theme.fonts.button}
`;
