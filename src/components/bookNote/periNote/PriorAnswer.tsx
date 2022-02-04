import { useFormContext } from "react-hook-form";
import styled, { css } from "styled-components";

import { IcPeriAnswer } from "../../../assets/icons";
import { StMenuBtn, StMiniMenu, StMoreIcon } from "./PeriNote";

interface PriorAnswerProps {
  periKey: string;
  isSingle: boolean;
  idxList: number[];
  onAddAnswerByEnter: (event: React.KeyboardEvent<HTMLInputElement>, idxList: number[]) => void;
  onAddAnswer: (idxList: number[]) => void;
  onToggle: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  onDeleteQuestion: (idxList: number[]) => void;
  onSelected: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function PriorAnswer(props: PriorAnswerProps) {
  const { periKey, isSingle, idxList, onAddAnswerByEnter, onAddAnswer, onToggle, onDeleteQuestion, onSelected } = props;
  const methods = useFormContext();

  const addAnswerByEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    onAddAnswerByEnter(event, [idxList[0]]);
  };

  const addQuestion = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onAddAnswer(idxList);
    onSelected(event);
  };

  const deleteAnswer = () => {
    onDeleteQuestion(idxList);
  };

  return (
    <StPriAnswerWrapper issingle={isSingle}>
      <StAnswerIcon />
      <StPriAnswerInput
        {...methods.register(periKey)}
        placeholder="답변을 입력해주세요"
        onKeyPress={addAnswerByEnter}
      />
      <StMoreIcon onClick={onToggle} />
      <StMiniMenu menuposition={"isPriA"}>
        <StMenuBtn type="button" onClick={addQuestion}>
          꼬리질문 추가
        </StMenuBtn>
        <StMenuBtn type="button" onClick={deleteAnswer}>
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