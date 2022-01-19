import styled from "styled-components";

import theme from "../../styles/theme";
import { AnswerThree } from "../../utils/dataType";
import LabelQuestion from "../common/styled/LabelQuestion";

interface ExamplePreNoteProps {
  answerThree: AnswerThree | undefined;
}

export default function ExamplePeriNote(props: ExamplePreNoteProps) {
  const { answerThree } = props;

  console.log(answerThree);

  return (
    <StExampleWrapper>
      <StFirstQuestion>
        <LabelQuestion bgColor={theme.colors.orange100} />
        QQQQQQQQ
      </StFirstQuestion>
      <StAnswer>AAAAAAA</StAnswer>
      <article>
        <StQuestion>
          <LabelQuestion bgColor={theme.colors.orange100} />
          QQQQQQQQ
        </StQuestion>
        <StAnswer>AAAAAAA</StAnswer>
      </article>
      <StFirstQuestion>
        <LabelQuestion bgColor={theme.colors.orange100} />
        QQQQQQQQ
      </StFirstQuestion>
      <StAnswer>AAAAAAA</StAnswer>
      <article>
        <StQuestion>
          <LabelQuestion bgColor={theme.colors.orange100} />
          QQQQQQQQ
        </StQuestion>
        <StAnswer>AAAAAAA</StAnswer>
      </article>
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
  margin-top: 2.3rem;

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

// export const StQuestion = styled.ul`
//   margin-top: 2.4rem;

//   ${({ theme }) => theme.fonts.body2};
//   line-height: 2.6rem;
//   color: ${({ theme }) => theme.colors.gray200};
// `;

// export const StAnswer = styled.li`
//   list-style: none;

//   position: relative;

//   margin-top: 1.7rem;
//   padding-left: 5.7rem;

//   ${({ theme }) => theme.fonts.body3}
//   color: ${({ theme }) => theme.colors.gray400};

//   &::before {
//     content: "";
//     position: absolute;
//     left: 3.4rem;
//     top: 0.82rem;

//     width: 0.7rem;
//     height: 0.7rem;

//     border-radius: 1rem;
//     background-color: ${({ theme }) => theme.colors.gray400};
//   }
// `;
