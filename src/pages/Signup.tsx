import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

import { IcSignupChecking } from "../assets/icons";
import { ImgSignupFirst } from "../assets/images";
import { FormData } from "../components/bookNote/periNote/PeriNote";
import { AlertLabel, Error404, NavHeader } from "../components/common";
import { Button } from "../components/common/styled/Button";
import { LabelHidden } from "../components/common/styled/LabelHidden";
import { StSignupHeading2, StSignupImage, StSignupParagraph } from "../components/common/styled/Signup";
import { StInputEmail } from "../components/login/LoginForm";
import theme from "../styles/theme";
import { errorPatterns } from "../utils/check";
import { getData } from "../utils/lib/api";

export interface UserData {
  [key: string]: string;
}

export default function Signup() {
  const { state } = useLocation();

  const [userData, setUserData] = useState<UserData>({
    email: "",
    password: "",
    nickname: "",
  });
  const [isAgreeCondition, setIsAgreeCondition] = useState<boolean>(false);
  const [isFilled, setIsFilled] = useState<boolean>(false);
  const [formDataKeyIndex, setFormDataKeyIndex] = useState<string>("email");
  const formDataKeyData: UserData = {
    email: "이메일",
    nickname: "닉네임",
    password: "비밀번호",
  };

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onSubmit",
  });

  const checkIsValid = async (index: string, key: string) => {
    const urlPath = `/auth/${index}?${index}=${key}`;
    let result = { isValid: false, message: "" };

    try {
      const { data } = await getData(urlPath);

      result = { isValid: data.data.isValid, message: data.message };
    } catch (err) {
      if (axios.isAxiosError(err)) {
        result = { ...result, message: err.response?.data.message };
      }
    }

    return result;
  };

  const checkIsFormErrors = (formDataValid: { isValid: boolean; message: string }) => {
    let errorState = { type: "server", message: "" };

    if (formDataKeyIndex === "email" && !isAgreeCondition) {
      errorState = {
        ...errorState,
        type: "agreeCondition",
        message: "개인정보 수집 및 이용 약관에 동의해주시기 바랍니다.",
      };
    } else if (!formDataValid.isValid) {
      errorState = { ...errorState, message: formDataValid.message };
    }

    if (errorState.message) {
      setError(formDataKeyIndex, errorState);

      return true;
    }

    return false;
  };

  const submitForm = async (loginFormData: FormData) => {
    const key = loginFormData[formDataKeyIndex];

    const formDataValid = await checkIsValid(formDataKeyIndex, key);

    const isError = checkIsFormErrors(formDataValid);

    if (!isError) {
      setUserData((current) => {
        const formData = { ...current };

        formData[key] = key;

        return formData;
      });

      setFormDataKeyIndex((current) => {
        if (current === "email") {
          return "nickname";
        } else if (current === "nickname") {
          return "password";
        }

        return "submit";
      });
    }
  };

  return (
    <>
      {state === "rightpath" ? (
        <>
          <NavHeader logocolor={theme.colors.gray100} />
          <StMain>
            <StFormWrapper>
              <StSignupImage src={ImgSignupFirst} alt="회원가입 첫 단계" />
              <StSignupHeading2>나만의 서재를 만드는 중이에요!</StSignupHeading2>
              <StSignupParagraph>당신의 {formDataKeyData[formDataKeyIndex]}을 입력해 주세요.</StSignupParagraph>

              <StForm onSubmit={handleSubmit(submitForm)}>
                <LabelHidden htmlFor={formDataKeyIndex}>{formDataKeyData[formDataKeyIndex]}</LabelHidden>
                <StInputEmail
                  {...register(formDataKeyIndex, errorPatterns[formDataKeyIndex])}
                  placeholder={`${formDataKeyData[formDataKeyIndex]}을 입력해 주세요`}
                  onChange={(e) => {
                    if (e.target.value !== "") setIsFilled(true);
                    else setIsFilled(false);
                  }}
                />
                {formDataKeyIndex === "password" && (
                  <StInputEmail
                    {...register("password2", errorPatterns.password)}
                    placeholder="비밀번호를 확인해 주세요"
                  />
                )}
                {errors[formDataKeyIndex]?.message && <AlertLabel message={errors[formDataKeyIndex].message} />}

                {formDataKeyIndex === "email" && (
                  <StAgreeConditionBox htmlFor="signupAgree" onClick={() => setIsAgreeCondition((prev) => !prev)}>
                    <StIcSignupChecking isagree={isAgreeCondition} />
                    <p>개인정보 수집 및 이용 약관에 동의합니다.</p>
                  </StAgreeConditionBox>
                )}

                <StNextStepBtn disabled={!isAgreeCondition && !isFilled} type="submit">
                  다음 계단
                </StNextStepBtn>
              </StForm>
            </StFormWrapper>
          </StMain>
        </>
      ) : (
        <Error404 />
      )}
    </>
  );
}

const StMain = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StFormWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StAgreeConditionBox = styled.label`
  width: 100%;
  height: 2.1rem;

  display: flex;
  align-items: center;

  margin: 1.7rem 0 0 0;

  ${({ theme }) => theme.fonts.body6}
`;

const StIcSignupChecking = styled(IcSignupChecking)<{ isagree: boolean }>`
  margin-right: 0.2rem;

  fill: ${({ theme, isagree }) => (isagree ? theme.colors.orange100 : theme.colors.white400)};
`;

const StNextStepBtn = styled(Button)<{ disabled: boolean }>`
  width: 46.4rem;
  height: 5.4rem;

  margin-top: 3.9rem;

  border-radius: 1rem;

  ${({ theme }) => theme.fonts.button}

  ${({ disabled, theme }) =>
    disabled &&
    css`
      background-color: ${theme.colors.white400};
      color: ${theme.colors.gray300};
      &:hover {
        cursor: default;
      }
    `}
`;
