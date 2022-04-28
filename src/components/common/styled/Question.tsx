import styled from "styled-components";

export const StQuestion = styled.h3`
  display: flex;
  align-items: center;

  margin-top: 2.3rem;

  ${({ theme }) => theme.fonts.body2};
  line-height: 2.6rem;
  color: ${({ theme }) => theme.colors.gray200};
`;

export const StLabelQuestion = styled.mark<{ bgcolor: string }>`
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
