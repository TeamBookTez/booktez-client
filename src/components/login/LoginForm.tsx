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
  const [isEmailEmpty, setIsEmailEmpty] = useState<boolean>(true);
  const [isPwdEmpty, setIsPwdEmpty] = useState<boolean>(true);
  const [isEmailError, setIsEmailError] = useState<boolean>(false);
  const [isPwdError, setIsPwdError] = useState<boolean>(false);
  const [isPwdSight, setIsPwdSight] = useState<boolean>(false);
  const nav = useNavigate();

  const { getValues, register, formState: { errors } } = useForm<FormData>();

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

        if (status === 404) {
          setIsEmailError(true);
        } else {
          setIsPwdError(true);
        }
      }
    }
  };

  const handleOnChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value;

    setIsEmailError(false);
    setIsEmailEmpty(targetValue === "");
    setEmail(targetValue);
  };

  const handleOnChangePwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value;

    setIsPwdError(false);
    setIsPwdEmpty(targetValue === "");
    setPwd(targetValue);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postLogin();
  };

  const toggleSightPwd = () => {
    setIsPwdSight((isPwdSight) => !isPwdSight);
  };

  return (
    <StForm onSubmit={handleSubmit}>

      <StLabel htmlFor="loginEmail">이메일</StLabel>
      <StInputEmail {...register("email", {
        required: true,
        pattern: /^(([^<>()\].,;:\s@"]+(\.[^<>()\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
      })} placeholder="이메일을 입력해 주세요" />
      {errors.email && <AlertLabel isError={true}>존재하지 않는 이메일 입니다.</AlertLabel>}

      <StLabelPwd htmlFor="loginPwd">비밀번호</StLabelPwd>
      <StInputPwd {...register("password", {
        required: true,
        pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      })} placeholder="비밀번호를 입력해 주세요" />
      {errors.password && <AlertLabel isError={true}>비밀번호가 일치하지 않습니다.</AlertLabel>}

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

const StLoginBtn = styled(Button) <{ active: boolean }>`
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
