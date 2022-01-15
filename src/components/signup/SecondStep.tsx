import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styled, { css } from "styled-components";

import { UserData } from "../../pages/Signup";
import { isNickname } from "../../utils/check";
import { AlertLabel, Button, InputEmail, LabelHidden } from "../common";

export default function SecondStep() {
  const [userData, setUserData, handleIsAniTime] =
    useOutletContext<[UserData, React.Dispatch<React.SetStateAction<UserData>>, (isActive: boolean) => void]>();
  const [isNicknameEmpty, setIsNicknameEmpty] = useState<boolean>(true);
  const [isNicknameError, setIsNicknameError] = useState<boolean>(false);
  const nav = useNavigate();

  useEffect(() => {
    handleIsAniTime(false);
  }, []);

  useEffect(() => {
    setIsNicknameError(false);
  }, [userData]);

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.code === "Enter") {
      goNextStep();
    }
  };

  const goNextStep = () => {
    if (isNicknameEmpty) return;
    if (isNickname(userData["nickname"])) {
      setIsNicknameError(true);
    } else {
      handleIsAniTime(true);
      setTimeout(() => nav("/signup/3", { state: "rightpath" }), 1000);
    }
  };

  const checkIsNicknameEmpty = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsNicknameEmpty(e.target.value === "");
    setUserData((current) => ({ ...current, nickname: e.target.value }));
  };

  const checkIsNicknameError = () => {
    setIsNicknameError(true);
  };

  return (
    <>
      <StParagraph>제가 여러분을 어떻게 부르면 될까요?</StParagraph>
      <StInputWrapper>
        <LabelHidden htmlFor="signupnickname">닉네임</LabelHidden>
        <InputEmail
          whatPlaceholder="닉네임을 입력해 주세요"
          whatType="text"
          whatId="signupnickname"
          isEmpty={isNicknameEmpty}
          isError={isNicknameError}
          checkIsEmpty={checkIsNicknameEmpty}
          onEnter={onKeyPress}
        />
        <AlertLabel isError={isNicknameError}>올바른 형식이 아닙니다.</AlertLabel>
        <StNextStepBtn type="button" active={!isNicknameEmpty && !isNicknameError} onClick={goNextStep}>
          다음 계단
        </StNextStepBtn>
      </StInputWrapper>
    </>
  );
}

const StParagraph = styled.p`
  margin-bottom: 5.2rem;

  ${({ theme }) => theme.fonts.body0}
`;

const StInputWrapper = styled.div`
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
