import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

import { postData } from "../../utils/lib/api";
import { FormData } from "../bookNote/periNote/PeriNote";
import { AlertLabel, InputEmail, InputPwd } from "../common";
import { Button } from "../common/styled/Button";

export default function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");

  const [isPwdSight, setIsPwdSight] = useState<boolean>(false);
  const nav = useNavigate();

  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const postLogin = async () => {
    // if (isEmailEmpty || isPwdEmpty) return;

    const loginBody = {
      email,
      password: pwd,
    };

    try {
      const res = await postData("/auth/login", loginBody);
      const resData = res.data.data;

      localStorage.setItem("booktez-token", resData.token);
      localStorage.setItem("booktez-nickname", resData.nickname);
      localStorage.setItem("booktez-email", resData.email);

      nav("/main");
      // 메인에서 로그인 온 경우에는 메인으로,

      // 책 추가하다가 로그인 온 경우에는 책 추가 페이지로 Navigate
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const status = err.response?.data.status;

        // if (status === 404) {
        //   setIsEmailError(true);
        // } else {
        //   setIsPwdError(true);
        // }
      }
    }
  };

  const submitForm = (data: FormData) => {
    console.log(data, errors);
    // postLogin();
  };

  const toggleSightPwd = () => {
    setIsPwdSight((isPwdSight) => !isPwdSight);
  };

  return (
    <StForm onSubmit={handleSubmit(submitForm)}>
      <StLabel htmlFor="loginEmail">이메일</StLabel>
      <StInputEmail
        {...register("email", {
          required: true,
          pattern: {
            value:
              /^(([^<>()\].,;:\s@"]+(\.[^<>()\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
            message: "이메일 형식을 지켜주시기 바랍니다.",
          },
        })}
        placeholder="이메일을 입력해 주세요"
      />
      {errors.email?.type === "required" && <AlertLabel isError={true}>이메일을 입력해주세요.</AlertLabel>}
      {errors.email?.type === "pattern" && errors.email.message && (
        <AlertLabel isError={true}>{errors.email.message}</AlertLabel>
      )}

      <StLabelPwd htmlFor="loginPwd">비밀번호</StLabelPwd>
      <StInputPwd
        {...register("password", {
          required: true,
          pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            // 이 부분 다시 확인 필요
            message: "비밀번호 형식이 잘못되었습니다.",
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
      />
      {/* {errors.password && <AlertLabel isError={true}>비밀번호가 일치하지 않습니다.</AlertLabel>} */}
      {errors.password?.type === "required" && <AlertLabel isError={true}>비밀번호를 입력해주세요.</AlertLabel>}
      {errors.password?.type === "minLength" && errors.password.message && (
        <AlertLabel isError={true}>{errors.password.message}</AlertLabel>
      )}
      {errors.password?.type === "pattern" && errors.password.message && (
        <AlertLabel isError={true}>{errors.password.message}</AlertLabel>
      )}

      <StLoginBtn active={true} type="submit">
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
