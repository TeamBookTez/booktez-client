import styled from "styled-components";

import { IcMore } from "../../../assets/icons";
import { PeriNoteTreeNode } from "../../../utils/dataType";

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

  const toggleMenuList = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const miniMenu = e.currentTarget.nextElementSibling;

    if (miniMenu === null || miniMenu === undefined) return;
    if (!(miniMenu instanceof HTMLElement)) return;

    const whatValue = miniMenu.style.display;

    if (whatValue === "none") miniMenu.style.display = "block";
    else miniMenu.style.display = "none";
  };

  const handleSelected = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const menuBtn = e.currentTarget.parentElement;

    if (menuBtn === null || menuBtn === undefined) return;
    if (!(menuBtn instanceof HTMLElement)) return;

    const whatValue = menuBtn.style.display;

    if (whatValue !== "none") menuBtn.style.display = "none";
  };

  const onClickAddQuestion = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onAddChild(path, isQuestion);
    handleSelected(e);
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
        <StMoreIcon onClick={toggleMenuList} />
        <StMiniMenu menuposition={"isPriQ"}>
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
          />
        ))}
      </StFieldWrapper>
    </>
  );
}

const StMoreIcon = styled(IcMore)`
  &:hover {
    fill: #efefef;
  }
`;

const StMiniMenu = styled.div<{ menuposition?: string }>`
  display: none;

  position: absolute;
  top: ${({ menuposition }) => (menuposition === "isPriQ" ? "6rem" : menuposition === "isPriA" ? "2.9rem" : "4.3rem")};
  right: ${({ menuposition }) => (menuposition === "isPriQ" ? "4.4rem" : "1.6rem")};
  z-index: 10;

  border: 0.1rem solid ${({ theme }) => theme.colors.gray200};
  border-radius: 0.8rem;
  padding: 0.4rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

const StFieldWrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin-left: 7.6rem;
`;
