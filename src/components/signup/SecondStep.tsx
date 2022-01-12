import { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styled from "styled-components";

import { AlertLabel, Button, Input, LabelHidden } from "../common";

export default function SecondStep() {
  const [handleIsAniTime] = useOutletContext<[(isActive: boolean) => void]>();

  const nav = useNavigate();

  useEffect(() => {
    handleIsAniTime(false);
  }, []);

  const goNextStep = () => {
    handleIsAniTime(true);
    setTimeout(() => nav("/signup/3", { state: "ani" }), 1000);
  };

  return (
    <>
      <StParagraph>제가 여러분을 어떻게 부르면 될까요?</StParagraph>
      <StFormWrapper>
        <LabelHidden htmlFor="signupNickname">닉네임</LabelHidden>
        <Input type="text" id="signupNickname" placeholder="닉네임을 입력해주세요" />
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
  font-size: 2rem;
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
