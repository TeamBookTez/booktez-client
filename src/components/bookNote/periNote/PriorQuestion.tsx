import { useForm } from "react-hook-form";
import styled from "styled-components";

import { IcPeriQuestion } from "../../../assets/icons";
import { StMenuBtn, StMiniMenu, StMoreIcon } from "./PeriNoteRefactor";

interface PriorQuestionProps {
  idx: number;
  question: string;
  onPrevent: (shouldPrevent: boolean) => void;
  isAdded: boolean;
  onAddAnswer: (idxList: number[]) => void;
  onToggle: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  onDeleteQuestion: (idxList: number[]) => void;
}

interface FormData {
  [key: string]: string;
}

export default function PriorQuestion(props: PriorQuestionProps) {
  const { idx, question, isAdded, onAddAnswer, onToggle, onDeleteQuestion } = props;
  const { register } = useForm<FormData>();

  return (
    <StPriQuestionWrapper className="question">
      <StQuestionIcon />
      <StPriQuestionInput
        {...register("question")}
        placeholder="질문을 입력해주세요"
        key={`q0-${idx}`}
        defaultValue={question}
        autoFocus={isAdded}
      />
      <StAddAnswerButton type="button" onClick={() => onAddAnswer([idx])}>
        답변
      </StAddAnswerButton>
      <StMoreIcon onClick={onToggle} />
      <StMiniMenu menuposition={"isPriQ"}>
        <StMenuBtn type="button" onClick={() => onDeleteQuestion([idx])}>
          삭제
        </StMenuBtn>
      </StMiniMenu>
    </StPriQuestionWrapper>
  );
}

const StPriQuestionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  padding: 2.6rem 4.4rem 2.6rem 8.4rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.white200};
  border-bottom: 0.1rem dashed ${({ theme }) => theme.colors.white400};
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

const StQuestionIcon = styled(IcPeriQuestion)`
  position: absolute;
  top: -1.2rem;
  left: 1.6rem;
`;

const StPriQuestionInput = styled.input`
  flex: 1;
  ${({ theme }) => theme.fonts.header4}

  &:placeholder {
    color: ${({ theme }) => theme.colors.white500};
  }
`;

const StAddAnswerButton = styled.button`
  width: 6.6rem;
  height: 3.4rem;

  ${({ theme }) => theme.fonts.caption}
  color: ${({ theme }) => theme.colors.gray400};
`;
