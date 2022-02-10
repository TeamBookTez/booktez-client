import styled from "styled-components";

import { IcMore } from "../../../assets/icons";
import { PeriNoteTreeNode } from "./PeriNote";

interface PeriNoteInputProps {
  idx: number;
  path: number[];
  node: PeriNoteTreeNode;
  onAddChild: (path: number[], type: string) => void;
  onSetContent: (path: number[], value: string) => void;
  onDeleteChild: (path: number[]) => void;
}
export default function PeriNoteInput(props: PeriNoteInputProps) {
  const { idx, path, node, onAddChild, onSetContent, onDeleteChild } = props;

  const onClickAddChild = (type: string) => {
    onAddChild(path, type);
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
        <legend>
          {node.type === "question" ? "질문" : "답변"} {idx}
        </legend>
        <input value={node.content} onChange={onChangeSetContent} />
        <button type="button" onClick={() => onClickAddChild("answer")}>
          답변
        </button>
        <StMoreButton type="button" onClick={onClickDeleteChild}>
          삭제
        </StMoreButton>
      </fieldset>
      <StFieldWrapper>
        {node.children.map((node, i) => (
          <PeriNoteInput
            key={`input-${idx}-${i}`}
            idx={i}
            path={[...path, i]}
            node={node}
            onAddChild={(path, type) => onAddChild(path, type)}
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

const StMoreButton = styled(IcMore)``;
