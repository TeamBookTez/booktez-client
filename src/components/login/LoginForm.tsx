import styled from "styled-components";

import { ReactComponent as IcCool } from "../../assets/icons/coolicon.svg";

export default function LoginForm() {
  console.log(IcCool);

  return (
    <StForm>
      <StLabel>이메일</StLabel>
      <StInput placeholder="이메일을 입력해 주세요" type="text" />
      <StLabel>비밀번호</StLabel>
      <StInput placeholder="비밀번호를 입력해 주세요" type="password"></StInput>
      <IcCool />
      <StBtn>로그인</StBtn>
    </StForm>
  );
}

const StForm = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

const StLabel = styled.label`
  margin-bottom: 1.2rem;

  // 글꼴 설정
  font-size: 1.8rem;
  line-height: 130%;
  letter-spacing: -0.1rem;
`;

const StInput = styled.input`
  height: 5.4rem;
  padding-left: 2rem;
  margin-bottom: 3.2rem;

  background-color: ${({ theme }) => theme.colors.white200};

  border: 2px solid ${({ theme }) => theme.colors.gray200};
  border-radius: 1rem;

  &::placeholder {
  }
`;

const StBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 5.6rem;
  margin-top: 2rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.orange100};

  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.white};
`;
