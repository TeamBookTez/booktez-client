import styled from "styled-components";

import { ReactComponent as IcCool } from "../../assets/icons/coolicon.svg";

export default function LoginForm() {
  return (
    <StForm>
      <StLabel>이메일</StLabel>
      <StInput placeholder="이메일을 입력해 주세요" type="text" />
      <StLabel>비밀번호</StLabel>
      <StPwdWrapper>
        <StInput placeholder="비밀번호를 입력해 주세요" type="password" />
        <StIcCool />
      </StPwdWrapper>
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
  width: 100%;
  height: 5.4rem;
  padding-left: 2rem;
  margin-bottom: 3.2rem;

  background-color: ${({ theme }) => theme.colors.white200};

  border: 2px solid ${({ theme }) => theme.colors.gray200};
  border-radius: 1rem;

  font-size: 1.8rem;
  letter-spacing: -0.1rem;
  color: ${({ theme }) => theme.colors.gray100};
`;

const StPwdWrapper = styled.div`
  position: relative;
`;

const StIcCool = styled(IcCool)`
  position: absolute;
  top: 2rem;
  right: 2rem;

  &:hover {
    cursor: pointer;
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
