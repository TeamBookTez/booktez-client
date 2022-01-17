import styled from "styled-components";

import { IcDelete } from "../../assets/icons";
import { InputQuestion, PreNoteLayout } from ".";

export default function QuestionThree() {
  return (
    <PreNoteLayout question="익명의 독서가(비회원) / OOO 독서가 님은 이 책에 어떤 기대를 하고 계신가요?">
      <StWrapper>
        <InputQuestion />
        <StIcon />
      </StWrapper>
      <StWrapper>
        <InputQuestion />
        <StIcon />
      </StWrapper>
      <StWrapper>
        <InputQuestion />
        <StIcon />
      </StWrapper>
      <StAddButton>+ 질문추가</StAddButton>
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

const StWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StIcon = styled(IcDelete)`
  width: 2.8rem;
  height: 2.8rem;
  margin-left: 2.5rem;
`;
