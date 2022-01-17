import styled from "styled-components";

import { Button } from "../../common";
import { PreNoteForm, QuestionThree } from "..";

export default function PreNote() {
  return (
    <StNoteForm>
      <StFormHead>독서 전 단계 어쩌구 해보세요</StFormHead>
      <StFormWrapper>
        <PreNoteForm question="익명의 독서가(비회원)/000님은 이 책에 어떤 기대를 하고 계신가요?">
          <StTextarea placeholder="답변을 입력해주세요." />
        </PreNoteForm>
        <PreNoteForm question="이 책의 핵심 메시지는 무엇일까요? 그 중 어느 부분들이 OOOOOOOOOO님의 기대를 만족시킬 수 있을까요?">
          <StTextarea placeholder="답변을 입력해주세요." />
        </PreNoteForm>
        <QuestionThree />
      </StFormWrapper>

      {/* 모든 내용이 채워졌을 때 버튼이 활성화되도록 하기 */}
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

const StFormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12.8rem;

  width: 100%;
`;

const StFormHead = styled.h2`
  width: 100%;

  padding: 4.5rem 0 4.5rem 2rem;

  ${({ theme }) => theme.fonts.header3};
`;

const StTextarea = styled.textarea`
  border: none;
  width: 100%;
  height: 15.4rem;

  color: ${({ theme }) => theme.colors.gray100};

  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.white500};
    ${({ theme }) => theme.fonts.body4}
  }
`;

const StNextBtn = styled(Button)`
  margin-top: 10rem;
  padding: 1.6rem 13rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.white400};

  width: 32.5rem;
  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.button};
`;