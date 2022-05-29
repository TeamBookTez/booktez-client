/*
마지막 편집자: 22-05-29 soryeongk
변경사항 및 참고:
  - 회원가입 폼을 useForm으로 운영하는 것으로 변경했습니다.
  - 중복되는 코드와 파일이 너무 많아서 컴포넌트만 변경되는 방식으로 변경했습니다.
    
고민점:
  - 마운트 애니메이션을 레이아웃으로 빼볼까?
*/
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { ImgSignupFirst } from "../assets/images";
import { FormData } from "../components/bookNote/periNote/PeriNote";
import { Error404, NavHeader } from "../components/common";
import { StSignupHeading2, StSignupImage, StSignupParagraph } from "../components/common/styled/Signup";
import { SignupForm } from "../components/signup";
import theme from "../styles/theme";
import { getData, login, postData } from "../utils/lib/api";

export interface UserData {
  [x: string]: string;
}

export default function Signup() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [userData, setUserData] = useState<UserData>({
    email: "",
    password: "",
    nickname: "",
  });
  const [isAgreeCondition, setIsAgreeCondition] = useState<boolean>(false);
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
    setValue,
    formState: { errors, isDirty },
  } = useForm<UserData>({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
      nickname: "",
    },
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

  const autoLogin = async (key: string) => {
    try {
      const res = await postData("/auth/signup", { ...userData, password: key });

      if (res.status === 201) {
        const errorData = await login({ email: userData.email, password: key }, setError);

        if (errorData === null) {
          navigate("/welcome", { state: "rightpath" });
        }
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(formDataKeyIndex, {
          type: "server",
          message: error.response?.data.message,
        });
      }
    }
  };

  // 다음 단계로 이동하는 함수
  const setNextStep = (key: string) => {
    setUserData((current) => {
      const formData = { ...current };

      formData[formDataKeyIndex] = key;

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

    setValue(formDataKeyIndex, "");
  };

  // 폼 제출 에러가 없는지 확인
  const submitForm = async (loginFormData: FormData) => {
    const key = loginFormData[formDataKeyIndex];

    // 비밀번호 입력까지 마치면 자동 로그인
    if (formDataKeyIndex === "password") {
      if (loginFormData["password"] === loginFormData["password2"]) {
        autoLogin(key);
      } else {
        setError("password", { type: "server", message: "비밀번호가 일치하지 않습니다." });
      }
    } else {
      // 이메일 입력시 개인정보 취급 방침 동의를 먼저 유도
      if (formDataKeyIndex === "email" && !isAgreeCondition) {
        setError(formDataKeyIndex, {
          type: "agreeCondition",
          message: "개인정보 수집 및 이용 약관에 동의해주시기 바랍니다.",
        });
      } else {
        // 서버로 데이터를 보내서 유효성 검사
        // return: 유효한지(isValid) && 에러 메시지(message)
        const { isValid, message } = await checkIsValid(formDataKeyIndex, key);

        if (isValid) {
          setNextStep(key);
        } else {
          setError(formDataKeyIndex, { type: "server", message });
        }
      }
    }
  };

  const handleToggleIsAgreeCondition = () => {
    setIsAgreeCondition(!isAgreeCondition);
  };

  return (
    <>
      {state === "rightpath" ? (
        <>
          <NavHeader logocolor={theme.colors.gray100} />
          <StMain>
            <AnimatePresence exitBeforeEnter>
              <motion.div
                key={formDataKeyIndex}
                transition={{
                  default: { duration: 1 },
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <StFormWrapper>
                  <StSignupImage src={ImgSignupFirst} alt="회원가입 첫 단계" />
                  <StSignupHeading2>나만의 서재를 만드는 중이에요!</StSignupHeading2>
                  <StSignupParagraph>당신의 {formDataKeyData[formDataKeyIndex]}을 입력해 주세요.</StSignupParagraph>
                  <StForm onSubmit={handleSubmit(submitForm)}>
                    <SignupForm
                      register={register}
                      errors={errors}
                      keyData={formDataKeyData}
                      keyIndex={formDataKeyIndex}
                      isAgree={isAgreeCondition}
                      isDirty={isDirty}
                      onToggleIsAgreeCondition={handleToggleIsAgreeCondition}
                    />
                  </StForm>
                </StFormWrapper>
              </motion.div>
            </AnimatePresence>
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
