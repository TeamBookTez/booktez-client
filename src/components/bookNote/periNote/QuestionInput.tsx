import React, { useState } from "react";
import styled from "styled-components";

import { IcMore } from "../../../assets/icons";

interface QuestionInputProps {
  question: string;
}

export default function QuestionInput(props: QuestionInputProps) {
  const { question } = props;

  const [modifyQuestion, setModifyQuestion] = useState<string>(question);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModifyQuestion(e.currentTarget.value);
  };

  return (
    <StWrapper>
      <StQuestion placeholder="질문을 입력해주세요" value={modifyQuestion} onChange={handleChange} />
      <StAnswerBtn>답변</StAnswerBtn>
      <IcMore />
    </StWrapper>
  );
}

const StWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StQuestion = styled.input`
  width: 80rem; // 임시 코드

  background-color: white; // 임시 코드
  ${({ theme }) => theme.fonts.header4};
`;

const StAnswerBtn = styled.button``;
