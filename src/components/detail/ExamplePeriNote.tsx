import React from "react";
import styled from "styled-components";

import { IcToggle } from "../../assets/icons";
import theme from "../../styles/theme";
import { PeriNoteTreeNode } from "../../utils/dataType";
import LabelQuestion from "../common/styled/LabelQuestion";
import { ExamplePeriQuestion } from ".";

interface ExamplePreNoteProps {
  answerThree: PeriNoteTreeNode;
}

export default function ExamplePeriNote(props: ExamplePreNoteProps) {
  const { answerThree } = props;

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
      {answerThree.children &&
        answerThree.children.map((question, index) => (
          <React.Fragment key={index}>
            <StFirstQuestion>
              <LabelQuestion bgColor={theme.colors.orange000} />
              {question.content}
              <StIcToggle onClick={handleToggle} />
            </StFirstQuestion>
            <div>
              {question.children.map((node, idx) => (
                <ExamplePeriQuestion key={idx} node={node} path={[idx]} onToggle={handleToggle} />
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

export const StQuestion = styled.h3`
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

export const StIcToggle = styled(IcToggle)`
  min-width: 2.6rem;
  margin-left: 1.6rem;
  &:hover {
    cursor: pointer;
  }
`;
