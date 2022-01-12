import styled from "styled-components";

import { AlertLabel, Input, LabelHidden } from "../common";

export default function SecondStep() {
  return (
    <>
      <StParagraph>제가 여러분을 어떻게 부르면 될까요?</StParagraph>
      <StFormWrapper>
        <LabelHidden htmlFor="signupNickname">닉네임</LabelHidden>
        <Input type="text" id="signupNickname" placeholder="닉네임을 입력해주세요" />
        <AlertLabel isError={true}>올바른 형식이 아닙니다.</AlertLabel>
        <StBtn>다음 계단</StBtn>
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

const StBtn = styled.button`
  width: 46.4rem;
  height: 5.4rem;
  background-color: ${({ theme }) => theme.colors.white400};
  border-radius: 1rem;
  margin-top: 5rem;

  /* 임의 폰트 */
  font-size: 1.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray300};
`;
