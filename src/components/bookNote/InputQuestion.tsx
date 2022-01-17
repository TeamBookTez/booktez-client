import styled from "styled-components";

export default function InputQuestion() {
  return <StInput placeholder="질문을 입력해주세요." />;
}

export const StInput = styled.input`
  margin-bottom: 1rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.white400};
  border-radius: 0.8rem;
  padding: 1.35rem 2.4rem;

  width: 100%;

  color: ${({ theme }) => theme.colors.gray400};
  ${({ theme }) => theme.fonts.body4}

  &::placeholder {
    color: ${({ theme }) => theme.colors.white500};
  }
`;
