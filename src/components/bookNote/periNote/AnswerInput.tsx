import React from "react";
import styled from "styled-components";

interface AnswerInputProps {
  children: React.ReactNode;
}
export default function AnswerInput(props: AnswerInputProps) {
  const { children } = props;

  return <StAnswerInput>{children}</StAnswerInput>;
}

const StAnswerInput = styled.input``;
