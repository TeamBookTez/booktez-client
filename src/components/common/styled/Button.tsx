import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.orange100}; // active

  color: ${({ theme }) => theme.colors.white}; // active
`;
