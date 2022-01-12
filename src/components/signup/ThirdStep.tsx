import styled from "styled-components";

import { AlertLabel, Input, LabelHidden } from "../common";

export default function ThirdStep() {
  const tempEmail = "bookstairs@sopt.com";

  return (
    <>
      <StParagraph>비밀번호를 설정해 주세요.</StParagraph>
      <StFormWrapper>
        <StEmailFixed>{tempEmail}</StEmailFixed>
        <StLabelWrapper />

        <LabelHidden htmlFor="signupPwd">이메일</LabelHidden>
        <Input type="text" id="signupPwd" placeholder="영문, 숫자, 특수문자를 조합해 8자 이상 입력해 주세요" />
        <AlertLabel isError={true}>비밀번호 형식 에러</AlertLabel>

        <LabelHidden htmlFor="signupRePwd">이메일</LabelHidden>
        <Input type="text" id="signupRePwd" placeholder="비밀번호를 확인해 주세요" />
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

const StEmailFixed = styled.article`
  display: flex;
  align-items: center;

  width: 100%;
  height: 5.4rem;
  padding-left: 2rem;

  background-color: ${({ theme }) => theme.colors.white400};

  border: 0.2rem solid ${({ theme }) => theme.colors.white400};
  border-radius: 1rem;

  /* 폰트 설정 */
  font-size: 1.8rem;
  letter-spacing: -0.01rem;
  color: ${({ theme }) => theme.colors.gray100};
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
