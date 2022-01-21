import styled from "styled-components";

export default function LabelQuestion4Depth() {
  return <StLabelQuestion>질문</StLabelQuestion>;
}

const StLabelQuestion = styled.mark`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  min-width: 4.1rem;
  height: 2.6rem;

  margin-right: 1.6rem;

  border-radius: 0.8rem;

  ${({ theme }) => theme.fonts.caption}
  color: ${({ theme }) => theme.colors.orange100};
  background-color: ${({ theme }) => theme.colors.orange500};
`;
