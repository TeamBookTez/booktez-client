import { useForm } from "react-hook-form";
import styled from "styled-components";

import { StAddAnswerButton, StMenuBtn, StMiniMenu, StMoreIcon } from "./PeriNoteRefactor";

interface AddedQuestionProps {
  bgColor: string;
  idxList: number[];
  isAdded: boolean;
  onAddAnswer: (idxList: number[]) => void;
  onToggle: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  onDeleteQuestion: (idxList: number[]) => void;
}

interface FormData {
  [key: string]: string;
}

export default function AddedQuestion(props: AddedQuestionProps) {
  const { bgColor, idxList, isAdded, onAddAnswer, onToggle, onDeleteQuestion } = props;
  const { register } = useForm<FormData>();
  const periKey = `Q${idxList.join("")}`;

  return (
    <StQuestionLabelWrapper>
      <StQuestionLabel bgcolor={bgColor}>질문</StQuestionLabel>
      <StQuestionInputWrapper>
        <StQuestionInput {...register(periKey)} placeholder="질문을 입력해주세요" key={periKey} autoFocus={isAdded} />
        <StAddAnswerButton type="button" onClick={() => onAddAnswer(idxList)}>
          답변
        </StAddAnswerButton>
        <StMoreIcon onClick={onToggle} />
        <StMiniMenu>
          <StMenuBtn type="button" onClick={() => onDeleteQuestion(idxList)}>
            삭제
          </StMenuBtn>
        </StMiniMenu>
      </StQuestionInputWrapper>
    </StQuestionLabelWrapper>
  );
}

const StQuestionLabelWrapper = styled.div`
  display: flex;
  align-items: center;
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

const StQuestionInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;

  margin-top: 2.4rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.white400};
  border-radius: 0.8rem;
  padding-left: 2.4rem;
  padding-right: 1.6rem;
  height: 5.4rem;
`;

const StQuestionInput = styled.input`
  flex: 1;

  ${({ theme }) => theme.fonts.body4}
  color: ${({ theme }) => theme.colors.gray200};

  &:placeholder {
    color: ${({ theme }) => theme.colors.white500};
  }
`;
