import { useEffect, useRef } from "react";
import styled from "styled-components";

import { IcMore, IcPeriQuestion } from "../../../assets/icons";
import { PeriNoteTreeNode } from "../../../utils/dataType";
import { Button } from "../../common/styled/Button";
import { PriorAnswer } from "..";

interface PriorQuestionProps {
  path: number[];
  node: PeriNoteTreeNode;
  onAddChild: (path: number[], isQuestion: boolean) => void;
  onSetContent: (path: number[], value: string) => void;
  onDeleteChild: (path: number[]) => void;
}

export default function PriorQuestion(props: PriorQuestionProps) {
  const { path, node, onAddChild, onSetContent, onDeleteChild } = props;
  const isQuestion = false;

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleAddChildByEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>, pathArray: number[]) => {
    if (e.key === "Enter") {
      onAddChild(pathArray, isQuestion);
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();

      textareaRef.current.style.height = "3rem";
      const scrollHeight = textareaRef.current.scrollHeight;

      // 높이가 달라질 때만 높이 변경
      if (textareaRef.current.style.height !== `${scrollHeight / 10}rem`) {
        textareaRef.current.style.height = `${scrollHeight / 10}rem`;
      }
    }
  }, [node.content]);

  return (
    <>
      <StFieldset>
        <legend>
          <StQuestionIcon />
        </legend>
        <StInput
          ref={textareaRef}
          value={node.content}
          placeholder={"질문을 입력해주세요."}
          onChange={(e) => onSetContent(path, e.target.value)}
          onKeyPress={(e) => handleAddChildByEnter(e, path)}
        />
        <StAddAnswerButton type="button" onClick={() => onAddChild(path, isQuestion)}>
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
            node={node}
            onAddChild={(p, isQ) => onAddChild(p, isQ)}
            onSetContent={(p, value) => onSetContent(p, value)}
            onDeleteChild={(p) => onDeleteChild(p)}
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

const StInput = styled.textarea`
  flex: 1;
  margin: 0;
  ${({ theme }) => theme.fonts.header4}
  height: 2.6rem;

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
