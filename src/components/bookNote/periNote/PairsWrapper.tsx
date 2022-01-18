import styled from "styled-components";

import { PairsProps } from "./PeriNote";
import QuestionInput from "./QuestionInput";

interface PairsWrapperProps {
  pairs: PairsProps;
}
export default function PairsWrapper(props: PairsWrapperProps) {
  const { pairs } = props;
  const { question, answer, depth } = pairs;

  const answerText = answer[0].text;
  const answerChildren = answer[0].children;

  return (
    <StFormWrapper>
      <QuestionInput question={question} />
      {/* <StAnswer>{answerText}</StAnswer> */}
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
