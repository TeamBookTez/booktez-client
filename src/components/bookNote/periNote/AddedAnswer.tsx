import { useFormContext } from "react-hook-form";
import styled from "styled-components";

import { IcAnswerLabel } from "../../../assets/icons";
import { StMenuBtn, StMiniMenu, StMoreIcon } from "./PeriNoteRefactor";

interface AddedAnswerProps {
  periKey: string;
  labelColor: string;
  idxList: number[];
  isAdded: boolean;
  onAddAnswerByEnter: (event: React.KeyboardEvent<HTMLInputElement>, idxList: number[]) => void;
  onToggle: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  onAddQuestion: (idxList: number[]) => void;
  onSelected: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onDeleteAnswer: (idxList: number[]) => void;
}

export default function AddedAnswer(props: AddedAnswerProps) {
  const {
    periKey,
    labelColor,
    idxList,
    isAdded,
    onAddAnswerByEnter,
    onToggle,
    onAddQuestion,
    onSelected,
    onDeleteAnswer,
  } = props;
  const methods = useFormContext();

  return (
    <StAnswerInputWrapper>
      <StAnswerLabel labelcolor={labelColor} />
      <StAnswerInput
        {...methods.register(periKey)}
        placeholder="답변을 입력해주세요"
        onKeyPress={(event) => onAddAnswerByEnter(event, idxList.slice(0, -1))}
        autoFocus={!isAdded}
      />
      <StMoreIcon onClick={onToggle} />
      <StMiniMenu>
        <StMenuBtn
          type="button"
          onClick={(event) => {
            onAddQuestion(idxList);
            onSelected(event);
          }}>
          꼬리질문 추가
        </StMenuBtn>
        <StMenuBtn type="button" onClick={() => onDeleteAnswer(idxList)}>
          삭제
        </StMenuBtn>
      </StMiniMenu>
    </StAnswerInputWrapper>
  );
}

const StAnswerInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;

  margin-top: 1rem;
  margin-left: 7.6rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.white400};
  border-radius: 0 0.8rem 0.8rem 0;
  padding: 1.35rem 1.6rem 0.75rem 2.4rem;
`;

const StAnswerLabel = styled(IcAnswerLabel)<{ labelcolor: string }>`
  position: absolute;
  top: -0.2rem;
  left: -0.2rem;
  fill: ${({ labelcolor }) => labelcolor};
`;

const StAnswerInput = styled.input`
  flex: 1;

  ${({ theme }) => theme.fonts.body4}
  color: ${({ theme }) => theme.colors.gray400};

  &:placeholder {
    color: ${({ theme }) => theme.colors.white500};
  }
`;
