import styled from "styled-components";

interface LabelQuestionProps {
  bgColor: string;
}

export default function LabelQuestion(props: LabelQuestionProps) {
  const { bgColor } = props;

  return <StLabelQuestion bgcolor={bgColor}>질문</StLabelQuestion>;
}

const StLabelQuestion = styled.mark<{ bgcolor: string }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  min-width: 4.1rem;
  height: 2.6rem;

  margin-right: 1.6rem;

  border-radius: 0.8rem;

  ${({ theme }) => theme.fonts.caption}
  color: white;
  background-color: ${({ bgcolor }) => bgcolor};
`;
