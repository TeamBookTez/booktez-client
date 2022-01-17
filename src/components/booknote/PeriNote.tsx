import React from "react";
import styled from "styled-components";

import { IcGuide, IcRightArrow } from "../../assets/icons";

export default function PeriNote() {
  return (
    <StNoteForm>
      <StHeadWrapper>
        <StHead>구조화된 질문과 답변을 만들어 우선순위 독서를 해보세요!</StHead>
        {/* 밑에 두개는 소령이걸로 변경될 예정 */}
        <IcGuide />
        <IcRightArrow />
      </StHeadWrapper>
      <StAddBtn>+ 질문 리스트 추가</StAddBtn>
      <StNextBtn>작성 완료</StNextBtn>
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

const StHeadWrapper = styled.header`
  display: flex;

  width: 100%;

  padding: 4.5rem 0 4.5rem 2rem;

  ${({ theme }) => theme.fonts.header3};
`;

const StHead = styled.h2``;

const StAddBtn = styled.button`
  width: 100%;
  height: 7rem;

  margin-bottom: 8.5rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.white400};
  border-radius: 1.6rem;

  ${({ theme }) => theme.fonts.button};

  background-color: ${({ theme }) => theme.colors.white};
`;
const StNextBtn = styled.button`
  padding: 1.6rem 13rem;

  border-radius: 1rem;

  ${({ theme }) => theme.fonts.button};
  background-color: ${({ theme }) => theme.colors.white400};
`;
