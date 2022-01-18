import styled from "styled-components";

import { IcMore } from "../../../assets/icons";
import { PairsProps } from "./PeriNote";

interface QuestionInputProps {
  order: number;
  pairsList: PairsProps[];
  setPairsList: React.Dispatch<React.SetStateAction<PairsProps[]>>;
}

export default function QuestionInput(props: QuestionInputProps) {
  const { order, pairsList, setPairsList } = props;

  const currentQuestionObj = pairsList[order];
  const currentQuestion = currentQuestionObj.question;

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newObj = {
      ...currentQuestionObj,
      question: e.currentTarget.value,
    };

    const newArray = [...pairsList];

    newArray[order] = newObj;

    setPairsList(newArray);
  };

  return (
    <StWrapper>
      <StQuestion placeholder="질문을 입력해주세요" value={currentQuestion} onChange={handleQuestionChange} />
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
