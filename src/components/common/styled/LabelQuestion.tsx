import styled from "styled-components";

export const LabelQuestion = styled.mark`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 4.1rem;
  height: 2.6rem;

  border-radius: 0.8rem;

  ${({ theme }) => theme.fonts.caption}
  color: white;
`;
