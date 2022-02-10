import styled from "styled-components";

import { PeriNoteTreeNode } from "./PeriNote";

interface PeriNoteInputProps {
  path: number[];
  node: PeriNoteTreeNode;
  onAddChild: (path: number[], isQuestion: boolean) => void;
  onSetContent: (path: number[], value: string) => void;
  onDeleteChild: (path: number[]) => void;
}
export default function PeriNoteInput(props: PeriNoteInputProps) {
  const { path, node, onAddChild, onSetContent, onDeleteChild } = props;
  const isQuestion = node.type === "question";

  const onClickAddChild = (isQuestion: boolean) => {
    onAddChild(path, isQuestion);
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
        <legend>{isQuestion ? "질문" : "답변"}</legend>
        <input value={node.content} onChange={onChangeSetContent} />
        <button type="button" onClick={() => onClickAddChild(isQuestion)}>
          {isQuestion ? "답변" : "꼬리 질문"}
        </button>
        <button type="button" onClick={onClickDeleteChild}>
          삭제
        </button>
      </fieldset>
      <StFieldWrapper>
        {node.children.map((node, i) => (
          <PeriNoteInput
            key={`input-${i}`}
            path={[...path, i]}
            node={node}
            onAddChild={(path, isQ) => onAddChild(path, isQ)}
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
