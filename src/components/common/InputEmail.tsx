import styled, { css } from "styled-components";

interface InputEmailProps {
  whatPlaceholder: string;
  whatType: string;
  whatId: string;
  isEmpty: boolean;
  isError: boolean;
  checkIsEmpty: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

interface StInputEmailProps {
  isemailempty: boolean;
  isemailerror: boolean;
}

export default function InputEmail(props: InputEmailProps) {
  const { whatPlaceholder, whatType, whatId, isEmpty, isError, checkIsEmpty, onEnter } = props;

  return (
    <StInputEmail
      placeholder={whatPlaceholder}
      type={whatType}
      id={whatId}
      isemailempty={isEmpty}
      isemailerror={isError}
      onChange={checkIsEmpty}
      onKeyDown={onEnter}
    />
  );
}

const StInputEmail = styled.input<StInputEmailProps>`
  width: 100%;
  height: 5.4rem;
  padding-left: 2rem;

  background-color: ${({ theme }) => theme.colors.white200};

  border: 0.2rem solid ${({ theme }) => theme.colors.white200};
  border-radius: 1rem;

  ${({ theme }) => theme.fonts.body3}
  color: ${({ theme }) => theme.colors.gray100};

  ${({ isemailempty }) =>
    isemailempty
      ? ""
      : css`
          border-color: ${({ theme }) => theme.colors.gray200};
        `};
  ${({ isemailerror }) =>
    isemailerror
      ? css`
          border-color: ${({ theme }) => theme.colors.red100};
        `
      : ""};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
  }
`;
