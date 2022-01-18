import styled from "styled-components";

import AnswerInput from "./AnswerInput";
import { PairsProps } from "./PeriNote";
import QuestionInput from "./QuestionInput";

interface PairsWrapperProps {
  order: number;
  pairs: PairsProps;
  pairsList: PairsProps[];
  setPairsList: React.Dispatch<React.SetStateAction<PairsProps[]>>;
}

export interface AnswerProps {
  text: string;
  children: any;
}
export default function PairsWrapper(props: PairsWrapperProps) {
  const { order, pairs, pairsList, setPairsList } = props;
  //pairs로 구조분해 할당(answer,depth,question)도 가능하나 일단 생략.

  const currentObj = pairsList[order];

  //AnswerInput mapping을 위한 코드
  const depthOneAnswerArray = currentObj.answer;

  return (
    <StFormWrapper>
      {/* props의 depth가 깊어지는 문제가 있음 */}
      <QuestionInput order={order} setPairsList={setPairsList} pairsList={pairsList} />
      {depthOneAnswerArray.map((depthOneAnswer: AnswerProps, idx: number) => (
        <AnswerInput
          key={idx}
          depthOneAnswer={depthOneAnswer}
          depthOneOrder={idx}
          setPairsList={setPairsList}
          pairsList={pairsList}
        />
      ))}
    </StFormWrapper>
  );
}

const StFormWrapper = styled.article`
  width: 100%;

  ${({ theme }) => theme.fonts.header4};
`;
