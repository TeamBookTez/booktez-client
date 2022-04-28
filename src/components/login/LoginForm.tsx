import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

import { EMAIL_REGEX, INVALID_PWD_CHAR_LIST } from "../../utils/check";
import { postData } from "../../utils/lib/api";
import { FormData } from "../bookNote/periNote/PeriNote";
import { AlertLabel } from "../common";
import { Button } from "../common/styled/Button";
import { PwdSightIcon } from ".";

interface ErrorResponse {
  status: number;
  message: string;
}

export default function LoginForm() {
  const [isPwdSight, setIsPwdSight] = useState<boolean>(false);
  const nav = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onChange",
  });

  const submitForm = async (loginFormData: FormData) => {
    try {
      const { data: data } = await postData("/auth/login", loginFormData);

      localStorage.setItem("booktez-token", data.token);
      localStorage.setItem("booktez-nickname", data.nickname);
      localStorage.setItem("booktez-email", data.email);

      nav("/main");
      // 메인에서 로그인 온 경우에는 메인으로,

      // 책 추가하다가 로그인 온 경우에는 책 추가 페이지로 Navigate
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const errorResponse: ErrorResponse = err.response?.data;
        const errorField = errorResponse.status === 400 ? "password" : errorResponse.status === 404 ? "email" : "";

        setError(errorField, {
          type: "server",
          message: errorResponse.message,
        });
      }
    }
  };

  const toggleSightPwd = (isSight: boolean) => {
    setIsPwdSight(isSight);
  };

  return (
    <StForm onSubmit={handleSubmit(submitForm)}>
      <StLabel htmlFor="loginEmail">이메일</StLabel>
      <StInputEmail
        {...register("email", {
          required: { value: true, message: "이메일을 입력해주세요." },
          pattern: {
            value: EMAIL_REGEX,
            message: "이메일 형식을 지켜주시기 바랍니다.",
          },
        })}
        placeholder="이메일을 입력해 주세요"
      />
      {errors.email?.message && <AlertLabel>{errors.email.message}</AlertLabel>}

      <StLabelPwd htmlFor="loginPwd">비밀번호</StLabelPwd>
      <StInputPwdWrapper>
        <StInputPwd
          {...register("password", {
            required: {
              value: true,
              message: "비밀번호를 입력해주세요.",
            },
            validate: (value: string) => {
              if (value.match(/[,"'`]/)) {
                const invalidChar = /[,"']/.exec(value);

                if (invalidChar !== null) {
                  return `${INVALID_PWD_CHAR_LIST[invalidChar[0]]}을 포함할 수 없습니다.`;
                }
              } else return true;
            },
            minLength: {
              value: 8,
              message: "비밀번호는 8자 이상 입력해주시기 바랍니다.",
            },
            maxLength: {
              value: 64,
              message: "비밀번호는 64자 이하 입력해주시기 바랍니다.",
            },
          })}
          placeholder="비밀번호를 입력해 주세요"
          type={isPwdSight ? "text" : "password"}
        />
        <PwdSightIcon isPwdSight={isPwdSight} onToggleSightPwd={toggleSightPwd} />
      </StInputPwdWrapper>
      {errors.password?.message && <AlertLabel>{errors.password.message}</AlertLabel>}

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

const StInputEmail = styled.input`
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
