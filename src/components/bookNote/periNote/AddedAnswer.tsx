import { useFormContext } from "react-hook-form";
import styled from "styled-components";

import { IcAnswerLabel } from "../../../assets/icons";
import { StMenuBtn, StMiniMenu, StMoreIcon } from "./PeriNote";

interface AddedAnswerProps {
  periKey: string;
  labelColor: string;
  idxList: number[];
  onAddAnswerByEnter: (event: React.KeyboardEvent<HTMLInputElement>, idxList: number[]) => void;
  onToggle: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  onAddQuestion: (idxList: number[]) => void;
  onSelected: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onDeleteAnswer: (idxList: number[]) => void;
}

export default function AddedAnswer(props: AddedAnswerProps) {
  const { periKey, labelColor, idxList, onAddAnswerByEnter, onToggle, onAddQuestion, onSelected, onDeleteAnswer } =
    props;
  const methods = useFormContext();

  const addAnswerByEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    onAddAnswerByEnter(event, idxList.slice(0, -1));
  };

  const addQuestion = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onAddQuestion(idxList);
    onSelected(event);
  };

  const deleteAnswer = () => {
    onDeleteAnswer(idxList);
  };

  return (
    <StAnswerInputWrapper>
      <StAnswerLabel labelcolor={labelColor} />
      <StAnswerInput {...methods.register(periKey)} placeholder="답변을 입력해주세요" onKeyPress={addAnswerByEnter} />
      <StMoreIcon onClick={onToggle} />
      <StMiniMenu>
        <StMenuBtn type="button" onClick={addQuestion}>
          꼬리질문 추가
        </StMenuBtn>
        <StMenuBtn type="button" onClick={deleteAnswer}>
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
