import React from "react";
import styled from "styled-components";

interface QuestionInputProps {
  children: React.ReactNode;
}

export default function QuestionInput(props: QuestionInputProps) {
  const { children } = props;

  return <StQuestionInput>{children}</StQuestionInput>;
}

const StQuestionInput = styled.input``;
