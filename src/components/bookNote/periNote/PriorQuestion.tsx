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

  const handleClickAddChild = (pathArray: number[], isQuestionChecked: boolean) => {
    onAddChild(pathArray, !isQuestionChecked);
  };

  const handleChangeSetContent = (pathArray: number[], value: string) => {
    onSetContent(pathArray, value);
  };

  const handleClickDeleteChild = (pathArray: number[]) => {
    onDeleteChild(pathArray);
  };

  const onClickAddQuestion = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    pathArray: number[],
    isQuestionChecked: boolean,
  ) => {
    handleClickAddChild(pathArray, isQuestionChecked);
  };

  const onAddChildByEnter = (e: React.KeyboardEvent<HTMLInputElement>, pathArray: number[]) => {
    if (e.key === "Enter") {
      handleClickAddChild(pathArray, !isQuestion);
    }
  };

  return (
    <StArticle isquestion={isQuestion}>
      <StFieldset hasborder={!isQuestion && node.children.length > 0}>
        <legend>{isQuestion ? <StQuestionIcon /> : <StAnswerIcon />}</legend>
        <StInput
          value={node.content}
          placeholder={`${isQuestion ? "질문" : "답변"}을 입력해주세요.`}
          onChange={(e) => handleChangeSetContent(path, e.target.value)}
          onKeyPress={(e) => onAddChildByEnter(e, path)}
        />
        {isQuestion && (
          <StAddAnswerButton type="button" onClick={() => handleClickAddChild(path, isQuestion)}>
            답변
          </StAddAnswerButton>
        )}
        <StMoreIcon className="icn_more" />
        <StMenu menuposition={"isPriQ"}>
          {!isQuestion && (
            <StMenuBtn type="button" onClick={(e) => onClickAddQuestion(e, path, isQuestion)}>
              꼬리질문 추가
            </StMenuBtn>
          )}
          <StMenuBtn type="button" onClick={() => handleClickDeleteChild(path)}>
            삭제
          </StMenuBtn>
        </StMenu>
      </StFieldset>
      {node.children &&
        node.children.map((node, i) => (
          <PeriNoteInput
            key={`input-${i}`}
            path={[...path, i]}
            node={node}
            onAddChild={(p, isQ) => handleClickAddChild(p, isQ)}
            onSetContent={(p, value) => handleChangeSetContent(p, value)}
            onDeleteChild={(p) => onDeleteChild(p)}
            onAddQuestion={(e, p, isQ) => onClickAddQuestion(e, p, isQ)}
            onAddChildByEnter={(e, p) => onAddChildByEnter(e, p)}
          />
        ))}
    </StArticle>
  );
}

const StArticle = styled.article<{ isquestion: boolean }>`
  position: relative;

  border: 0.1rem solid ${({ theme }) => theme.colors.white200};
  border-radius: 0.8rem;
  padding: 2.6rem 4.4rem 2.6rem 2.8rem;

  background-color: ${({ theme }) => theme.colors.white};

  // 방식 조금 더 고민해보기
  /* &:focus-within {
    border-color: ${({ theme }) => theme.colors.orange100};
  } */

  ${({ isquestion }) =>
    isquestion &&
    css`
      margin-top: 3rem;
      border-bottom: 0.1rem dashed ${({ theme }) => theme.colors.white400};
    `}
`;

const StFieldset = styled.fieldset<{ hasborder: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-left: 6.8rem;

  ${({ hasborder, theme }) =>
    hasborder &&
    css`
      border-bottom: 0.2rem solid ${theme.colors.white200};
      padding-bottom: 2.8rem;
    `}

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
  margin-right: 1.6rem;

  &:hover {
    fill: #efefef;
  }
`;

export const StMenu = styled.div<{ menuposition?: string }>`
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
