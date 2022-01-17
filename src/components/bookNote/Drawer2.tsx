import styled from "styled-components";

import DrawerWrapper from "./DrawerWrapper";

export default function Drawer2() {
  return (
    <DrawerWrapper>
      <StQuestionWrapper>2. 이 책의 핵심 메시지는 무엇일까요?</StQuestionWrapper>
      <StAnswerWrapper>
        이 책의 핵심은 열정적이고 행복한 삶의 근원이 되는 &apos;왜&apos; 찾는 법을 개인, 조직에 맞게 탐색, 발견, 유지,
        공유 방법들에 소개한다.
        <br /> 나는 개인 수준에서 &apos;왜&apos;를 찾고, 유지할 수 있는 방법이 궁금하다.
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
