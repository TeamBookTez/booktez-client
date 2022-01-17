import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styled, { css } from "styled-components";

import { UserData } from "../../pages/Signup";
import { checkNicknameType } from "../../utils/check";
import { AlertLabel, Button, InputEmail, LabelHidden } from "../common";

export default function SecondStep() {
  const [userData, setUserData, handleIsAniTime] =
    useOutletContext<[UserData, React.Dispatch<React.SetStateAction<UserData>>, (isActive: boolean) => void]>();
  const [nickname, setNickname] = useState<string>("");
  const [isNicknameEmpty, setIsNicknameEmpty] = useState<boolean>(true);
  const [isNicknameError, setIsNicknameError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const nav = useNavigate();

  useEffect(() => {
    handleIsAniTime(false);
  }, []);

  useEffect(() => {
    setIsNicknameError(false);
    setErrorMessage("");
  }, [userData]);

  const goNextStep = () => {
    if (isNicknameEmpty) return;
    if (checkNicknameType(userData["nickname"])) {
      setIsNicknameError(true);
    } else {
      handleIsAniTime(true);
      setTimeout(() => nav("/signup/3", { state: "rightpath" }), 1000);
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value;

    setIsNicknameEmpty(targetValue === "");
    setNickname(targetValue);
    setUserData((current) => ({ ...current, nickname: targetValue }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    goNextStep();
  };

  return (
    <>
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
        <StNextStepBtn type="button" active={!isNicknameEmpty && !isNicknameError} onClick={goNextStep}>
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
