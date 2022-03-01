import { useEffect, useRef } from "react";
import styled, { css } from "styled-components";

import theme from "../../../styles/theme";
import { PeriNoteTreeNode } from "../../../utils/dataType";
import { StAddAnswerButton, StMenu, StMenuBtn, StMoreIcon } from "./PriorQuestion";

interface PeriNoteInputProps {
  path: number[];
  node: PeriNoteTreeNode;
  onAddChild: (path: number[], isQuestion: boolean) => void;
  onSetContent: (path: number[], value: string) => void;
  onDeleteChild: (path: number[]) => void;
  onAddQuestion: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    pathArray: number[],
    isQuestionChecked: boolean,
  ) => void;
  onAddChildByEnter: (e: React.KeyboardEvent<HTMLTextAreaElement>, pathArray: number[], isQuestion: boolean) => void;
}

export const labelColorList = [
  theme.colors.orange000,
  theme.colors.orange000,
  theme.colors.orange100,
  theme.colors.orange100,
  theme.colors.orange300,
  theme.colors.orange300,
  theme.colors.orange400,
  theme.colors.orange400,
  theme.colors.orange500,
  theme.colors.orange500,
];

export default function PeriNoteInput(props: PeriNoteInputProps) {
  const { path, node, onAddChild, onSetContent, onDeleteChild, onAddQuestion, onAddChildByEnter } = props;
  const isQuestion = node.type === "question";

  // 4depth로 제한하기 전이라서 순환하도록 했음 -> 제한을 두면 % 8 지우기
  // 첫 시작 root 때문에 1을 빼야 함
  const labelColor = labelColorList[(path.length - 1) % 10];
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textAreaRef.current) {
      if (isQuestion) {
        textAreaRef.current.focus();
      }
      textAreaRef.current.style.height = " 2.9rem";
    }
  }, []);

  useEffect(() => {
    if (textAreaRef.current) {
      const scrollHeight = textAreaRef.current.scrollHeight;

      // 높이가 달라질 때만 높이 변경
      if (textAreaRef.current.style.height !== `${scrollHeight / 10}rem`) {
        textAreaRef.current.style.height = `${scrollHeight / 10}rem`;
      }
    }
  }, [node.content]);

  return (
    <>
      <StFieldset>
        <legend>{isQuestion ? "질문" : "답변"}</legend>
        {isQuestion ? (
          <StQuestionLabel bgcolor={labelColor}>질문</StQuestionLabel>
        ) : (
          <StAnswerLabel labelcolor={labelColor} />
        )}
        <StInputWrapper isanswer={!isQuestion}>
          <StInput
            ref={textAreaRef}
            value={node.content}
            placeholder={`${isQuestion ? "질문" : "답변"}을 입력해주세요.`}
            onChange={(e) => onSetContent(path, e.target.value)}
            onKeyPress={(e) => onAddChildByEnter(e, path, isQuestion)}
          />
          {isQuestion && (
            <StAddAnswerButton type="button" onClick={() => onAddChild(path, !isQuestion)}>
              답변
            </StAddAnswerButton>
          )}
          <StMore className="icn_more" />
          <StMenu>
            {!isQuestion && (
              <StMenuBtn type="button" onClick={(e) => onAddQuestion(e, path, !isQuestion)}>
                꼬리질문 추가
              </StMenuBtn>
            )}
            <StMenuBtn type="button" onClick={() => onDeleteChild(path)}>
              삭제
            </StMenuBtn>
          </StMenu>
        </StInputWrapper>
      </StFieldset>
      <StFieldWrapper isanswer={!isQuestion}>
        {node.children &&
          node.children.map((node, i) => (
            <PeriNoteInput
              key={`input-${i}`}
              path={[...path, i]}
              node={node}
              onAddChild={(p, isQ) => onAddChild(p, isQ)}
              onSetContent={(p, value) => onSetContent(p, value)}
              onDeleteChild={(p) => onDeleteChild(p)}
              onAddQuestion={(e, p, isQ) => onAddQuestion(e, p, isQ)}
              onAddChildByEnter={(e, p, isQ) => onAddChildByEnter(e, p, isQ)}
            />
          ))}
      </StFieldWrapper>
    </>
  );
}

const StFieldset = styled.fieldset`
  position: relative;
  display: flex;
  align-items: center;

  margin-top: 2.4rem;

  & > legend {
    display: none;
  }
`;

const StQuestionLabel = styled.label<{ bgcolor: string }>`
  margin-right: 1.6rem;
  border-radius: 0.8rem;
  padding: 0.4rem 1.8rem;
  background-color: ${({ bgcolor }) => bgcolor};
  width: fit-content;

  ${({ theme }) => theme.fonts.caption}
  color: ${({ color, theme }) => (color ? color : theme.colors.white)};
`;

const StAnswerLabel = styled.div<{ labelcolor: string }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 7.6rem;
  width: 0.3rem;
  background-color: ${({ labelcolor }) => labelcolor};
`;

const StInputWrapper = styled.div<{ isanswer: boolean }>`
  display: flex;
  align-items: center;
  flex: 1;
  margin-right: 1.6rem;

  ${({ isanswer }) =>
    isanswer
      ? css`
          margin-left: 7.6rem;
          border-radius: 0 0.8rem 0.8rem 0;
        `
      : css`
          border-radius: 0.8rem;
        `}

  border: 0.2rem solid ${({ theme }) => theme.colors.white400};
  padding-left: 2.4rem;
  padding-right: 1.6rem;
  min-height: 5.4rem;
`;

const StInput = styled.textarea`
  flex: 1;
  height: 2.9rem;

  ${({ theme }) => theme.fonts.body4}
  color: ${({ theme }) => theme.colors.gray200};

  &:placeholder {
    color: ${({ theme }) => theme.colors.white500};
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StMore = styled(StMoreIcon)`
  margin-right: 0;
`;

const StFieldWrapper = styled.article<{ isanswer: boolean }>`
  display: flex;
  flex-direction: column;
  ${({ isanswer }) =>
    isanswer &&
    css`
      margin-left: 7.6rem;
    `}
`;
