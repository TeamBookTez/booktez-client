import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styled, { css } from "styled-components";

import { AlertLabel, Button, InputEmail, LabelHidden } from "../common";

export default function FirstStep() {
  const [handleIsAniTime] = useOutletContext<[(isActive: boolean) => void]>();
  const [isEmailEmpty, setIsEmailEmpty] = useState<boolean>(true);
  const [isEmailError, setIsEmailError] = useState<boolean>(false);
  const nav = useNavigate();

  useEffect(() => {
    handleIsAniTime(false);
  }, []);

  const goNextStep = () => {
    if (isEmailEmpty || isEmailError) return;

    handleIsAniTime(true);
    setTimeout(() => nav("/signup/2", { state: "ani" }), 1000);
  };

  const checkIsEmailEmpty = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsEmailEmpty(e.target.value === "");
  };

  const checkIsEmailError = () => {
    setIsEmailError(true);
  };

  return (
    <>
      <StParagraph>당신의 이메일을 입력해 주세요.</StParagraph>
      <StFormWrapper>
        <LabelHidden htmlFor="signupEmail">이메일</LabelHidden>
        <InputEmail
          whatPlaceholder="이메일을 입력해 주세요"
          whatType="text"
          whatId="signupEmail"
          isEmpty={isEmailEmpty}
          isError={isEmailError}
          checkIsEmpty={checkIsEmailEmpty}
        />
        <AlertLabel isError={isEmailError}>올바른 형식이 아닙니다.</AlertLabel>
        <StNextStepBtn type="button" active={!isEmailEmpty && !isEmailError} onClick={goNextStep}>
          다음 계단
        </StNextStepBtn>
      </StFormWrapper>
    </>
  );
}

const StParagraph = styled.p`
  margin-bottom: 5.2rem;
  /* 임의 폰트 */
  font-size: 2rem;W
`;

const StFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StNextStepBtn = styled(Button)<{ active: boolean }>`
  width: 46.4rem;
  height: 5.4rem;

  margin-top: 5rem;

  border-radius: 1rem;

  ${({ active }) =>
    active
      ? ""
      : css`
          background-color: ${({ theme }) => theme.colors.white400}; // inactive
          color: ${({ theme }) => theme.colors.gray300}; // inactive
          &:hover {
            cursor: default;
          }
        `}
`;
