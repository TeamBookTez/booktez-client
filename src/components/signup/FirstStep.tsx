import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styled, { css } from "styled-components";

import { UserData } from "../../pages/Signup";
import { isEmail } from "../../utils/check";
import { AlertLabel, Button, InputEmail, LabelHidden } from "../common";

export default function FirstStep() {
  const [userData, setUserData, handleIsAniTime] =
    useOutletContext<[UserData, React.Dispatch<React.SetStateAction<UserData>>, (isActive: boolean) => void]>();
  const [email, setEmail] = useState<string>("");
  const [isEmailEmpty, setIsEmailEmpty] = useState<boolean>(true);
  const [isEmailError, setIsEmailError] = useState<boolean>(false);

  const nav = useNavigate();

  useEffect(() => {
    handleIsAniTime(false);
  }, []);

  useEffect(() => {
    setIsEmailError(false);
  }, [userData]);

  const goNextStep = () => {
    if (isEmailEmpty) return;
    if (!isEmail(userData["email"])) {
      setIsEmailError(true);
    } else {
      handleIsAniTime(true);
      setTimeout(() => nav("/signup/2", { state: "rightpath" }), 1000);
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value;

    setIsEmailEmpty(targetValue === "");
    setEmail(targetValue);
    setUserData((current) => ({ ...current, email: targetValue }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    goNextStep();
  };

  return (
    <>
      <StParagraph>당신의 이메일을 입력해 주세요.</StParagraph>
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
        <AlertLabel isError={isEmailError}>올바른 형식이 아닙니다.</AlertLabel>
        <StNextStepBtn type="button" active={!isEmailEmpty && !isEmailError} onClick={goNextStep}>
          다음 계단
        </StNextStepBtn>
      </StForm>
    </>
  );
}

const StParagraph = styled.p`
  margin-bottom: 5.2rem;

  ${({ theme }) => theme.fonts.body0}
`;

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
