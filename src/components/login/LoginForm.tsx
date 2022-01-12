import { useState } from "react";
import styled, { css } from "styled-components";

import { IcNoSight, IcSight } from "../../assets/icons";
import { AlertLabel, Button, Input } from "../common";

interface InputEmailProps {
  isEmailEmpty: boolean;
  isEmailError: boolean;
}

interface InputPwdProps {
  isPwdEmpty: boolean;
  isPwdError: boolean;
}

export default function LoginForm() {
  const [isEmailEmpty, setIsEmailEmpty] = useState<boolean>(true);
  const [isPwdEmpty, setIsPwdEmpty] = useState<boolean>(true);
  const [isEmailError, setIsEmailError] = useState<boolean>(true);
  const [isPwdError, setIsPwdError] = useState<boolean>(true);
  const [sightPwd, setSightPwd] = useState<boolean>(false);

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
    setSightPwd((sightPwd) => !sightPwd);
  };

  return (
    <StForm>
      <StLabel htmlFor="loginEmail">이메일</StLabel>
      <StInputEmail
        placeholder="이메일을 입력해 주세요"
        type="text"
        id="loginEmail"
        isEmailEmpty={isEmailEmpty}
        isEmailError={isEmailError}
        onChange={checkIsEmailEmpty}
      />
      <AlertLabel isError={isEmailError}>이멜 에러 경고 표시</AlertLabel>
      <StLabelPwd htmlFor="loginPwd">비밀번호</StLabelPwd>
      <StPwdWrapper>
        <StInputPwd
          placeholder="비밀번호를 입력해 주세요"
          type="password"
          id="loginPwd"
          isPwdEmpty={isPwdEmpty}
          isPwdError={isPwdError}
          onChange={checkIsPwdEmpty}
        />
        {sightPwd ? <StIcSight onClick={toggleSightPwd} /> : <StIcNoSight onClick={toggleSightPwd} />}
      </StPwdWrapper>
      <StLoginBtn>로그인</StLoginBtn>
      <AlertLabel isError={isPwdError}>비번 에러 경고 표시</AlertLabel>
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

  // 글꼴 설정
  font-size: 1.8rem;
  line-height: 130%;
  letter-spacing: -0.1rem;
`;

const StInputEmail = styled(Input)<InputEmailProps>`
  ${({ isEmailEmpty }) =>
    isEmailEmpty
      ? ""
      : css`
          border-color: ${({ theme }) => theme.colors.gray200};
        `};
  ${({ isEmailError }) =>
    isEmailError
      ? css`
          border-color: ${({ theme }) => theme.colors.red100};
        `
      : ""};
`;

const StLabelPwd = styled(StLabel)`
  margin: 3.2rem 0 1.2rem;
`;

const StInputPwd = styled(Input)<InputPwdProps>`
  ${({ isPwdEmpty }) =>
    isPwdEmpty
      ? ""
      : css`
          border-color: ${({ theme }) => theme.colors.gray200};
        `};
  ${({ isPwdError }) =>
    isPwdError
      ? css`
          border-color: ${({ theme }) => theme.colors.red100};
        `
      : ""};
  /* letter-spacing: 0.15rem; */
`;

const StPwdWrapper = styled.div`
  position: relative;
`;

const StIcNoSight = styled(IcNoSight)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  &:hover {
    cursor: pointer;
  }
`;

const StIcSight = styled(IcSight)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  &:hover {
    cursor: pointer;
  }
`;

const StLoginBtn = styled(Button)`
  width: 46.4rem;
  height: 5.6rem;

  margin-top: 2rem;

  border-radius: 1rem;

  // background 색상은 active 여부에 따라 변경하면 됨.
`;
