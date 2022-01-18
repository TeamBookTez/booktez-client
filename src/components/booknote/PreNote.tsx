import styled from "styled-components";

export default function PreNote() {
  return (
    <StNoteForm>
      <StFormHead>독서 전 단계 어쩌구 해보세요</StFormHead>
      <StNextBtn>다음 계단</StNextBtn>
    </StNoteForm>
  );
}

const StNoteForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: 100%;

  max-height: fit-content;
`;

const StFormHead = styled.h2`
  width: 100%;

  padding: 4.5rem 0 4.5rem 2rem;

  ${({ theme }) => theme.fonts.header3};
`;

const StNextBtn = styled.button`
  padding: 1.6rem 13rem;

  border-radius: 1rem;

  ${({ theme }) => theme.fonts.button};
  background-color: ${({ theme }) => theme.colors.white400};
`;
