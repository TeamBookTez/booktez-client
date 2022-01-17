import styled from "styled-components";

import DrawerWrapper from "./DrawerWrapper";

export default function Drawer3() {
  return (
    <DrawerWrapper>
      <StQuestionWrapper>3. 궁금한 내용부터 우선순위 질문 리스트를 만들어보세요</StQuestionWrapper>
      <StAnswerWrapper>
        <StList>왜 why가 중요하다고 주장하는 것일까?</StList>
        <StList>나 자신의 why를 발견하는 방법은 무엇일까?</StList>
        <StList>Why를 항상 살아있게 유지하려면 어떻게 해야할까?</StList>
      </StAnswerWrapper>
    </DrawerWrapper>
  );
}

const StQuestionWrapper = styled.h2`
  text-align: left;

  ${({ theme }) => theme.fonts.body1}

  margin-bottom: 1.7rem;
`;

const StAnswerWrapper = styled.ul`
  text-align: left;

  ${({ theme }) => theme.fonts.body4};

  border-top: 0.1rem solid ${({ theme }) => theme.colors.white400};
  padding-top: 1.7rem;

  list-style-type: square;
`;

const StList = styled.li`
  margin-left: 3rem;
`;
