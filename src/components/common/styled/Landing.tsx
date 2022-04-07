import styled from "styled-components";

export const StLandingSectionWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  ${({ theme }) => theme.fonts.body00}
`;

export const StLandingSectionH2 = styled.h2`
  margin-bottom: 4.2rem;

  ${({ theme }) => theme.fonts.header00}
  color: ${({ theme }) => theme.colors.gray100};
`;
