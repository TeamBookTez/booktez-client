import styled, { css } from "styled-components";

import { IcMore, IcPeriAnswer, IcPeriQuestion } from "../../../assets/icons";
import { PeriNoteTreeNode } from "../../../utils/dataType";
import { Button } from "../../common/styled/Button";
import { PeriNoteInput } from "..";

interface PriorQuestionLayoutProps {
  path: number[];
  node: PeriNoteTreeNode;
  onAddChild: (path: number[], isQuestion: boolean) => void;
  onSetContent: (path: number[], value: string) => void;
  onDeleteChild: (path: number[]) => void;
}

export default function PriorQuestionLayout(props: PriorQuestionLayoutProps) {
  const { path, node, onAddChild, onSetContent, onDeleteChild } = props;
  const isQuestion = node.type === "question";

  const onClickAddChild = (pathArray: number[], isQuestionChecked: boolean) => {
    onAddChild(pathArray, !isQuestionChecked);
  };

  const onChangeSetContent = (pathArray: number[], value: string) => {
    onSetContent(pathArray, value);
  };

  const onClickDeleteChild = (pathArray: number[]) => {
    onDeleteChild(pathArray);
  };

  const toggleMenuList = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const miniMenu = e.currentTarget.nextElementSibling;

    if (miniMenu === null || miniMenu === undefined) return;
    if (!(miniMenu instanceof HTMLElement)) return;

    const whatValue = miniMenu.style.display;

    if (whatValue === "none") miniMenu.style.display = "block";
    else miniMenu.style.display = "none";
  };

  const setSelected = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const menuBtn = e.currentTarget.parentElement;

    if (menuBtn === null || menuBtn === undefined) return;
    if (!(menuBtn instanceof HTMLElement)) return;

    const whatValue = menuBtn.style.display;

    if (whatValue !== "none") menuBtn.style.display = "none";
  };

  const onClickAddQuestion = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    pathArray: number[],
    isQuestionChecked: boolean,
  ) => {
    onClickAddChild(pathArray, isQuestionChecked);
    setSelected(e);
  };

  return (
    <StArticle isquestion={isQuestion}>
      <StFieldset>
        <legend>{isQuestion ? <StQuestionIcon /> : <StAnswerIcon />}</legend>
        <StInput
          value={node.content}
          placeholder={`${isQuestion ? "질문" : "답변"}을 입력해주세요.`}
          onChange={(e) => onChangeSetContent(path, e.target.value)}
        />
        {isQuestion && (
          <StAddAnswerButton type="button" onClick={() => onClickAddChild(path, isQuestion)}>
            답변
          </StAddAnswerButton>
        )}
        <StMoreIcon onClick={toggleMenuList} />
        <StMiniMenu menuposition={"isPriQ"}>
          {!isQuestion && (
            <StMenuBtn type="button" onClick={(e) => onClickAddQuestion(e, path, isQuestion)}>
              꼬리질문 추가
            </StMenuBtn>
          )}
          <StMenuBtn type="button" onClick={() => onClickDeleteChild(path)}>
            삭제
          </StMenuBtn>
        </StMiniMenu>
      </StFieldset>
      {node.children.map((node, i) => (
        <PeriNoteInput
          key={`input-${i}`}
          path={[...path, i]}
          node={node}
          onAddChild={(p, isQ) => onClickAddChild(p, isQ)}
          onSetContent={(p, value) => onChangeSetContent(p, value)}
          onDeleteChild={(p) => onDeleteChild(p)}
          onToggleMenuList={(e) => toggleMenuList(e)}
          onSetSelected={(e) => setSelected(e)}
          onAddQuestion={(e, p, isQ) => onClickAddQuestion(e, p, isQ)}
        />
      ))}
    </StArticle>
  );
}

const StArticle = styled.article<{ isquestion: boolean }>`
  position: relative;

  ${({ isquestion }) =>
    isquestion &&
    css`
      margin-top: 3rem;
    `}

  padding: 2.6rem 4.4rem 2.6rem 9.6rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.white200};
  border-bottom: 0.1rem dashed ${({ theme }) => theme.colors.white400};
  border-radius: 0.8rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const StFieldset = styled.fieldset`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

const StQuestionIcon = styled(IcPeriQuestion)`
  position: absolute;
  top: -1.2rem;
  left: 1.2rem;
`;

const StAnswerIcon = styled(IcPeriAnswer)`
  position: absolute;
  top: 2.7rem;
  left: 3.8rem;
`;

const StInput = styled.input`
  flex: 1;
  ${({ theme }) => theme.fonts.header4}

  &:placeholder {
    color: ${({ theme }) => theme.colors.white500};
  }
`;

export const StAddAnswerButton = styled.button`
  width: 6.6rem;
  height: 3.4rem;

  ${({ theme }) => theme.fonts.caption}
  color: ${({ theme }) => theme.colors.gray400};
`;

export const StMoreIcon = styled(IcMore)`
  &:hover {
    fill: #efefef;
  }
`;

export const StMiniMenu = styled.div<{ menuposition?: string }>`
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

export const StMenuBtn = styled(Button)`
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
