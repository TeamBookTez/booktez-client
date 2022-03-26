import { useEffect, useRef } from "react";
import { UseFormRegister, UseFormSetFocus } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";
import styled from "styled-components";

import { IcMore, IcPeriQuestion } from "../../../assets/icons";
import { PeriNoteTreeNode } from "../../../utils/dataType";
import { Button } from "../../common/styled/Button";
import { PriorAnswer } from "..";
import { FormData } from "./PeriNote";

interface PriorQuestionProps {
  path: number[];
  index: number;
  node: PeriNoteTreeNode;
  onAddChild: (path: number[], currentIndex: number, isQuestion: boolean) => void;
  onSetContent: (value: string, path: number[]) => void;
  onDeleteChild: (path: number[]) => void;
  register: UseFormRegister<FormData>;
  setFocus: UseFormSetFocus<FormData>;
}

export default function PriorQuestion(props: PriorQuestionProps) {
  const { path, index, node, onAddChild, onSetContent, onDeleteChild, register, setFocus } = props;
  // 답변 추가 시 사용되는 변수라서 isQuestion false인 것
  const isQuestion = false;

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>, pathArray: number[]) => {
    if (e.target.value !== "\n") {
      onSetContent(e.target.value, pathArray);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>, pathArray: number[]) => {
    if (e.key === "Enter" && !e.shiftKey) {
      onAddChild(pathArray, node.children.length - 1, isQuestion);
    }
  };

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, []);

  return (
    <>
      <StFieldset>
        <legend>
          <StQuestionIcon />
        </legend>
        <StInput
          ref={textAreaRef}
          value={node.content}
          placeholder={"질문을 입력해주세요."}
          onChange={(e) => handleContent(e, path)}
          onKeyPress={(e) => handleKeyPress(e, path)}
        />
        <StAddAnswerButton type="button" onClick={() => onAddChild(path, index, isQuestion)}>
          답변
        </StAddAnswerButton>
        <StMoreIcon className="icn_more" />
        <StMenu menuposition={"isPriQ"}>
          <StMenuBtn type="button" onClick={() => onDeleteChild(path)}>
            삭제
          </StMenuBtn>
        </StMenu>
      </StFieldset>
      {node.children &&
        node.children.map((node, i) => (
          <PriorAnswer
            key={i}
            path={[...path, i]}
            index={i}
            node={node}
            onAddChild={(p, i, isQ) => onAddChild(p, i, isQ)}
            onSetContent={(v, p) => onSetContent(v, p)}
            onDeleteChild={(p) => onDeleteChild(p)}
            register={register}
            setFocus={setFocus}
          />
        ))}
    </>
  );
}

const StFieldset = styled.fieldset`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 0.8rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.white200};
  border-bottom: 0.1rem dashed ${({ theme }) => theme.colors.white400};

  padding: 2.6rem 4.4rem 2.6rem 8.4rem;
  background-color: ${({ theme }) => theme.colors.white};

  width: 100%;
`;

const StQuestionIcon = styled(IcPeriQuestion)`
  position: absolute;
  top: -1.2rem;
  left: 0.8rem;
`;

const StInput = styled(TextareaAutosize)`
  flex: 1;
  margin: 0;
  min-height: 2.6rem;
  ${({ theme }) => theme.fonts.header4}

  &:placeholder {
    color: ${({ theme }) => theme.colors.white500};
  }

  &::-webkit-scrollbar {
    display: none;
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
