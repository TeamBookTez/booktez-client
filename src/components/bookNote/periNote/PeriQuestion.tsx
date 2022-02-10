import styled from "styled-components";

import { PeriNoteTreeNode } from "./PeriNote";

interface PeriQuestionProps {
  idx: number;
  path: number[];
  node: PeriNoteTreeNode;
  onAddChild: (path: number[]) => void;
  onSetContent: (path: number[], value: string) => void;
  onDeleteChild: (path: number[]) => void;
}
export default function PeriQuestion(props: PeriQuestionProps) {
  const { idx, path, node, onAddChild, onSetContent, onDeleteChild } = props;

  const onClickAddChild = () => {
    onAddChild(path);
  };

  const onChangeSetContent = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSetContent(path, event.target.value);
  };

  const onClickDeleteChild = () => {
    onDeleteChild(path);
  };

  return (
    <>
      <fieldset>
        <legend>질문 {idx}</legend>
        <input value={node.content} onChange={onChangeSetContent} />
        <button type="button" onClick={onClickAddChild}>
          꼬리 질문
        </button>
        <button type="button" onClick={onClickDeleteChild}>
          삭제
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
            onDeleteChild={(path) => onDeleteChild(path)}
          />
        ))}
      </StFieldWrapper>
    </>
  );
}

const StFieldWrapper = styled.article`
  padding-left: 2rem;
`;
