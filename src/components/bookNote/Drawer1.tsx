import styled from "styled-components";

import DrawerWrapper from "./DrawerWrapper";

export default function Drawer1() {
  return (
    <DrawerWrapper>
      <StQuestionWrapper>1. 이 책에 어떤 기대를 하고 계신가요?</StQuestionWrapper>
      <StAnswerWrapper>
        상황에 따라 변하는 &apos;동기&apos;를 한 곳에 잡아 두고 싶고,
        <br /> 앞으로의 진행될 모든 업무에 대해 내가 이 일을 왜 하는지 명확하게 할 수 있는 힌트를 얻을 수 있다고
        기대하고 있다.
      </StAnswerWrapper>
    </DrawerWrapper>
  );
}

const StQuestionWrapper = styled.h2`
  text-align: left;

  ${({ theme }) => theme.fonts.body1}

  margin-bottom: 1.7rem;
`;

const StAnswerWrapper = styled.p`
  text-align: left;

  ${({ theme }) => theme.fonts.body4};

  border-top: 0.1rem solid ${({ theme }) => theme.colors.white400};
  padding-top: 1.7rem;
`;
