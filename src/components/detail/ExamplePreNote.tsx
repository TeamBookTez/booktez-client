import styled from "styled-components";

import theme from "../../styles/theme";
import LabelQuestion from "../common/styled/LabelQuestion";

interface ExamplePreNoteProps {
  answerOne: string | undefined;
  answerTwo: string | undefined;
  questionList: string[] | undefined;
}

export default function ExamplePreNote(props: ExamplePreNoteProps) {
  const { answerOne, answerTwo, questionList } = props;
  const nickname = "냠냠"; // 닉네임 받아오기(로컬스토리지)

  return (
    <StExampleWrapper>
      <StFirstQuestion>
        <LabelQuestion bgColor={theme.colors.orange100} />
        {nickname ? `${nickname} 독서가` : "익명의 독서가"}님은 이 책에 어떤 기대를 하고 계신가요?
      </StFirstQuestion>
      <StAnswer>{answerOne}</StAnswer>
      <StFirstQuestion>
        <LabelQuestion bgColor={theme.colors.orange100} />이 책의 핵심 메시지는 무엇일까요? 그 중 어느 부분이{" "}
        {nickname ? `${nickname} 독서가` : "익명의 독서가"}
        님의 기대를 만족시킬 수 있을까요?
      </StFirstQuestion>
      <StAnswer>{answerTwo}</StAnswer>
      <StFirstQuestion>
        <LabelQuestion bgColor={theme.colors.orange100} />
        {nickname ? `${nickname} 독서가` : "익명의 독서가"}님은 이 책에 어떤 기대를 하고 계신가요?
      </StFirstQuestion>
      {questionList?.map((question: string, idx: number) => (
        <StAnswer key={idx}>{questionList}</StAnswer>
      ))}
    </StExampleWrapper>
  );
}

const StExampleWrapper = styled.article`
  width: 100%;

  margin-top: 1.2rem;
  padding: 3rem;

  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.colors.white};

  /* 선 추가는 여기서 &::before {} 로 */
  & article {
    padding-left: 5.6rem;
  }
`;

const StQuestion = styled.ul`
  margin-top: 2.4rem;

  ${({ theme }) => theme.fonts.body2};
  line-height: 2.6rem;
  color: ${({ theme }) => theme.colors.gray200};
`;

const StFirstQuestion = styled(StQuestion)`
  margin-top: 4.6rem;

  &:first-child {
    margin-top: 0;
  }
`;

const StAnswer = styled.li`
  list-style: none;

  position: relative;

  margin-top: 1.7rem;
  padding-left: 5.7rem;

  ${({ theme }) => theme.fonts.body3}
  color: ${({ theme }) => theme.colors.gray400};
  white-space: pre-wrap;

  &::before {
    content: "";
    position: absolute;
    left: 3.4rem;
    top: 0.82rem;

    width: 0.7rem;
    height: 0.7rem;

    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.gray400};
  }
`;
