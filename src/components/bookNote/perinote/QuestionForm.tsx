import styled from "styled-components";

export default function QuestionForm() {
  return (
    <QuestionFormWrapper>
      <StQuestion></StQuestion>
      <StAnswer></StAnswer>
    </QuestionFormWrapper>
  );
}

const QuestionFormWrapper = styled.form``;

const StQuestion = styled.label``;

const StAnswer = styled.input``;
