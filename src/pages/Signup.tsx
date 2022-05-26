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
import { getData, postData } from "../utils/lib/api";

export interface UserData {
  [key: string]: string;
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
    setValue,
    formState: { errors },
  } = useForm<UserData>({
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

    if (formDataKeyIndex === "password") {
      if (loginFormData["password"] === loginFormData["password2"]) {
        try {
          const res = await postData("/auth/signup", { ...userData, password: key });

          if (res.status === 201) {
            const {
              data: { data },
            } = await postData("/auth/login", { email: userData.email, password: key });

            localStorage.setItem("booktez-token", data.token);
            localStorage.setItem("booktez-nickname", data.nickname);
            localStorage.setItem("booktez-email", data.email);

            navigate("/welcome", { state: "rightpath" });
          } else {
            setError("password", { type: "server", message: "비밀번호가 일치하지 않습니다." });
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        setError("password", { type: "password", message: "죄송합니다. 잠시 후 다시 시도해주시기 바랍니다." });
      }
    } else {
      const formDataValid = await checkIsValid(formDataKeyIndex, key);

      const isError = checkIsFormErrors(formDataValid);

      if (!isError) {
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
      }
    }
  };

  const handleSetIsFilled = (filled: boolean) => {
    setIsFilled(filled);
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
                      isFilled={isFilled}
                      onSetIsFilled={handleSetIsFilled}
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
