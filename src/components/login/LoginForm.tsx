import { useState } from "react";
import styled, { css } from "styled-components";

import { IcNoSight, IcSight } from "../../assets/icons";
import { AlertLabel } from "../common";

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
      <StLabel>이메일</StLabel>
      <StInputEmail
        placeholder="이메일을 입력해 주세요"
        type="text"
        isEmailEmpty={isEmailEmpty}
        isEmailError={isEmailError}
        onChange={checkIsEmailEmpty}
      />
      <AlertLabel isError={isEmailError}>이멜 에러 경고 표시</AlertLabel>
      <StLabelPwd>비밀번호</StLabelPwd>
      <StPwdWrapper>
        <StInputPwd
          placeholder="비밀번호를 입력해 주세요"
          type="password"
          isPwdEmpty={isPwdEmpty}
          isPwdError={isPwdError}
          onChange={checkIsPwdEmpty}
        />
        {sightPwd ? <StIcSight onClick={toggleSightPwd} /> : <StIcNoSight onClick={toggleSightPwd} />}
      </StPwdWrapper>
      <AlertLabel isError={isPwdError}>비번 에러 경고 표시</AlertLabel>
      <StBtn>로그인</StBtn>
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

const StInputEmail = styled.input<InputEmailProps>`
  width: 100%;
  height: 5.4rem;
  padding-left: 2rem;

  background-color: ${({ theme }) => theme.colors.white200};

  border: 0.2rem solid ${({ theme }) => theme.colors.white200};
  border-radius: 1rem;

  font-size: 1.8rem;
  letter-spacing: -0.01rem;
  color: ${({ theme }) => theme.colors.gray100};

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

const StInputPwd = styled.input<InputPwdProps>`
  /* 여기부터 */
  width: 100%;
  height: 5.4rem;
  padding-left: 2rem;

  background-color: ${({ theme }) => theme.colors.white200};

  border: 0.2rem solid ${({ theme }) => theme.colors.white200};
  border-radius: 1rem;

  font-size: 1.8rem;
  letter-spacing: -0.01rem;
  color: ${({ theme }) => theme.colors.gray100};
  /* 여기까지 StInputEmail 과 중복 */

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

const StBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 5.6rem;
  margin-top: 5.2rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.orange100};

  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.white};
`;
