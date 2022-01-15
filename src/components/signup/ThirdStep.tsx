import axios, { AxiosRequestHeaders } from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styled, { css } from "styled-components";

import { UserData } from "../../pages/Signup";
import { isPwd } from "../../utils/check";
import { postData } from "../../utils/lib/api";
import { AlertLabel, Button, InputPwd, LabelHidden } from "../common";

interface Body {
  email: string;
  password: string;
  nickname?: string;
}

export default function ThirdStep() {
  const [userData, setUserData, handleIsAniTime] =
    useOutletContext<[UserData, React.Dispatch<React.SetStateAction<UserData>>, (isActive: boolean) => void]>();
  const [isPwdEmpty, setIsPwdEmpty] = useState<boolean>(true);
  const [isPwdReEmpty, setIsPwdReEmpty] = useState<boolean>(true);
  const [isPwdError, setIsPwdError] = useState<boolean>(false);
  const [isPwdReError, setIsPwdReError] = useState<boolean>(false);
  const [isPwdSight, setIsPwdSight] = useState<boolean>(false);
  const [isPwdReSight, setIsPwdReSight] = useState<boolean>(false);
  const nav = useNavigate();

  const signupHeader: AxiosRequestHeaders = {
    "Content-Type": "application/json",
  };
  const signup = async (header: AxiosRequestHeaders, key: string, body: Body) => {
    try {
      const { data } = await postData(header, key, body);

      localStorage.setItem("token", data.token);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log("err", err.response?.data);
      }
    }
  };

  useEffect(() => {
    handleIsAniTime(false);
  }, []);

  useEffect(() => {
    setIsPwdError(false);
  }, [userData]);

  const goNextStep = () => {
    if (isPwdEmpty || isPwdReEmpty) return;
    if (!isPwd(userData["password"])) {
      setIsPwdError(true);
    } else {
      signup(signupHeader, "/auth/signup", userData);
      handleIsAniTime(true);
      setTimeout(() => nav("/signup/4", { state: "ani" }), 1000);
    }
  };

  const checkIsPwdEmpty = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPwdEmpty(e.target.value === "");
    setUserData((current) => ({ ...current, password: e.target.value }));
  };
  const checkIsPwdReEmpty = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPwdReEmpty(e.target.value === "");
  };

  // const checkIsPwdError = () => {
  //   setIsPwdError(true);
  // };
  // const checkIsPwdReError = () => {
  //   setIsPwdReError(true);
  // };

  const toggleSightPwd = () => {
    setIsPwdSight((isPwdSight) => !isPwdSight);
  };
  const toggleSightRePwd = () => {
    setIsPwdReSight((isPwdSight) => !isPwdSight);
  };

  return (
    <>
      <StParagraph>비밀번호를 설정해 주세요.</StParagraph>
      <StFormWrapper>
        <StEmailFixed>{userData["email"]}</StEmailFixed>

        <LabelHidden htmlFor="signupPwd">비밀번호</LabelHidden>
        <StInputPwdWrapper>
          <InputPwd
            whatPlaceholder="영문, 숫자, 특수문자를 조합해 8자 이상 입력해 주세요"
            whatType={isPwdSight ? "text" : "password"}
            whatId="signupPwd"
            isEmpty={isPwdEmpty}
            isError={isPwdError}
            isPwdSight={isPwdSight}
            toggleSightPwd={toggleSightPwd}
            handleOnChange={checkIsPwdEmpty}
          />
        </StInputPwdWrapper>
        <AlertLabel isError={isPwdError}>비밀번호 형식 에러</AlertLabel>

        <LabelHidden htmlFor="signupPwdRe">비밀번호 확인</LabelHidden>
        <StInputPwdReWrapper>
          <InputPwd
            whatPlaceholder="비밀번호를 확인해 주세요"
            whatType={isPwdReSight ? "text" : "password"}
            whatId="signupPwdRe"
            isEmpty={isPwdReEmpty}
            isError={isPwdReError}
            isPwdSight={isPwdReSight}
            toggleSightPwd={toggleSightRePwd}
            handleOnChange={checkIsPwdReEmpty}
          />
        </StInputPwdReWrapper>
        <AlertLabel isError={isPwdReError}>비밀번호가 다릅니다.</AlertLabel>
        <StNextStepBtn
          type="button"
          active={!isPwdEmpty && !isPwdReEmpty && !isPwdError && !isPwdReError}
          onClick={goNextStep}>
          다음 계단
        </StNextStepBtn>
      </StFormWrapper>
    </>
  );
}

const StParagraph = styled.p`
  margin-bottom: 5.2rem;

  ${({ theme }) => theme.fonts.body0}
`;

const StFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > input:first-child {
    background-color: ${({ theme }) => theme.colors.white400};
    color: ${({ theme }) => theme.colors.gray300};
    font-weight: 400;
  }

  & > input:first-child::placeholder {
    color: ${({ theme }) => theme.colors.gray300};
    font-weight: 400;
  }
`;

const StEmailFixed = styled.article`
  display: flex;
  align-items: center;

  width: 100%;
  height: 5.4rem;
  padding-left: 2rem;

  background-color: ${({ theme }) => theme.colors.white400};

  border: 0.2rem solid ${({ theme }) => theme.colors.white400};
  border-radius: 1rem;

  ${({ theme }) => theme.fonts.body3}
  color: ${({ theme }) => theme.colors.gray100};
`;

const StInputPwdWrapper = styled.div`
  width: 100%;

  margin-top: 5.2rem;
`;
const StInputPwdReWrapper = styled.div`
  width: 100%;

  margin-top: 2.4rem;
`;

const StNextStepBtn = styled(Button)<{ active: boolean }>`
  width: 46.4rem;
  height: 5.4rem;

  margin-top: 7.2rem;

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
