import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

import { UserData } from "../../pages/Signup";
import { emailErrorPatterns, passwordErrorPatterns } from "../../utils/check";
import { login } from "../../utils/lib/api";
import { AlertLabel } from "../common";
import { Button } from "../common/styled/Button";
import { PwdSightIcon } from ".";

export default function LoginForm() {
  const [isPwdSight, setIsPwdSight] = useState<boolean>(false);
  const nav = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<UserData>({
    mode: "onSubmit",
  });

  const submitForm = async (loginFormData: UserData) => {
    const errorData = await login(loginFormData, setError);

    if (errorData === null) {
      nav("/main");
    }
  };

  const toggleSightPwd = (isSight: boolean) => {
    setIsPwdSight(isSight);
  };

  return (
    <StForm onSubmit={handleSubmit(submitForm)}>
      <StLabel htmlFor="loginEmail">이메일</StLabel>
      <StInputEmail {...register("email", emailErrorPatterns)} placeholder="이메일을 입력해 주세요" />
      {errors.email?.message && <AlertLabel message={errors.email.message} />}

      <StLabelPwd htmlFor="loginPwd">비밀번호</StLabelPwd>
      <StInputPwdWrapper>
        <StInputPwd
          {...register("password", passwordErrorPatterns)}
          placeholder="비밀번호를 입력해 주세요"
          type={isPwdSight ? "text" : "password"}
        />
        <PwdSightIcon isPwdSight={isPwdSight} onToggleSightPwd={toggleSightPwd} />
      </StInputPwdWrapper>
      {errors.password?.message && <AlertLabel message={errors.password.message} />}

      <StLoginBtn disabled={!isValid} type="submit">
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

const StLoginBtn = styled(Button)<{ disabled: boolean }>`
  width: 46.4rem;
  height: 5.6rem;

  margin-top: 5.6rem;

  border-radius: 1rem;

  ${({ theme }) => theme.fonts.button}

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${({ theme }) => theme.colors.white400}; // inactive
      color: ${({ theme }) => theme.colors.gray300}; // inactive

      &:hover {
        cursor: default;
      }
    `}
`;

// 아래 내용들 동일 - common/styled/input과 동일 - 중복 제거 필요
export const StInputEmail = styled.input`
  width: 100%;
  height: 5.4rem;
  padding-left: 2rem;

  background-color: ${({ theme }) => theme.colors.white200};

  border: 0.2rem solid ${({ theme }) => theme.colors.white200};
  border-radius: 1rem;

  ${({ theme }) => theme.fonts.body3}
  color: ${({ theme }) => theme.colors.gray100};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
  }
`;

const StInputPwdWrapper = styled.div`
  position: relative;
`;

const StInputPwd = styled.input`
  width: 100%;
  height: 5.4rem;
  padding-left: 2rem;

  background-color: ${({ theme }) => theme.colors.white200};

  border: 0.2rem solid ${({ theme }) => theme.colors.white200};
  border-radius: 1rem;

  ${({ theme }) => theme.fonts.body3}
  color: ${({ theme }) => theme.colors.gray100};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
  }
`;
