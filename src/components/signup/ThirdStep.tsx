import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styled from "styled-components";

import { AlertLabel, Button, Input, InputPwd, LabelHidden } from "../common";

export default function ThirdStep() {
  const [handleIsAniTime] = useOutletContext<[(isActive: boolean) => void]>();
  const [isPwdEmpty, setIsPwdEmpty] = useState<boolean>(true);
  const [isPwdReEmpty, setIsPwdReEmpty] = useState<boolean>(true);
  const [isPwdError, setIsPwdError] = useState<boolean>(false);
  const [isPwdReError, setIsPwdReError] = useState<boolean>(false);
  const [isPwdSight, setIsPwdSight] = useState<boolean>(false);
  const [isPwdReSight, setIsPwdReSight] = useState<boolean>(false);
  const nav = useNavigate();
  const tempEmail = "bookstairs@sopt.com";

  useEffect(() => {
    handleIsAniTime(false);
  }, []);

  const goNextStep = () => {
    handleIsAniTime(true);
    setTimeout(() => nav("/signup/4", { state: "ani" }), 1000);
  };

  const checkIsPwdEmpty = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPwdEmpty(e.target.value === "");
  };
  const checkIsPwdReEmpty = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPwdReEmpty(e.target.value === "");
  };

  const checkIsPwdError = () => {
    setIsPwdError(true);
  };
  const checkIsPwdReError = () => {
    setIsPwdReError(true);
  };

  const toggleSightPwd = () => {
    setIsPwdSight((isPwdSight) => !isPwdSight);
  };
  const toggleSightRePwd = () => {
    setIsPwdReSight((isPwdSight) => !isPwdSight);
  };

  return (
    <>
      <StParagraph>비밀번호를 설정해 주세요.</StParagraph>
      <StFormWrapper>
        <StEmailFixed>{tempEmail}</StEmailFixed>

        <LabelHidden htmlFor="signupPwd">비밀번호</LabelHidden>
        <StInputPwdWrapper>
          <InputPwd
            whatPlaceholder="영문, 숫자, 특수문자를 조합해 8자 이상 입력해 주세요"
            whatType={isPwdSight ? "text" : "password"}
            whatId="signupPwd"
            isEmpty={isPwdEmpty}
            isError={isPwdError}
            isPwdSight={isPwdSight}
            checkIsEmpty={checkIsPwdEmpty}
            toggleSightPwd={toggleSightPwd}
          />
        </StInputPwdWrapper>
        <AlertLabel isError={isPwdError}>비밀번호 형식 에러</AlertLabel>

        <LabelHidden htmlFor="signupPwdRe">비밀번호 확인</LabelHidden>
        <StInputPwdReWrapper>
          <InputPwd
            whatPlaceholder="비밀번호를 확인해 주세요"
            whatType={isPwdReSight ? "text" : "password"}
            whatId="signupPwdRe"
            isEmpty={isPwdReEmpty}
            isError={isPwdReError}
            isPwdSight={isPwdReSight}
            checkIsEmpty={checkIsPwdReEmpty}
            toggleSightPwd={toggleSightRePwd}
          />
        </StInputPwdReWrapper>
        <AlertLabel isError={isPwdReError}>비밀번호가 다릅니다.</AlertLabel>
        <StNextStepBtn type="button" onClick={goNextStep}>
          다음 계단
        </StNextStepBtn>
      </StFormWrapper>
    </>
  );
}

const StParagraph = styled.p`
  margin-bottom: 5.2rem;
  /* 임의 폰트 */
  font-size: 2rem;
`;

const StFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > input:first-child {
    background-color: ${({ theme }) => theme.colors.white400};
    color: ${({ theme }) => theme.colors.gray300};
    font-weight: 400;
  }

  & > input:first-child::placeholder {
    color: ${({ theme }) => theme.colors.gray300};
    font-weight: 400;
  }
`;

const StEmailFixed = styled.article`
  display: flex;
  align-items: center;

  width: 100%;
  height: 5.4rem;
  padding-left: 2rem;

  background-color: ${({ theme }) => theme.colors.white400};

  border: 0.2rem solid ${({ theme }) => theme.colors.white400};
  border-radius: 1rem;

  /* 폰트 설정 */
  font-size: 1.8rem;
  letter-spacing: -0.01rem;
  color: ${({ theme }) => theme.colors.gray100};
`;

const StInputPwdWrapper = styled.div`
  width: 100%;

  margin-top: 5.2rem;
`;
const StInputPwdReWrapper = styled.div`
  width: 100%;

  margin-top: 2.4rem;
`;

const StNextStepBtn = styled(Button)`
  width: 46.4rem;
  height: 5.4rem;
  background-color: ${({ theme }) => theme.colors.white400};
  border-radius: 1rem;
  margin-top: 7.2rem;

  border-radius: 1rem;
`;
