import styled from "styled-components";

import { IcMore } from "../../../assets/icons";

// interface AnswerInputProps {
//   answer: string;
// }
export default function AnswerInput() {
  return (
    <StWrapper>
      <StAnswer placeholder="질문을 입력해주세요" />
      <IcMore />
    </StWrapper>
  );
}

const StWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StAnswer = styled.input``;
