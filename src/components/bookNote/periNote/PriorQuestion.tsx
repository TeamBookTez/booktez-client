import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";

import { IcPeriQuestion } from "../../../assets/icons";
import { StAddAnswerButton, StMenuBtn, StMiniMenu, StMoreIcon } from "./PeriNote";

interface PriorQuestionProps {
  periKey: string;
  idxList: number[];
  question: string;
  onPrevent: (shouldPrevent: boolean) => void;
  onAddAnswer: (idxList: number[]) => void;
  onToggle: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  onDeleteQuestion: (idxList: number[]) => void;
}

export default function PriorQuestion(props: PriorQuestionProps) {
  const { periKey, idxList, question, onAddAnswer, onToggle, onDeleteQuestion } = props;
  const methods = useFormContext();

  useEffect(() => {
    methods.setFocus(periKey);
  }, []);

  return (
    <StPriQuestionWrapper className="question">
      <StQuestionIcon />
      <StPriQuestionInput {...methods.register(periKey)} placeholder="질문을 입력해주세요" defaultValue={question} />
      <StAddAnswerButton type="button" onClick={() => onAddAnswer(idxList)}>
        답변
      </StAddAnswerButton>
      <StMoreIcon onClick={onToggle} />
      <StMiniMenu menuposition={"isPriQ"}>
        <StMenuBtn type="button" onClick={() => onDeleteQuestion(idxList)}>
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
