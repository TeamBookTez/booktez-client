import { useEffect, useRef } from "react";
import styled, { css } from "styled-components";

import { IcAnswerLabel } from "../../../assets/icons";
import theme from "../../../styles/theme";
import { PeriNoteTreeNode } from "../../../utils/dataType";
import { StAddAnswerButton, StMenuBtn, StMiniMenu, StMoreIcon } from "./PriorQuestion";

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
  onAddChildByEnter: (e: React.KeyboardEvent<HTMLInputElement>, pathArray: number[]) => void;
}

export default function PeriNoteInput(props: PeriNoteInputProps) {
  const { path, node, onAddChild, onSetContent, onDeleteChild, onAddQuestion, onAddChildByEnter } = props;
  const isQuestion = node.type === "question";
  const labelColorList = [
    theme.colors.orange100,
    theme.colors.orange300,
    theme.colors.orange400,
    theme.colors.orange500,
  ];
  // 4depth로 제한하기 전이라서 순환하도록 했음 -> 제한을 두면 % 4 지우기
  const labelColor = labelColorList[(path.length - 2) % 4];
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current && isQuestion) {
      inputRef.current.focus();
    }
  }, []);

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
            ref={inputRef}
            value={node.content}
            placeholder={`${isQuestion ? "질문" : "답변"}을 입력해주세요.`}
            onChange={(e) => onSetContent(path, e.target.value)}
            onKeyPress={(e) => onAddChildByEnter(e, path)}
          />
          {isQuestion && (
            <StAddAnswerButton type="button" onClick={() => onAddChild(path, isQuestion)}>
              답변
            </StAddAnswerButton>
          )}
          <StMore className="icn_more" />
          <StMiniMenu>
            {!isQuestion && (
              <StMenuBtn type="button" onClick={(e) => onAddQuestion(e, path, isQuestion)}>
                꼬리질문 추가
              </StMenuBtn>
            )}
            <StMenuBtn type="button" onClick={() => onDeleteChild(path)}>
              삭제
            </StMenuBtn>
          </StMiniMenu>
        </StInputWrapper>
      </StFieldset>
      <StFieldWrapper>
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
              onAddChildByEnter={(e, p) => onAddChildByEnter(e, p)}
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

const StQuestionLabel = styled.label<{ bgcolor: string; color?: string }>`
  margin-right: 1.6rem;
  border-radius: 0.8rem;
  padding: 0.4rem 1.8rem;
  background-color: ${({ bgcolor }) => bgcolor};
  width: fit-content;

  ${({ theme }) => theme.fonts.caption}
  color: ${({ color, theme }) => (color ? color : theme.colors.white)};
`;

const StAnswerLabel = styled(IcAnswerLabel)<{ labelcolor: string }>`
  position: absolute;
  top: 0;
  left: 7.6rem;
  fill: ${({ labelcolor }) => labelcolor};
`;

const StInputWrapper = styled.div<{ isanswer: boolean }>`
  display: flex;
  align-items: center;
  flex: 1;

  ${({ isanswer }) =>
    isanswer
      ? css`
          border-radius: 0 0.8rem 0.8rem 0;
          margin-left: 7.6rem;
        `
      : css`
          border-radius: 0.8rem;
        `}

  border: 0.2rem solid ${({ theme }) => theme.colors.white400};
  padding-left: 2.4rem;
  padding-right: 1.6rem;
  height: 5.4rem;
`;

const StInput = styled.input`
  flex: 1;

  ${({ theme }) => theme.fonts.body4}
  color: ${({ theme }) => theme.colors.gray200};

  &:placeholder {
    color: ${({ theme }) => theme.colors.white500};
  }
`;

const StMore = styled(StMoreIcon)`
  margin-right: 0rem;
`;

const StFieldWrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin-left: 7.6rem;
`;
