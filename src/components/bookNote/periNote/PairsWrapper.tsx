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

export default function PairsWrapper(props: PairsWrapperProps) {
  const { order, pairs, pairsList, setPairsList } = props;
  //pairs로 구조분해 할당(answer,depth,question)도 가능하나 일단 생략.

  return (
    <StFormWrapper>
      <QuestionInput setPairsList={setPairsList} order={order} pairsList={pairsList} />
      {/* <AnswerInput setPairsList={setPairsList} order={order} pairsList={pairsList} /> */}
      {/* {answerChildren.map((child: FormListInfo, idx: number) => (
        <FormWrapper formList={child} key={idx} />
      ))} */}
    </StFormWrapper>
  );
}

const StFormWrapper = styled.article`
  width: 100%;

  ${({ theme }) => theme.fonts.header4};
`;
