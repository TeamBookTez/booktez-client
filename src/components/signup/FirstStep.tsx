import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styled, { css } from "styled-components";

import { ImgSignupFirst } from "../../assets/images";
import { UserData } from "../../pages/Signup";
import { checkEmailType } from "../../utils/check";
import { getData } from "../../utils/lib/api";
import { AlertLabel, InputEmail } from "../common";
import { Button } from "../common/styled/Button";
import { LabelHidden } from "../common/styled/LabelHidden";
import { StSignupHeading2, StSignupImage, StSignupParagraph } from "../common/styled/Signup";

export default function FirstStep() {
  const [userData, setUserData] = useOutletContext<[UserData, React.Dispatch<React.SetStateAction<UserData>>]>();
  const [email, setEmail] = useState<string>("");
  const [isEmailEmpty, setIsEmailEmpty] = useState<boolean>(true);
  const [isEmailError, setIsEmailError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);

  const navigate = useNavigate();

  useEffect(() => {
    getEmail(userData["email"]);
  }, [userData]);

  const getEmail = async (emailData: string) => {
    const res = await getData(`/auth/email?email=${emailData}`);
    const resData = res.data;

    setIsEmailValid(resData.data.isValid);
    setErrorMessage(resData.message);
  };

  const goNextStep = () => {
    if (isEmailEmpty) return;
    if (!checkEmailType(userData["email"]) || isEmailValid === false) {
      return setIsEmailError(true);
    }

    navigate("/signup/2", { state: "rightpath" });
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value;

    setIsEmailError(false);
    setIsEmailEmpty(targetValue === "");
    setEmail(targetValue);
    setUserData((current) => ({ ...current, email: targetValue }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    goNextStep();
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
      <StForm onSubmit={handleSubmit}>
        <LabelHidden htmlFor="signupEmail">이메일</LabelHidden>
        <InputEmail
          whatPlaceholder="이메일을 입력해 주세요"
          whatType="text"
          whatId="signupEmail"
          whatValue={email}
          isEmpty={isEmailEmpty}
          isError={isEmailError}
          handleOnChange={handleOnChange}
        />
        <AlertLabel isError={isEmailError}>{errorMessage}</AlertLabel>
        <StNextStepBtn active={!isEmailEmpty && !isEmailError} onClick={goNextStep}>
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

const StNextStepBtn = styled(Button)<{ active: boolean }>`
  width: 46.4rem;
  height: 5.4rem;

  margin-top: 5rem;

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
