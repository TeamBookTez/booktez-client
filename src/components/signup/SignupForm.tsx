import { FieldError, UseFormRegister } from "react-hook-form";
import styled, { css } from "styled-components";

import { IcSignupChecking } from "../../assets/icons";
import { UserData } from "../../pages/Signup";
import { errorPatterns } from "../../utils/check";
import { AlertLabel } from "../common";
import { Button } from "../common/styled/Button";
import { Input } from "../common/styled/Input";
import { LabelHidden } from "../common/styled/LabelHidden";
import PasswordInput from "./PasswordInput";

interface SignupFormProps {
  register: UseFormRegister<UserData>;
  errors: { [x: string]: FieldError };
  keyData: UserData;
  keyIndex: string;
  isAgree: boolean;
  isDirty: boolean;
  onToggleIsAgreeCondition: () => void;
}

export default function SignupForm(props: SignupFormProps) {
  const { register, errors, keyData, keyIndex, isAgree, isDirty, onToggleIsAgreeCondition } = props;

  return (
    <>
      <LabelHidden htmlFor={keyIndex}>{keyData[keyIndex]}</LabelHidden>
      {keyIndex === "password" ? (
        <>
          <PasswordInput register={register} keyIndex={keyIndex} />
          <StPassword2Input>
            <PasswordInput register={register} keyIndex="password2" />
          </StPassword2Input>
        </>
      ) : (
        <Input
          {...register(keyIndex, errorPatterns[keyIndex])}
          placeholder={`${keyData[keyIndex]}을 입력해 주세요`}
          // onChange={handleChange}
        />
      )}
      {errors[keyIndex]?.message && <AlertLabel message={errors[keyIndex].message} />}

      {keyIndex === "email" && (
        <StAgreeConditionBox htmlFor="signupAgree" onClick={onToggleIsAgreeCondition}>
          <StIcSignupChecking isagree={isAgree} />
          <p>개인정보 수집 및 이용 약관에 동의합니다.</p>
        </StAgreeConditionBox>
      )}

      <StNextStepBtn disabled={!isDirty} type="submit">
        다음 계단
      </StNextStepBtn>
    </>
  );
}

const StAgreeConditionBox = styled.label`
  width: 100%;
  height: 2.1rem;

  display: flex;
  align-items: center;

  margin: 1.7rem 0 0 0;

  ${({ theme }) => theme.fonts.body6}
`;

const StIcSignupChecking = styled(IcSignupChecking)<{ isagree: boolean }>`
  margin-right: 0.2rem;

  fill: ${({ theme, isagree }) => (isagree ? theme.colors.orange100 : theme.colors.white400)};
`;

const StNextStepBtn = styled(Button)<{ disabled: boolean }>`
  width: 46.4rem;
  height: 5.4rem;

  margin-top: 3.9rem;

  border-radius: 1rem;

  ${({ theme }) => theme.fonts.button}

  ${({ disabled, theme }) =>
    disabled &&
    css`
      background-color: ${theme.colors.white400};
      color: ${theme.colors.gray300};
      &:hover {
        cursor: default;
      }
    `}
`;

const StPassword2Input = styled.div`
  margin-top: 2.4rem;
  width: 100%;
`;
