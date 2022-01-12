import { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styled from "styled-components";

import { AlertLabel, Button, Input, LabelHidden } from "../common";

export default function FirstStep() {
  const [handleIsAniTime] = useOutletContext<[(isActive: boolean) => void]>();

  const nav = useNavigate();

  useEffect(() => {
    handleIsAniTime(false);
  }, []);

  const goNextStep = () => {
    handleIsAniTime(true);
    setTimeout(() => nav("/signup/2", { state: "ani" }), 1000);
  };

  return (
    <>
      <StParagraph>당신의 이메일을 입력해 주세요.</StParagraph>
      <StFormWrapper>
        <LabelHidden htmlFor="signupEmail">이메일</LabelHidden>
        <Input type="text" id="signupEmail" placeholder="이메일을 입력해주세요" />
        <AlertLabel isError={true}>올바른 형식이 아닙니다.</AlertLabel>
        <StNextStepBtn type="button" onClick={goNextStep}>
          다음 계단
        </StNextStepBtn>
      </StFormWrapper>
    </>
  );
}

const StParagraph = styled.p`
  margin-bottom: 5.2rem;
  /* 임의 폰트 */
  font-size: 2rem;W
`;

const StFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StNextStepBtn = styled(Button)`
  width: 46.4rem;
  height: 5.4rem;

  margin-top: 5rem;

  border-radius: 1rem;
`;
