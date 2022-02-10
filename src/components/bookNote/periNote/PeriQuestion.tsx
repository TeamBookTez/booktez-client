import styled from "styled-components";

import { PeriNoteTreeNode } from "./PeriNote";

interface PeriQuestionProps {
  idx: number;
  path: number[];
  node: PeriNoteTreeNode;
  onAddChild: (path: number[]) => void;
  onSetContent: (path: number[], value: string) => void;
}
export default function PeriQuestion(props: PeriQuestionProps) {
  const { idx, path, node, onAddChild, onSetContent } = props;

  const onClickAddChild = () => {
    onAddChild(path);
  };

  const onChangeSetContent = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSetContent(path, event.target.value);
  };

  return (
    <>
      <fieldset>
        <legend>질문 {idx}</legend>
        <input value={node.content} onChange={onChangeSetContent} />
        <button type="button" onClick={onClickAddChild}>
          꼬리 질문
        </button>
      </fieldset>
      <StFieldWrapper>
        {node.children.map((node, i) => (
          <PeriQuestion
            key={`input-${idx}-${i}`}
            idx={i}
            path={[...path, i]}
            node={node}
            onAddChild={(path) => onAddChild(path)}
            onSetContent={(path, value) => onSetContent(path, value)}
          />
        ))}
      </StFieldWrapper>
    </>
  );
}

const StFieldWrapper = styled.article`
  padding-left: 2rem;
`;
