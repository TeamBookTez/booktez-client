import styled from "styled-components";

import { AlertLabel, Input } from "../common";

export default function ThirdStep() {
  return (
    <>
      <StParagraph>비밀번호를 설정해 주세요.</StParagraph>
      <StFormWrapper>
        <Input type="text" id="email" placeholder="blabla@google.com" />
        <StLabelWrapper />

        <Input type="text" id="email" placeholder="영문, 숫자, 특수문자를 조합해 8자 이상 입력해 주세요" />
        <AlertLabel isError={true}>비밀번호 형식 에러</AlertLabel>

        <Input type="text" id="email" placeholder="비밀번호를 확인해 주세요" />
        <AlertLabel isError={true}>비밀번호가 다릅니다.</AlertLabel>

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

const StLabelWrapper = styled.label`
  width: 100%;
  height: 2.4rem;
  margin: 1.6rem 0;
  display: flex;

  & > svg {
    height: 100%;
    width: auto;
    margin-right: 0.4rem;
  }
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
