import styled from "styled-components";

import { FormListInfo } from "./PeriNote";

interface QuestionFormInfo {
  formList: FormListInfo;
}
export default function QuestionForm(props: QuestionFormInfo) {
  const { formList } = props;
  const { question, answer, depth } = formList;

  console.log(answer);

  return (
    <QuestionFormWrapper>
      <StQuestion>{question}</StQuestion>
      <StAnswer></StAnswer>
    </QuestionFormWrapper>
  );
}

const QuestionFormWrapper = styled.div``;

const StQuestion = styled.label``;

const StAnswer = styled.input``;
