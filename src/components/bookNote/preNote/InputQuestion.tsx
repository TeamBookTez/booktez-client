import styled from "styled-components";

import { IcDelete } from "../../../assets/icons";

interface InputQuestionProps {
  idx: number;
  value: string;
  onChangeValue: (e: React.ChangeEvent<HTMLInputElement>, idx: number) => void;
  onDelete: (idx: number) => void;
  isPrevented: boolean;
  isAdded: boolean;
}

export default function InputQuestion(props: InputQuestionProps) {
  const { idx, value, onChangeValue, onDelete, isPrevented, isAdded } = props;

  return (
    <StWrapper>
      <StInput placeholder="질문 입력" value={value} onChange={(e) => onChangeValue(e, idx)} autoFocus={isAdded} />
      {!isPrevented ? <StIcon onClick={() => onDelete(idx)} /> : ""}
    </StWrapper>
  );
}

const StWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StIcon = styled(IcDelete)`
  width: 2.8rem;
  height: 2.8rem;
  margin-left: 2.5rem;
`;

export const StInput = styled.input`
  margin-bottom: 1rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.white400};
  border-radius: 0.8rem;
  padding: 1.35rem 2.4rem;

  width: 100%;

  color: ${({ theme }) => theme.colors.gray400};
  ${({ theme }) => theme.fonts.body4}

  &::placeholder {
    color: ${({ theme }) => theme.colors.white500};
  }
`;
