import React from "react";
import styled from "styled-components";

import { IcMore } from "../../../assets/icons";
import { AnswerProps } from "./PairsWrapper";
import { PairsProps } from "./PeriNote";

interface AnswerInputProps {
  depthOneAnswer: AnswerProps;
  depthOneOrder: number;
  pairsList: PairsProps[];
  setPairsList: React.Dispatch<React.SetStateAction<PairsProps[]>>;
}
export default function AnswerInput(props: AnswerInputProps) {
  const { depthOneAnswer, depthOneOrder, pairsList, setPairsList } = props;

  const currentAnswer = depthOneAnswer.text;

  return (
    <StWrapper>
      <StAnswer placeholder="답변을 입력해주세요" value={currentAnswer} />
      <IcMore />
    </StWrapper>
  );
}

const StWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StAnswer = styled.input``;
