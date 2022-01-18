import { useCallback, useState } from "react";
import styled from "styled-components";

import { StModalWrapper } from "../../addBook/ModalWrapper";
import { ExButton, StepUp } from "..";
import StepUpModal from "./StepUpModal";

interface PreNoteFormProps {
  question: string;
  children: React.ReactNode;
}

export default function PreNoteForm(props: PreNoteFormProps) {
  const { question, children } = props;

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
          <ExButton />
        </StHeader>
        <StArticle>{children}</StArticle>
      </StSection>
      {openModal && (
        <StStepModalWrapper>
          <StepUpModal />
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

const StStepModalWrapper = styled(StModalWrapper)`
  z-index: 20;

  background-color: rgba(55, 56, 62, 0.8);
`;
