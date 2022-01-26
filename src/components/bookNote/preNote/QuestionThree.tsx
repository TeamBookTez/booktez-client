import styled from "styled-components";

import { InputQuestion, PreNoteForm } from "..";

interface QuestionThreeProps {
  questionList: string[];
  onChangeReview: (key: string, value: string | string[] | number) => void;
  onToggleDrawer: (i: number) => void;
  isPrevented: boolean;
  isFilled: boolean;
}

export default function QuestionThree(props: QuestionThreeProps) {
  const { questionList, onChangeReview, onToggleDrawer, isPrevented, isFilled } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const modified = [...questionList];

    modified[idx] = e.target.value;
    onChangeReview("questionList", modified);
  };

  const handleDelete = (idx: number) => {
    const newArray = [...questionList];

    newArray.splice(idx, 1);
    onChangeReview("questionList", newArray);
  };

  const addInput = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    onChangeReview("questionList", [...questionList, ""]);
  };

  return (
    <PreNoteForm question="가장 관심가는 주제부터 질문 리스트를 만들어보세요!" idx={3} onToggleDrawer={onToggleDrawer}>
      {questionList.map((question, idx) => (
        <InputQuestion
          key={idx}
          value={question}
          idx={idx}
          onChangeValue={handleChange}
          onDelete={handleDelete}
          isPrevented={isPrevented}
        />
      ))}
      {!isPrevented ? (
        <StAddButton type="button" disabled={!isFilled} onClick={addInput} isfilled={isFilled}>
          + 질문추가
        </StAddButton>
      ) : (
        ""
      )}
    </PreNoteForm>
  );
}

const StAddButton = styled.button<{ isfilled: boolean }>`
  margin-right: 9.1rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.white400};
  border-radius: 0.8rem;
  padding: 1.35rem 2.4rem;
  background-color: ${({ theme }) => theme.colors.white200};

  width: calc(100% - 5rem);
  color: ${({ isfilled, theme }) => (isfilled ? theme.colors.gray100 : theme.colors.white500)};
  text-align: start;
  ${({ theme }) => theme.fonts.body4}
`;
