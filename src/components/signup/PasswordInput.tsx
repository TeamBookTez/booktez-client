import { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import styled from "styled-components";

import { UserData } from "../../pages/Signup";
import { passwordErrorPatterns } from "../../utils/check";
import { PwdSightIcon } from "../login";
import { StInputEmail } from "../login/LoginForm";

interface PasswordInputProps {
  register: UseFormRegister<UserData>;
  keyIndex: string;
}
export default function PasswordInput(props: PasswordInputProps) {
  const { register, keyIndex } = props;
  const [isPwdSight, setIsPwdSight] = useState<boolean>(false);

  const toggleSightPwd = (isSight: boolean) => {
    setIsPwdSight(isSight);
  };

  return (
    <StInputPwdWrapper>
      <StInputEmail
        {...register(keyIndex, passwordErrorPatterns)}
        placeholder="비밀번호를 입력해 주세요"
        type={isPwdSight ? "text" : "password"}
      />
      <PwdSightIcon isPwdSight={isPwdSight} onToggleSightPwd={toggleSightPwd} />
    </StInputPwdWrapper>
  );
}

const StInputPwdWrapper = styled.div`
  position: relative;
  width: 100%;
`;
