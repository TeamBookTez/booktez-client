import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useOutletContext } from "react-router-dom";
import styled, { css } from "styled-components";

import { IcSignupChecking } from "../../assets/icons";
import { ImgSignupFirst } from "../../assets/images";
import { UserData } from "../../pages/Signup";
import { checkEmailType, emailErrorPatterns } from "../../utils/check";
import { getData, postData } from "../../utils/lib/api";
import { FormData } from "../bookNote/periNote/PeriNote";
import { AlertLabel, InputEmail } from "../common";
import { Button } from "../common/styled/Button";
import { LabelHidden } from "../common/styled/LabelHidden";
import { StSignupHeading2, StSignupImage, StSignupParagraph } from "../common/styled/Signup";
import { StInputEmail } from "../login/LoginForm";

export default function FirstStep() {
  const [userData, setUserData] = useOutletContext<[UserData, React.Dispatch<React.SetStateAction<UserData>>]>();
  const [isAgreeCondition, setIsAgreeCondition] = useState<boolean>(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onSubmit",
  });

  const submitForm = async (loginFormData: FormData) => {
    const { email } = loginFormData;
    let errorMessage;

    try {
      const {
        data: { data },
      } = await getData(`/auth/email?email=${email}`);

      if (data.isValid) {
        if (isAgreeCondition) {
          setUserData((current) => ({ ...current, email }));
          navigate("/signup/2", { state: "rightpath" });
        } else {
          errorMessage = "개인정보 수집 및 이용 약관에 동의해주시기 바랍니다.";
        }
      } else {
        errorMessage = data.message;
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        errorMessage = err.response?.data.message;
      }
    }

    if (errorMessage) {
      setError("email", {
        type: "server",
        message: errorMessage,
      });
    }
  };

  return (
    <motion.div
      key="firstSignup"
      transition={{
        default: { duration: 1 },
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <StSignupImage src={ImgSignupFirst} alt="회원가입 첫 단계" />
      <StSignupHeading2>나만의 서재를 만드는 중이에요!</StSignupHeading2>
      <StSignupParagraph>당신의 이메일을 입력해 주세요.</StSignupParagraph>

      <StForm onSubmit={handleSubmit(submitForm)}>
        <LabelHidden htmlFor="signupEmail">이메일</LabelHidden>
        <StInputEmail {...register("email", emailErrorPatterns)} placeholder="이메일을 입력해 주세요" />
        {errors.email?.message && <AlertLabel message={errors.email.message} />}

        <StAgreeConditionBox htmlFor="signupAgree" onClick={() => setIsAgreeCondition((prev) => !prev)}>
          <StIcSignupChecking isagree={isAgreeCondition} />
          <p>
            <StAConditionLink
              href="https://rose-prepared-583.notion.site/6e6807cf2fff4effbd108057e611d5b9"
              target="_blank">
              개인정보 수집 및 이용 약관
            </StAConditionLink>
            에 동의합니다.
          </p>
        </StAgreeConditionBox>

        <StNextStepBtn disabled={!isValid} type="submit">
          다음 계단
        </StNextStepBtn>
      </StForm>
    </motion.div>
  );
}

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

const StAConditionLink = styled.a`
  text-decoration: underline;
`;

const StNextStepBtn = styled(Button)<{ disabled: boolean }>`
  width: 46.4rem;
  height: 5.4rem;

  margin-top: 3.9rem;

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
