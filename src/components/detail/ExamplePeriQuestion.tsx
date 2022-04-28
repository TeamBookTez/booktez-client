import styled from "styled-components";

import { PeriNoteTreeNode } from "../../utils/dataType";
import { labelColorList } from "../bookNote/periNote/PeriNoteInput";
import LabelQuestion from "../common/LabelQuestion";
import { StQuestion } from "../common/styled/Question";
import { StIcToggle } from "../common/styled/Toggle";

interface ExamplePeriQuestionProps {
  node: PeriNoteTreeNode;
  path: number[];
  onToggle: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

export default function ExamplePeriQuestion(props: ExamplePeriQuestionProps) {
  const { node, path, onToggle } = props;
  const isAnswer = node.type === "answer";
  const labelColor = labelColorList[(path.length + 1) % 10];

  return (
    <>
      {isAnswer ? (
        <>
          <StAnswer>{node.content ? node.content : "답변"}</StAnswer>
          <article>
            {node.children.map((n, i) => (
              <ExamplePeriQuestion key={i} node={n} path={[...path, i]} onToggle={onToggle} />
            ))}
          </article>
        </>
      ) : (
        <>
          <StQuestion>
            <LabelQuestion bgColor={labelColor} />
            {node.content ? node.content : "질문"}
            <StIcToggle onClick={onToggle} />
          </StQuestion>
          <div>
            {node.children.map((n, i) => (
              <ExamplePeriQuestion key={i} node={n} path={[...path, i]} onToggle={onToggle} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

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
