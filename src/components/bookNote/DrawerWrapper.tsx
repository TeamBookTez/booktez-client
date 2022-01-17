import styled, { css, keyframes } from "styled-components";

import { IcBooks, IcLeftArrow } from "../../assets/icons";
import { ImgGraphic } from "../../assets/images";

interface DrawerWrapperProps {
  idx: number;
  isOpen: boolean;
}

interface QaPair {
  question: string;
  answer: string[];
}

export default function DrawerWrapper(props: DrawerWrapperProps) {
  const { idx, isOpen } = props;

  const qaPair: QaPair = { question: "", answer: [""] };

  switch (idx) {
    case 1:
      qaPair.question = "1. 이 책에 어떤 기대를 하고 계신가요?";
      qaPair.answer = [
        "상황에 따라 변하는 '동기'를 한 곳에 잡아 두고 싶고,\n으로의 진행될 모든 업무에 대해 내가 이 일을 왜 하는지 명확하게 할 수 있는 힌트를 얻을 수 있다고 기대하고 있다.",
      ];
      break;
    case 2:
      qaPair.question = "2. 이 책의 핵심 메시지는 무엇일까요?";
      qaPair.answer = [
        "이 책의 핵심은 열정적이고 행복한 삶의 근원이 되는 '왜' 찾는 법을 개인, 조직에 맞게 탐색, 발견, 유지, 공유 방법들에 소개한다.\n나는 개인 수준에서 '왜'를 찾고, 유지할 수 있는 방법이 궁금하다.",
      ];
      break;
    default:
      qaPair.question = "3. 궁금한 내용부터 우선순위 질문 리스트를 만들어보세요";
      qaPair.answer = [
        "왜 why가 중요하다고 주장하는 것일까?",
        "나 자신의 why를 발견하는 방법은 무엇일까?",
        "Why를 항상 살아있게 유지하려면 어떻게 해야할까?",
      ];
      break;
  }

  const { question, answer } = qaPair;

  return (
    <StDrawerWrapper isopen={isOpen}>
      <IcLeftArrow />
      <StImg src={ImgGraphic} />
      <StTitleWrapper>
        <IcBooks />
        나는 왜 이 일을 하는가? 2
      </StTitleWrapper>
      <StArticle>
        <StQuestionWrapper>{question}</StQuestionWrapper>
        <StAnswerWrapper isQ3={idx === 3}>
          {answer.map((answer, i) => {
            if (idx === 3) {
              return <StList key={`ex-answer-${i}`}>{answer}</StList>;
            } else {
              return answer;
            }
          })}
        </StAnswerWrapper>
      </StArticle>
    </StDrawerWrapper>
  );
}

const opentoright = keyframes`
    0% {
      opacity: 0;
      /* transform: translateX(39rem); */
      width: 0;
    }
    100% {
      opacity: 1;
      /* transform: translateX(0); */
      width: 39rem;
    }
`;

const StDrawerWrapper = styled.section<{ isopen: boolean }>`
  ${({ isopen }) =>
    isopen
      ? css`
          animation: ${opentoright} 1s linear;
        `
      : ""}

  display: flex;
  flex-direction: column;
  text-align: center;

  border-radius: 2rem 0 0 2rem;
  box-shadow: 0 0 0.4rem 0 rgba(0, 0, 0, 0.17);

  padding: 3.3rem 3.3rem 5.4rem 3.3rem;

  background-color: ${({ theme }) => theme.colors.white};

  height: 90rem;

  & > svg {
    width: 4.4rem;
    height: 4.4rem;

    margin-bottom: 3.2rem;
  }
`;

const StImg = styled.img`
  width: 32.4rem;
  height: 11.9rem;

  margin-bottom: 3.8rem;

  border-radius: 1.6rem;
`;

const StTitleWrapper = styled.header`
  display: flex;

  ${({ theme }) => theme.fonts.header4};

  margin-bottom: 2rem;

  & > svg {
    width: 2rem;
    height: 2.1rem;

    margin-right: 0.6rem;
  }
`;

const StArticle = styled.article`
  display: flex;
  flex-direction: column;

  border-radius: 2rem;
  padding: 3.2rem;
  background-color: ${({ theme }) => theme.colors.white200};

  width: 32.4rem;
  height: 53.4rem;
`;

const StQuestionWrapper = styled.h2`
  text-align: left;

  ${({ theme }) => theme.fonts.body1}

  margin-bottom: 1.7rem;
`;

const StAnswerWrapper = styled.p<{ isQ3: boolean }>`
  text-align: left;

  ${({ theme }) => theme.fonts.body4};

  border-top: 0.1rem solid ${({ theme }) => theme.colors.white400};
  padding-top: 1.7rem;

  ${({ isQ3 }) =>
    isQ3
      ? css`
          list-style-type: square;
        `
      : css``}
`;

const StList = styled.li`
  margin-left: 0.7rem;
  text-align: start;
`;
