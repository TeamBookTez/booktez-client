import styled, { css } from "styled-components";

import { IcPeriAnswer } from "../../../assets/icons";
import { StMenuBtn, StMiniMenu, StMoreIcon } from "./PeriNoteRefactor";

interface PriorAnswerProps {
  isSingle: boolean;
  idxList: number[];
  isAdded: boolean;
  onAddAnswerByEnter: (event: React.KeyboardEvent<HTMLInputElement>, idxList: number[]) => void;
  onAddAnswer: (idxList: number[]) => void;
  onToggle: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  onDeleteQuestion: (idxList: number[]) => void;
  onSelected: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function PriorAnswer(props: PriorAnswerProps) {
  const { isSingle, idxList, isAdded, onAddAnswerByEnter, onAddAnswer, onToggle, onDeleteQuestion, onSelected } = props;

  return (
    <StPriAnswerWrapper issingle={isSingle}>
      <StAnswerIcon />
      <StPriAnswerInput
        placeholder="답변을 입력해주세요"
        key={`a0-${idxList[-1]}`}
        onKeyPress={(event) => onAddAnswerByEnter(event, [idxList[0]])}
        autoFocus={!isAdded}
      />
      <StMoreIcon onClick={onToggle} />
      <StMiniMenu menuposition={"isPriA"}>
        <StMenuBtn
          type="button"
          onClick={(event) => {
            onAddAnswer(idxList);
            onSelected(event);
          }}>
          꼬리질문 추가
        </StMenuBtn>
        <StMenuBtn type="button" onClick={() => onDeleteQuestion(idxList)}>
          삭제
        </StMenuBtn>
      </StMiniMenu>
    </StPriAnswerWrapper>
  );
}

const StPriAnswerWrapper = styled.div<{ issingle: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  ${({ issingle, theme }) =>
    issingle
      ? css`
          border-bottom: 0.2rem solid ${theme.colors.white200};
          padding-bottom: 2.8rem;
        `
      : ""}
  padding-top: 2.8rem;
  padding-right: 1.6rem;
  padding-left: 5.6rem;
`;

const StAnswerIcon = styled(IcPeriAnswer)`
  position: absolute;
  top: 2.8rem;
  left: 1rem;
`;

const StPriAnswerInput = styled.input`
  width: 100%;

  ${({ theme }) => theme.fonts.body1}
  &:placeholder {
    color: ${({ theme }) => theme.colors.white500};
  }
`;
