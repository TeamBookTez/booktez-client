import styled, { css } from "styled-components";

import { IcNoSight, IcSight } from "../../assets/icons";

interface InputPwdProps {
  whatPlaceholder: string;
  whatType: string;
  whatId: string;
  isEmpty: boolean;
  isError: boolean;
  isPwdSight: boolean;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleSightPwd: () => void;
}

interface StInputPwdProps {
  ispwdempty: boolean;
  ispwderror: boolean;
  ispwdsight: boolean;
}

export default function InputPwd(props: InputPwdProps) {
  const { whatPlaceholder, whatType, whatId, isEmpty, isError, isPwdSight, handleOnChange, toggleSightPwd } = props;

  return (
    <StPwdWrapper>
      <StInputPwd
        placeholder={whatPlaceholder}
        type={whatType}
        id={whatId}
        ispwdempty={isEmpty}
        ispwderror={isError}
        ispwdsight={isPwdSight}
        onChange={handleOnChange}
      />
      {isPwdSight ? <StIcSight onClick={toggleSightPwd} /> : <StIcNoSight onClick={toggleSightPwd} />}
    </StPwdWrapper>
  );
}

const StPwdWrapper = styled.div`
  position: relative;
`;

const StInputPwd = styled.input<StInputPwdProps>`
  width: 100%;
  height: 5.4rem;
  padding-left: 2rem;

  background-color: ${({ theme }) => theme.colors.white200};

  border: 0.2rem solid ${({ theme }) => theme.colors.white200};
  border-radius: 1rem;

  font-size: 1.8rem;
  letter-spacing: -0.01rem;
  color: ${({ theme }) => theme.colors.gray100};

  ${({ ispwdempty }) =>
    ispwdempty
      ? ""
      : css`
          border-color: ${({ theme }) => theme.colors.gray200};
        `};
  ${({ ispwderror }) =>
    ispwderror
      ? css`
          border-color: ${({ theme }) => theme.colors.red100};
        `
      : ""};
  ${({ ispwdempty, ispwdsight }) =>
    !ispwdempty && !ispwdsight
      ? css`
          letter-spacing: 0.15rem;
        `
      : ""};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
  }
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
