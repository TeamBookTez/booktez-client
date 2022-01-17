import styled from "styled-components";

import { FormListInfo } from "./PeriNote";

interface QuestionFormInfo {
  formList: FormListInfo;
}
export default function QuestionForm(props: QuestionFormInfo) {
  const { formList } = props;
  const { question, answer, depth } = formList;

  const answerText = answer[0].text;
  const answerChildren = answer[0].children;

  console.log(answerChildren);

  return (
    <QuestionFormWrapper>
      <StQuestion>{question}</StQuestion>
      <StAnswer>{answerText}</StAnswer>
      {answerChildren.map((child: FormListInfo, idx: number) => (
        <QuestionForm formList={child} key={idx} />
      ))}
    </QuestionFormWrapper>
  );
}

const QuestionFormWrapper = styled.div`
  width: 100%;

  ${({ theme }) => theme.fonts.header4};
`;

const StQuestion = styled.div``;

const StAnswer = styled.div``;
