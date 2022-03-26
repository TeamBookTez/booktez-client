import { useEffect, useRef } from "react";
import { UseFormRegister } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";
import styled, { css } from "styled-components";

import { IcPeriAnswer } from "../../../assets/icons";
import { PeriNoteTreeNode } from "../../../utils/dataType";
import { PeriNoteInput } from "..";
import { FormData } from "./PeriNote";
import { StMenu, StMenuBtn, StMoreIcon } from "./PriorQuestion";

interface PriorAnswerProps {
  path: number[];
  index: number;
  node: PeriNoteTreeNode;
  onAddChild: (path: number[], index: number, isQuestion: boolean) => void;
  onSetContent: (value: string, path: number[]) => void;
  onDeleteChild: (path: number[]) => void;
  register: UseFormRegister<FormData>;
}

export default function PriorAnswer(props: PriorAnswerProps) {
  const { path, index, node, onAddChild, onSetContent, onDeleteChild, register } = props;
  const isQuestion = false;

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleClickAddChild = (pathArray: number[], idx: number, isQuestionChecked: boolean) => {
    onAddChild(pathArray, idx, isQuestionChecked);
  };

  const handleChangeSetContent = (e: React.ChangeEvent<HTMLTextAreaElement>, pathArray: number[]) => {
    if (e.target.value !== "\n") {
      onSetContent(e.target.value, pathArray);
    }
  };

  const handleClickDeleteChild = (pathArray: number[]) => {
    onDeleteChild(pathArray);
  };

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLTextAreaElement>,
    pathArray: number[],
    idx: number,
    isQuestionChecked: boolean,
  ) => {
    if (e.key === "Enter") {
      if (!e.shiftKey) {
        const p = isQuestionChecked ? pathArray : pathArray.slice(0, -1);

        onAddChild(p, idx, isQuestionChecked);
      }
    }
  };

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, []);

  return (
    <StFieldset>
      <StAnswerWrapper hasborder={node.children.length > 0}>
        <legend>
          <StAnswerIcon />
        </legend>
        <StInput
          ref={textAreaRef}
          value={node.content}
          placeholder={"답변을 입력해주세요."}
          onChange={(e) => handleChangeSetContent(e, path)}
          onKeyPress={(e) => handleKeyPress(e, path, index, isQuestion)}
        />
        <StMore className="icn_more" />
        <StMenu menuposition={"isPriQ"}>
          <StMenuBtn type="button" onClick={() => handleClickAddChild(path, index, !isQuestion)}>
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
            index={i}
            node={node}
            onAddChild={(p, i, isQ) => handleClickAddChild(p, i, isQ)}
            onDeleteChild={(p) => onDeleteChild(p)}
            onAddChildByEnter={(e, p, i, isQ) => handleKeyPress(e, p, i, isQ)}
            register={register}
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

const StInput = styled(TextareaAutosize)`
  flex: 1;
  margin-left: 5.6rem;
  ${({ theme }) => theme.fonts.header4}
  min-height: 2.6rem;

  &:placeholder {
    color: ${({ theme }) => theme.colors.white500};
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StMore = styled(StMoreIcon)`
  margin-right: 3.2rem;
`;
