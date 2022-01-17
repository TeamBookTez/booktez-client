import { useState } from "react";
import styled from "styled-components";

import { InputQuestion, PreNoteLayout } from ".";

export default function QuestionThree() {
  const [inputList, setInputList] = useState<string[]>(["", "", ""]);

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

  const addInput = () => {
    setInputList((currentList) => [...currentList, ""]);
  };

  return (
    <PreNoteLayout question="익명의 독서가(비회원) / OOO 독서가 님은 이 책에 어떤 기대를 하고 계신가요?">
      {inputList.map((inputElem, idx) => (
        <InputQuestion key={idx} value={inputElem} idx={idx} onChangeValue={handleChange} onDelete={handleDelete} />
      ))}
      <StAddButton onClick={addInput}>+ 질문추가</StAddButton>
    </PreNoteLayout>
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
