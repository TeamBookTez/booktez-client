import { useEffect } from "react";
import TextareaAutosize from "react-textarea-autosize";
import styled, { css } from "styled-components";

import theme from "../../../styles/theme";
import { PeriNoteTreeNode } from "../../../utils/dataType";
import { FormController } from "./PeriNote";
import { StAddAnswerButton, StMenu, StMenuBtn, StMoreIcon } from "./PriorQuestion";

interface PeriNoteInputProps {
  path: number[];
  index: number;
  node: PeriNoteTreeNode;
  onAddChild: (path: number[], index: number, isQuestion: boolean) => void;
  onDeleteChild: (path: number[]) => void;
  onAddChildByEnter: (
    e: React.KeyboardEvent<HTMLTextAreaElement>,
    pathArray: number[],
    index: number,
    isQuestion: boolean,
  ) => void;
  formController: FormController;
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
  const { path, index, node, onAddChild, onDeleteChild, onAddChildByEnter, formController } = props;
  const { register, setFocus } = formController;
  const isQuestion = node.type === "question";
  const inputKey = `${path.join(",")}`;
  const labelColor = labelColorList[(path.length - 1) % 10];

  const addChildByEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      // 꼬리질문과 답변은 자신의 아래에 추가하는 것이 아닌 자신의 부모의 children에 추가해야함
      onAddChild(path.slice(0, -1), index, isQuestion);
    }
  };

  useEffect(() => {
    setFocus(inputKey);
  }, [setFocus]);

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
            {...register(inputKey)}
            defaultValue={node.content}
            placeholder={`${isQuestion ? "질문" : "답변"}을 입력해주세요.`}
            onKeyPress={addChildByEnter}
          />
          {isQuestion && (
            <StAddAnswerButton type="button" onClick={() => onAddChild(path, index, !isQuestion)}>
              답변
            </StAddAnswerButton>
          )}
          <StMore className="icn_more" />
          <StMenu>
            {!isQuestion && (
              <StMenuBtn type="button" onClick={() => onAddChild(path, index, !isQuestion)}>
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
              index={i}
              node={node}
              onAddChild={(p, i, isQ) => onAddChild(p, i, isQ)}
              onDeleteChild={(p) => onDeleteChild(p)}
              onAddChildByEnter={(e, p, i, isQ) => onAddChildByEnter(e, p, i, isQ)}
              formController={formController}
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

const StInput = styled(TextareaAutosize)`
  flex: 1;
  min-height: 2.9rem;

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
