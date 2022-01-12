import { useState } from "react";
import styled from "styled-components";

import { IcNoSight, IcSight } from "../../assets/icons";
import { Button } from "../common";

export default function LoginForm() {
  const [sightPwd, setSightPwd] = useState<boolean>(false);

  const toggleSightPwd = () => {
    setSightPwd((sightPwd) => !sightPwd);
  };

  return (
    <StForm>
      <StLabel>이메일</StLabel>
      <StInput placeholder="이메일을 입력해 주세요" type="text" />
      <StLabel>비밀번호</StLabel>
      <StPwdWrapper>
        <StInputPwd placeholder="비밀번호를 입력해 주세요" type="password" />
        {sightPwd ? <StIcSight onClick={toggleSightPwd} /> : <StIcNoSight onClick={toggleSightPwd} />}
      </StPwdWrapper>
      <StLoginBtn>로그인</StLoginBtn>
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

  /* border: 2px solid ${({ theme }) => theme.colors.gray200}; */
  border-radius: 1rem;

  font-size: 1.8rem;
  letter-spacing: -0.01rem;
  color: ${({ theme }) => theme.colors.gray100};
`;

const StInputPwd = styled(StInput)`
  /* letter-spacing: 0.15rem; */
`;

const StPwdWrapper = styled.div`
  position: relative;
`;

const StIcNoSight = styled(IcNoSight)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  &:hover {
    cursor: pointer;
  }
`;

const StIcSight = styled(IcSight)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  &:hover {
    cursor: pointer;
  }
`;

const StLoginBtn = styled(Button)`
  width: 46.4rem;
  height: 5.6rem;

  margin-top: 2rem;

  border-radius: 1rem;

  // background 색상은 active 여부에 따라 변경하면 됨.
`;
