import styled from "styled-components";

import { PeriNoteTreeNode } from "../../../utils/dataType";
import { StMiniMenu, StMoreIcon } from "./PriorQuestion";

interface PeriNoteInputProps {
  path: number[];
  node: PeriNoteTreeNode;
  onAddChild: (path: number[], isQuestion: boolean) => void;
  onSetContent: (path: number[], value: string) => void;
  onDeleteChild: (path: number[]) => void;
  onToggleMenuList: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  onSetSelected: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export default function PeriNoteInput(props: PeriNoteInputProps) {
  const { path, node, onAddChild, onSetContent, onDeleteChild, onToggleMenuList, onSetSelected } = props;
  const isQuestion = node.type === "question";

  const onClickAddQuestion = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onAddChild(path, isQuestion);
    onSetSelected(e);
  };

  return (
    <>
      <fieldset>
        <legend>{isQuestion ? "질문" : "답변"}</legend>
        <input
          value={node.content}
          placeholder={`${isQuestion ? "질문" : "답변"}을 입력해주세요.`}
          onChange={(e) => onSetContent(path, e.target.value)}
        />
        {isQuestion && (
          <button type="button" onClick={() => onAddChild(path, isQuestion)}>
            답변
          </button>
        )}
        <StMoreIcon onClick={onToggleMenuList} />
        <StMiniMenu>
          {!isQuestion && (
            <button type="button" onClick={onClickAddQuestion}>
              꼬리질문 추가
            </button>
          )}
          <button type="button" onClick={() => onDeleteChild(path)}>
            삭제
          </button>
        </StMiniMenu>
      </fieldset>
      <StFieldWrapper>
        {node.children.map((node, i) => (
          <PeriNoteInput
            key={`input-${i}`}
            path={[...path, i]}
            node={node}
            onAddChild={(p, isQ) => onAddChild(p, isQ)}
            onSetContent={(p, value) => onSetContent(p, value)}
            onDeleteChild={(p) => onDeleteChild(p)}
            onToggleMenuList={(e) => onToggleMenuList(e)}
            onSetSelected={(e) => onSetSelected(e)}
          />
        ))}
      </StFieldWrapper>
    </>
  );
}

const StFieldWrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin-left: 7.6rem;
`;
