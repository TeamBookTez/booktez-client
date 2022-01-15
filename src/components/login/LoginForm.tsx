import { useState } from "react";
import styled, { css } from "styled-components";

import { AlertLabel, Button, InputEmail, InputPwd } from "../common";

export default function LoginForm() {
  const [isEmailEmpty, setIsEmailEmpty] = useState<boolean>(true);
  const [isPwdEmpty, setIsPwdEmpty] = useState<boolean>(true);
  const [isEmailError, setIsEmailError] = useState<boolean>(false);
  const [isPwdError, setIsPwdError] = useState<boolean>(false);
  const [isPwdSight, setIsPwdSight] = useState<boolean>(false);

  const checkIsEmailEmpty = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsEmailEmpty(e.target.value === "");
  };

  const checkIsPwdEmpty = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPwdEmpty(e.target.value === "");
  };

  const checkIsEmailError = () => {
    setIsEmailError(true);
  };

  const checkIsPwdError = () => {
    setIsPwdError(true);
  };

  const toggleSightPwd = () => {
    setIsPwdSight((isPwdSight) => !isPwdSight);
  };

  const handleLogin = () => {
    if (isEmailEmpty || isPwdEmpty || isEmailError || isPwdError) return;
    // 로그인 기능 구현 부분
    // 메인에서 로그인 온 경우에는 메인으로,
    // 책 추가하다가 로그인 온 경우에는 책 추가 페이지로 Navigate
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <StForm onSubmit={handleSubmit}>
      <StLabel htmlFor="loginEmail">이메일</StLabel>
      <InputEmail
        whatPlaceholder="이메일을 입력해 주세요"
        whatType="text"
        whatId="loginEmail"
        isEmpty={isEmailEmpty}
        isError={isEmailError}
        checkIsEmpty={checkIsEmailEmpty}
      />
      <AlertLabel isError={isEmailError}>이멜 에러 경고 표시</AlertLabel>
      <StLabelPwd htmlFor="loginPwd">비밀번호</StLabelPwd>
      <InputPwd
        whatPlaceholder="비밀번호를 입력해 주세요"
        whatType={isPwdSight ? "text" : "password"}
        whatId="loginPwd"
        isEmpty={isPwdEmpty}
        isError={isPwdError}
        isPwdSight={isPwdSight}
        toggleSightPwd={toggleSightPwd}
        handleOnChange={checkIsPwdEmpty}
      />
      <AlertLabel isError={isPwdError}>비번 에러 경고 표시</AlertLabel>
      <StLoginBtn active={!isEmailEmpty && !isPwdEmpty && !isEmailError && !isPwdError} onClick={handleLogin}>
        로그인
      </StLoginBtn>
    </StForm>
  );
}

const StForm = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

const StLabel = styled.label`
  margin-bottom: 1.8rem;

  ${({ theme }) => theme.fonts.body1}
`;

const StLabelPwd = styled(StLabel)`
  margin: 3.2rem 0 1.2rem;
`;

const StLoginBtn = styled(Button)<{ active: boolean }>`
  width: 46.4rem;
  height: 5.6rem;

  margin-top: 5.6rem;

  border-radius: 1rem;

  ${({ theme }) => theme.fonts.button}

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
