import { useCallback, useState } from "react";
import styled from "styled-components";

import { stepUpContentArray } from "../../../utils/exampleData";
import { StStepModalWrapper } from "../../common/styled/StepModalWrapper";
import { ExButton, StepUp, StepUpLayout } from "..";

interface PreNoteFormProps {
  question: string;
  idx: number;
  onOpenDrawer: (i: number) => void;
  children: React.ReactNode;
}

export default function PreNoteForm(props: PreNoteFormProps) {
  const { question, idx, onOpenDrawer, children } = props;

  // periNote의 handlePeriCarousel과 동일
  const [openModal, setOpenModal] = useState<boolean>(false);

  const onToggleModal = useCallback(() => {
    setOpenModal(!openModal);
  }, [openModal]);

  return (
    <>
      <StSection>
        <StHeader>
          <StH3>
            {question}
            <StepUp onToggleModal={onToggleModal} />
          </StH3>
          <ExButton idx={idx} onOpenDrawer={onOpenDrawer} />
        </StHeader>
        <StArticle>{children}</StArticle>
      </StSection>
      {openModal && (
        <StStepModalWrapper>
          <StepUpLayout onToggleModal={onToggleModal} stepUpContent={stepUpContentArray[idx - 1]} />
        </StStepModalWrapper>
      )}
    </>
  );
}

const StSection = styled.section`
  border: 0.1rem solid transparent;
  border-radius: 1.6rem;
  padding: 2.1rem 3rem 2.6rem 3rem;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.orange100};
  }
`;

const StHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.white400};
  padding-bottom: 2rem;
`;

const StH3 = styled.h3`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.fonts.header4}
`;

const StArticle = styled.article`
  padding: 2.6rem 1.4rem;
`;
