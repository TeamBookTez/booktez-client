import styled from "styled-components";

import { IcMore } from "../../../assets/icons";
import { PeriNoteTreeNode } from "../../../utils/dataType";
import { Button } from "../../common/styled/Button";

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
    onAddChild(path, !isQuestion);
  };

  const onChangeSetContent = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSetContent(path, event.target.value);
  };

  const onClickDeleteChild = () => {
    onDeleteChild(path);
  };

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
    onClickAddChild(isQuestion);
    handleSelected(e);
  };

  return (
    <>
      <StFieldset>
        <legend>{isQuestion ? "질문" : "답변"}</legend>
        <StInput
          value={node.content}
          placeholder={`${isQuestion ? "질문" : "답변"}을 입력해주세요.`}
          onChange={onChangeSetContent}
        />
        {isQuestion && (
          <StAddAnswerButton type="button" onClick={() => onClickAddChild(isQuestion)}>
            답변
          </StAddAnswerButton>
        )}
        <StMoreIcon onClick={toggleMenuList} />
        <StMiniMenu menuposition={"isPriQ"}>
          {!isQuestion && (
            <StMenuBtn type="button" onClick={onClickAddQuestion}>
              꼬리질문 추가
            </StMenuBtn>
          )}
          <StMenuBtn type="button" onClick={onClickDeleteChild}>
            삭제
          </StMenuBtn>
        </StMiniMenu>
      </StFieldset>
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

const StFieldset = styled.fieldset`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  & > legend {
    display: none;
  }
`;
const StInput = styled.input`
  flex: 1;
  ${({ theme }) => theme.fonts.header4}

  &:placeholder {
    color: ${({ theme }) => theme.colors.white500};
  }
`;

const StAddAnswerButton = styled.button`
  width: 6.6rem;
  height: 3.4rem;

  ${({ theme }) => theme.fonts.caption}
  color: ${({ theme }) => theme.colors.gray400};
`;

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

const StMenuBtn = styled(Button)`
  border-radius: 0.8rem;
  background-color: transparent;
  width: 9.5rem;
  height: 3.8rem;
  ${({ theme }) => theme.fonts.caption}
  color: ${({ theme }) => theme.colors.gray200};

  &:hover {
    background-color: ${({ theme }) => theme.colors.white300};
  }
`;

const StFieldWrapper = styled.article`
  padding-left: 2rem;
`;
