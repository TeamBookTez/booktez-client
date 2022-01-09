import styled from "styled-components";

export const Button = styled.button`
  border-radius: 2.1rem;
  background-color: ${({ theme }) => theme.colors.orange100};
  color: ${({ theme }) => theme.colors.white};
`;
