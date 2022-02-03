import React from "react";
import styled from "styled-components";

import { IcToggle } from "../../assets/icons";
import theme from "../../styles/theme";
import { AnswerThree } from "../../utils/dataType";
import LabelQuestion from "../common/styled/LabelQuestion";
import LabelQuestion4Depth from "../common/styled/LabelQuestion4Depth";

interface ExamplePreNoteProps {
  answerThree: AnswerThree | undefined;
}

export default function ExamplePeriNote(props: ExamplePreNoteProps) {
  const { answerThree } = props;
  const root = answerThree?.root;

  const handleToggle = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const questionElement = e.currentTarget.closest("h3")?.nextElementSibling;

    if (questionElement === null || questionElement === undefined) return;
    if (!(questionElement instanceof HTMLElement)) return;

    const whatValue = questionElement.style.display;

    if (whatValue === "none") questionElement.style.display = "block";
    else questionElement.style.display = "none";
  };

  return (
    <StExampleWrapper>
      {/* ! depth 0 !  */}
      {root?.map((question0, idx) => (
        <React.Fragment key={`q0-${idx}`}>
          <StFirstQuestion>
            <LabelQuestion bgColor={theme.colors.orange000} />

            {question0.question}
            <StIcToggle onClick={handleToggle} />
          </StFirstQuestion>
          <div>
            {question0.answer?.map((answer0, idx) => (
              <React.Fragment key={`a0-${idx}`}>
                <StAnswer>{answer0.text}</StAnswer>

                {/* ! depth 1 !  */}
                {answer0.children?.map((question1, idx) => (
                  <article key={`q1-${idx}`}>
                    <StQuestion>
                      <LabelQuestion bgColor={theme.colors.orange100} />
                      {question1.question}
                      <StIcToggle onClick={handleToggle} />
                    </StQuestion>
                    <div>
                      {question1.answer?.map((answer1, idx) => (
                        <React.Fragment key={`a1-${idx}`}>
                          <StAnswer>{answer1.text}</StAnswer>

                          {/* ! depth 2 !  */}
                          {answer1.children?.map((question2, idx) => (
                            <article key={`q2-${idx}`}>
                              <StQuestion>
                                <LabelQuestion bgColor={theme.colors.orange300} />
                                {question2.question}
                                <StIcToggle onClick={handleToggle} />
                              </StQuestion>
                              <div>
                                {question2.answer?.map((answer2, idx) => (
                                  <React.Fragment key={`a2-${idx}`}>
                                    <StAnswer>{answer2.text}</StAnswer>

                                    {/* ! depth 3 !  */}
                                    {answer2.children?.map((question3, idx) => (
                                      <article key={`q3-${idx}`}>
                                        <StQuestion>
                                          <LabelQuestion bgColor={theme.colors.orange400} />
                                          {question3.question}
                                          <StIcToggle onClick={handleToggle} />
                                        </StQuestion>
                                        <div>
                                          {question3.answer?.map((answer3, idx) => (
                                            <React.Fragment key={`a3-${idx}`}>
                                              <StAnswer>{answer3.text}</StAnswer>

                                              {/* ! depth 4 !  */}
                                              {answer3.children?.map((question4, idx) => (
                                                <article key={`q4-${idx}`}>
                                                  <StQuestion>
                                                    <LabelQuestion4Depth />
                                                    {question4.question}
                                                    <StIcToggle onClick={handleToggle} />
                                                  </StQuestion>
                                                  <div>
                                                    {question4.answer?.map((answer4, idx) => (
                                                      <React.Fragment key={`a4-${idx}`}>
                                                        <StAnswer>{answer4.text}</StAnswer>
                                                      </React.Fragment>
                                                    ))}
                                                  </div>
                                                </article>
                                              ))}
                                            </React.Fragment>
                                          ))}
                                        </div>
                                      </article>
                                    ))}
                                  </React.Fragment>
                                ))}
                              </div>
                            </article>
                          ))}
                        </React.Fragment>
                      ))}
                    </div>
                  </article>
                ))}
              </React.Fragment>
            ))}
          </div>
        </React.Fragment>
      ))}
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

const StQuestion = styled.h3`
  display: flex;
  align-items: center;

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

const StIcToggle = styled(IcToggle)`
  min-width: 2.6rem;
  margin-left: 1.6rem;
  &:hover {
    cursor: pointer;
  }
`;

const StAnswer = styled.h4`
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
