import React from "react";
import styled from "styled-components";

import { IcMore } from "../../../assets/icons";
import { AnswerProps } from "./PairsWrapper";
import { PairsProps } from "./PeriNote";

interface AnswerInputProps {
  depthOneAnswer: AnswerProps;
  depthOneAnswerArray: AnswerProps[];
  order: number;
  depthOneOrder: number;
  pairsList: PairsProps[];
  setPairsList: React.Dispatch<React.SetStateAction<PairsProps[]>>;
}
export default function AnswerInput(props: AnswerInputProps) {
  const { depthOneAnswer, depthOneAnswerArray, order, depthOneOrder, pairsList, setPairsList } = props;
  //depthOneAnswer로 구조분해 할당(text, children)도 가능하나 일단 생략.

  const currentAnswerObj = depthOneAnswerArray[depthOneOrder]; // = depthOneAnswer;
  const currentAnswer = currentAnswerObj.text;

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newObj = {
      ...currentAnswerObj,
      text: e.currentTarget.value,
    };

    const newArray = [...pairsList];

    newArray[order].answer[depthOneOrder] = newObj;

    setPairsList(newArray);

    console.log(pairsList);
  };

  return (
    <StWrapper>
      <StAnswer placeholder="답변을 입력해주세요" value={currentAnswer} onChange={handleAnswerChange} />
      <IcMore />
    </StWrapper>
  );
}

const StWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StAnswer = styled.input``;
