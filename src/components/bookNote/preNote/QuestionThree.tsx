import { useState } from "react";
import styled from "styled-components";

import { InputQuestion, PreNoteForm } from "..";

export default function QuestionThree() {
  const [inputList, setInputList] = useState<string[]>([""]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    setInputList((current) => {
      const newData = [...current];

      newData[idx] = e.target.value;

      return newData;
    });
  };

  const handleDelete = (idx: number) => {
    const newArray = [...inputList];

    newArray.splice(idx, 1);
    setInputList(newArray);
  };

  const addInput = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setInputList((currentList) => [...currentList, ""]);
  };

  return (
    <PreNoteForm question="가장 관심가는 주제부터 질문 리스트를 만들어보세요!">
      {inputList.map((inputElem, idx) => (
        <InputQuestion key={idx} value={inputElem} idx={idx} onChangeValue={handleChange} onDelete={handleDelete} />
      ))}
      <StAddButton type="button" onClick={addInput}>
        + 질문추가
      </StAddButton>
    </PreNoteForm>
  );
}

const StAddButton = styled.button`
  margin-right: 9.1rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.white400};
  border-radius: 0.8rem;
  padding: 1.35rem 2.4rem;
  background-color: ${({ theme }) => theme.colors.white200};

  width: calc(100% - 5rem);
  color: ${({ theme }) => theme.colors.white500};
  text-align: start;
  ${({ theme }) => theme.fonts.body4}
`;
