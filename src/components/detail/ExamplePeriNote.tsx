import React from "react";
import styled from "styled-components";

import theme from "../../styles/theme";
import { AnswerThree } from "../../utils/dataType";
import LabelQuestion from "../common/styled/LabelQuestion";

interface ExamplePreNoteProps {
  answerThree: AnswerThree | undefined;
}

export default function ExamplePeriNote(props: ExamplePreNoteProps) {
  const { answerThree } = props;
  const root = answerThree?.root;

  console.log(root);

  return (
    <StExampleWrapper>
      {/* ! depth 1 !  */}
      {root?.map((question1, idx) => (
        <React.Fragment key={`q1-${idx}`}>
          <StFirstQuestion>
            <LabelQuestion bgColor={theme.colors.orange100} />
            {question1.question}
          </StFirstQuestion>
          {question1.answer?.map((answer1, idx) => (
            <React.Fragment key={`a1-${idx}`}>
              <StAnswer>{answer1.text}</StAnswer>
              {/* ! depth 2 !  */}
              {answer1.children?.map((question2, idx) => (
                <article key={`q2-${idx}`}>
                  <StFirstQuestion>
                    <LabelQuestion bgColor={theme.colors.orange200} />
                    {question2.question}
                  </StFirstQuestion>
                  {question2.answer?.map((answer2, idx) => (
                    <React.Fragment key={`a2-${idx}`}>
                      <StAnswer>{answer2.text}</StAnswer>
                      {/* ! depth 3 !  */}
                      {answer2.children?.map((question3, idx) => (
                        <article key={`q3-${idx}`}>
                          <StFirstQuestion>
                            <LabelQuestion bgColor={theme.colors.orange300} />
                            {question3.question}
                          </StFirstQuestion>
                          {question3.answer?.map((answer3, idx) => (
                            <React.Fragment key={`a3-${idx}`}>
                              <StAnswer>{answer3.text}</StAnswer>
                              {/* ! depth 4 !  */}
                            </React.Fragment>
                          ))}
                        </article>
                      ))}
                    </React.Fragment>
                  ))}
                </article>
              ))}
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
      <StFirstQuestion>
        <LabelQuestion bgColor={theme.colors.orange100} />
        QQQQQQQQ
      </StFirstQuestion>
      <StAnswer>AAAAAAA</StAnswer>
      <article>
        <StQuestion>
          <LabelQuestion bgColor={theme.colors.orange100} />
          QQQQQQQQ
        </StQuestion>
        <StAnswer>AAAAAAA</StAnswer>
      </article>
      <StFirstQuestion>
        <LabelQuestion bgColor={theme.colors.orange100} />
        QQQQQQQQ
      </StFirstQuestion>
      <StAnswer>AAAAAAA</StAnswer>
      <article>
        <StQuestion>
          <LabelQuestion bgColor={theme.colors.orange100} />
          QQQQQQQQ
        </StQuestion>
        <StAnswer>AAAAAAA</StAnswer>
      </article>
    </StExampleWrapper>
  );
}

const StExampleWrapper = styled.article`
  width: 100%;

  margin-top: 1.2rem;
  padding: 3rem;

  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.colors.white};

  /* 선 추가는 여기서 &::before {} 로 */
  & article {
    padding-left: 5.6rem;
  }
`;

const StQuestion = styled.ul`
  margin-top: 2.3rem;

  ${({ theme }) => theme.fonts.body2};
  line-height: 2.6rem;
  color: ${({ theme }) => theme.colors.gray200};
`;

const StFirstQuestion = styled(StQuestion)`
  margin-top: 4.6rem;

  &:first-child {
    margin-top: 0;
  }
`;

const StAnswer = styled.li`
  list-style: none;

  position: relative;

  margin-top: 1.7rem;
  padding-left: 5.7rem;

  ${({ theme }) => theme.fonts.body3}
  color: ${({ theme }) => theme.colors.gray400};
  white-space: pre-wrap;

  &::before {
    content: "";
    position: absolute;
    left: 3.4rem;
    top: 0.82rem;

    width: 0.7rem;
    height: 0.7rem;

    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.gray400};
  }
`;

// export const StQuestion = styled.ul`
//   margin-top: 2.4rem;

//   ${({ theme }) => theme.fonts.body2};
//   line-height: 2.6rem;
//   color: ${({ theme }) => theme.colors.gray200};
// `;

// export const StAnswer = styled.li`
//   list-style: none;

//   position: relative;

//   margin-top: 1.7rem;
//   padding-left: 5.7rem;

//   ${({ theme }) => theme.fonts.body3}
//   color: ${({ theme }) => theme.colors.gray400};

//   &::before {
//     content: "";
//     position: absolute;
//     left: 3.4rem;
//     top: 0.82rem;

//     width: 0.7rem;
//     height: 0.7rem;

//     border-radius: 1rem;
//     background-color: ${({ theme }) => theme.colors.gray400};
//   }
// `;
