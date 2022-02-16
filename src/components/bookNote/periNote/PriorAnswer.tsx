import { useEffect, useRef } from "react";
import styled, { css } from "styled-components";

import { IcPeriAnswer } from "../../../assets/icons";
import { PeriNoteTreeNode } from "../../../utils/dataType";
import { PeriNoteInput } from "..";
import { StMenu, StMenuBtn, StMoreIcon } from "./PriorQuestion";

interface PriorAnswerProps {
  path: number[];
  node: PeriNoteTreeNode;
  onAddChild: (path: number[], isQuestion: boolean) => void;
  onSetContent: (path: number[], value: string) => void;
  onDeleteChild: (path: number[]) => void;
}

export default function PriorAnswer(props: PriorAnswerProps) {
  const { path, node, onAddChild, onSetContent, onDeleteChild } = props;
  const isQuestion = false;

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickAddChild = (pathArray: number[], isQuestionChecked: boolean) => {
    onAddChild(pathArray, isQuestionChecked);
  };

  const handleChangeSetContent = (pathArray: number[], value: string) => {
    onSetContent(pathArray, value);
  };

  const handleClickDeleteChild = (pathArray: number[]) => {
    onDeleteChild(pathArray);
  };

  const handleClickAddQuestion = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    pathArray: number[],
    isQuestionChecked: boolean,
  ) => {
    handleClickAddChild(pathArray, isQuestionChecked);
  };

  const handleAddChildByEnter = (
    e: React.KeyboardEvent<HTMLInputElement>,
    pathArray: number[],
    isQuestionChecked: boolean,
  ) => {
    const p = isQuestionChecked ? pathArray : pathArray.slice(0, -1);

    if (e.key === "Enter") {
      handleClickAddChild(p, isQuestionChecked);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <StFieldset>
      <StAnswerWrapper hasborder={node.children.length > 0}>
        <legend>
          <StAnswerIcon />
        </legend>
        <StInput
          ref={inputRef}
          value={node.content}
          placeholder={"답변을 입력해주세요."}
          onChange={(e) => handleChangeSetContent(path, e.target.value)}
          onKeyPress={(e) => handleAddChildByEnter(e, path, isQuestion)}
        />
        <StMore className="icn_more" />
        <StMenu menuposition={"isPriQ"}>
          <StMenuBtn type="button" onClick={(e) => handleClickAddQuestion(e, path, !isQuestion)}>
            꼬리질문 추가
          </StMenuBtn>
          <StMenuBtn type="button" onClick={() => handleClickDeleteChild(path)}>
            삭제
          </StMenuBtn>
        </StMenu>
      </StAnswerWrapper>
      {node.children &&
        node.children.map((node, i) => (
          <PeriNoteInput
            key={`input-${i}`}
            path={[...path, i]}
            node={node}
            onAddChild={(p, isQ) => handleClickAddChild(p, isQ)}
            onSetContent={(p, value) => handleChangeSetContent(p, value)}
            onDeleteChild={(p) => onDeleteChild(p)}
            onAddQuestion={(e, p, isQ) => handleClickAddQuestion(e, p, isQ)}
            onAddChildByEnter={(e, p, isQ) => handleAddChildByEnter(e, p, isQ)}
          />
        ))}
    </StFieldset>
  );
}

const StFieldset = styled.fieldset`
  position: relative;

  padding: 2.6rem 2.8rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.white200};
  border-radius: 0.8rem;
  border-top: none;

  background-color: ${({ theme }) => theme.colors.white};
`;

const StAnswerWrapper = styled.div<{ hasborder: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ hasborder, theme }) =>
    hasborder &&
    css`
      border-bottom: 0.2rem solid ${theme.colors.white200};
      padding-bottom: 2.8rem;
    `}

  width: 100%;
`;

const StAnswerIcon = styled(IcPeriAnswer)`
  position: absolute;
  top: 2.7rem;
  left: 3.8rem;
`;

const StInput = styled.input`
  flex: 1;
  margin-left: 5.6rem;
  ${({ theme }) => theme.fonts.header4}

  &:placeholder {
    color: ${({ theme }) => theme.colors.white500};
  }
`;

const StMore = styled(StMoreIcon)`
  margin-right: 3.2rem;
`;
