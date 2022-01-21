import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styled, { css } from "styled-components";

import { UserData } from "../../pages/Signup";
import { checkPwdType } from "../../utils/check";
import { postData } from "../../utils/lib/api";
import { AlertLabel, InputPwd } from "../common";
import { Button } from "../common/styled/Button";
import { LabelHidden } from "../common/styled/LabelHidden";

export default function ThirdStep() {
  const [userData, setUserData, handleIsAniTime] =
    useOutletContext<[UserData, React.Dispatch<React.SetStateAction<UserData>>, (isActive: boolean) => void]>();
  const [isPwdEmpty, setIsPwdEmpty] = useState<boolean>(true);
  const [isPwdReEmpty, setIsPwdReEmpty] = useState<boolean>(true);
  const [isPwdError, setIsPwdError] = useState<boolean>(false);
  const [isPwdReError, setIsPwdReError] = useState<boolean>(false);
  const [isPwdSight, setIsPwdSight] = useState<boolean>(false);
  const [isPwdReSight, setIsPwdReSight] = useState<boolean>(false);
  const [pwd, setPwd] = useState<string>("");
  const [pwdRe, setPwdRe] = useState<string>("");

  const nav = useNavigate();

  useEffect(() => {
    handleIsAniTime(false);
  }, []);

  useEffect(() => {
    setIsPwdError(false);
  }, [pwd]);

  useEffect(() => {
    setIsPwdReError(false);
  }, [pwdRe]);

  const postSignup = async () => {
    try {
      const res = await postData("/auth/signup", userData);
      const resData = res.data.data;

      localStorage.setItem("booktez-token", resData.token);
      // 메인에서 로그인 온 경우에는 메인으로,
      // 책 추가하다가 로그인 온 경우에는 책 추가 페이지로 Navigate
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log("err", err.response?.data);
      }
    }
  };

  const postLogin = async () => {
    const loginBody = {
      email: userData.email,
      password: pwd,
    };

    try {
      const res = await postData("/auth/login", loginBody);
      const resData = res.data.data;

      localStorage.setItem("booktez-token", resData.token);
      localStorage.setItem("booktez-nickname", resData.nickname);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log("err", err.response?.data);
      }
    }
  };

  const goNextStep = () => {
    if (pwd !== pwdRe) {
      return setIsPwdReError(true);
    }
    if (isPwdEmpty || isPwdReEmpty) return;
    if (!checkPwdType(userData["password"])) {
      return setIsPwdError(true);
    }

    postSignup().then(() => postLogin());
    handleIsAniTime(true);
    setTimeout(() => nav("/signup/4", { state: "rightpath" }), 1000);
  };

  const handleOnChangePwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value;

    setIsPwdEmpty(targetValue === "");
    setPwd(targetValue);
    setUserData((current) => ({ ...current, password: targetValue }));
  };

  const handleOnChangePwdRe = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value;

    setIsPwdReEmpty(targetValue === "");
    setPwdRe(targetValue);
  };

  const toggleSightPwd = () => {
    setIsPwdSight((isPwdSight) => !isPwdSight);
  };
  const toggleSightRePwd = () => {
    setIsPwdReSight((isPwdSight) => !isPwdSight);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    goNextStep();
  };

  return (
    <>
      <StParagraph>비밀번호를 설정해 주세요.</StParagraph>
      <StForm onSubmit={handleSubmit}>
        <StEmailFixed>{userData["email"]}</StEmailFixed>

        <LabelHidden htmlFor="signupPwd">비밀번호</LabelHidden>
        <StInputPwdWrapper>
          <InputPwd
            whatPlaceholder="영문, 숫자, 특수문자를 조합해 8자 이상 입력해 주세요"
            whatType={isPwdSight ? "text" : "password"}
            whatId="signupPwd"
            whatValue={pwd}
            isEmpty={isPwdEmpty}
            isError={isPwdError}
            isPwdSight={isPwdSight}
            toggleSightPwd={toggleSightPwd}
            handleOnChange={handleOnChangePwd}
          />
        </StInputPwdWrapper>
        <AlertLabel isError={isPwdError}>영문, 숫자, 특수문자를 조합해 8자 이상 입력해 주세요.</AlertLabel>

        <LabelHidden htmlFor="signupPwdRe">비밀번호 확인</LabelHidden>
        <StInputPwdReWrapper>
          <InputPwd
            whatPlaceholder="비밀번호를 확인해 주세요"
            whatType={isPwdReSight ? "text" : "password"}
            whatId="signupPwdRe"
            whatValue={pwdRe}
            isEmpty={isPwdReEmpty}
            isError={isPwdReError}
            isPwdSight={isPwdReSight}
            toggleSightPwd={toggleSightRePwd}
            handleOnChange={handleOnChangePwdRe}
          />
        </StInputPwdReWrapper>
        <AlertLabel isError={isPwdReError}>비밀번호가 다릅니다.</AlertLabel>
        <StNextStepBtn
          type="button"
          active={!isPwdEmpty && !isPwdReEmpty && !isPwdError && !isPwdReError}
          onClick={goNextStep}>
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
