import { useFormContext } from "react-hook-form";
import styled from "styled-components";

import { IcPeriQuestion } from "../../../assets/icons";
import { StAddAnswerButton, StMenuBtn, StMiniMenu, StMoreIcon } from "./PeriNoteRefactor";

interface PriorQuestionProps {
  idx: number;
  question: string;
  onPrevent: (shouldPrevent: boolean) => void;
  isAdded: boolean;
  onAddAnswer: (idxList: number[]) => void;
  onToggle: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  onDeleteQuestion: (idxList: number[]) => void;
}

export default function PriorQuestion(props: PriorQuestionProps) {
  const { idx, question, isAdded, onAddAnswer, onToggle, onDeleteQuestion } = props;
  const methods = useFormContext();
  const periKey = `Q${idx}`;

  return (
    <StPriQuestionWrapper className="question">
      <StQuestionIcon />
      <StPriQuestionInput
        {...methods.register(periKey)}
        placeholder="질문을 입력해주세요"
        key={periKey}
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
