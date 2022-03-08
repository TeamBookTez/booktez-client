import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styled, { css } from "styled-components";

import { ImgSignupSecond } from "../../assets/images";
import { StHeading2, StImage, StParagraph, UserData } from "../../pages/Signup";
import { checkNicknameType } from "../../utils/check";
import { getData } from "../../utils/lib/api";
import { AlertLabel, InputEmail } from "../common";
import { Button } from "../common/styled/Button";
import { LabelHidden } from "../common/styled/LabelHidden";

export default function SecondStep() {
  const [userData, setUserData] = useOutletContext<[UserData, React.Dispatch<React.SetStateAction<UserData>>]>();
  const [nickname, setNickname] = useState<string>("");
  const [isNicknameEmpty, setIsNicknameEmpty] = useState<boolean>(true);
  const [isNicknameError, setIsNicknameError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isNicknameValid, setIsNicknameValid] = useState<boolean>(true);

  const navigate = useNavigate();

  useEffect(() => {
    getNickname(userData["nickname"]);
  }, [userData]);

  const getNickname = async (nicknameData: string) => {
    try {
      const res = await getData(`/auth/nickname?nickname=${nicknameData}`);
      const resData = res.data;

      setIsNicknameValid(resData.data.isValid);
      setErrorMessage(resData.message);
    } catch (err) {
      // return;
    }
  };

  const goNextStep = () => {
    if (isNicknameEmpty) return;
    if (checkNicknameType(userData["nickname"]) || isNicknameValid === false) {
      return setIsNicknameError(true);
    }

    setTimeout(() => navigate("/signup/3", { state: "rightpath" }), 1000);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value;

    setIsNicknameError(false);
    setIsNicknameEmpty(targetValue === "");
    setNickname(targetValue);
    setUserData((current) => ({ ...current, nickname: targetValue }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    goNextStep();
  };

  return (
    <motion.div
      key="secondSignup"
      transition={{
        default: { duration: 1 },
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <StImage src={ImgSignupSecond} alt="회원가입 첫 단계" />
      <StHeading2>나만의 서재를 만드는 중이에요!</StHeading2>
      <StParagraph>제가 여러분을 어떻게 부르면 될까요?</StParagraph>
      <StForm onSubmit={handleSubmit}>
        <LabelHidden htmlFor="signupnickname">닉네임</LabelHidden>
        <InputEmail
          whatPlaceholder="닉네임을 입력해 주세요"
          whatType="text"
          whatId="signupnickname"
          whatValue={nickname}
          isEmpty={isNicknameEmpty}
          isError={isNicknameError}
          handleOnChange={handleOnChange}
        />
        <AlertLabel isError={isNicknameError}>{errorMessage}</AlertLabel>
        <StNextStepBtn active={!isNicknameEmpty && !isNicknameError} onClick={goNextStep}>
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
