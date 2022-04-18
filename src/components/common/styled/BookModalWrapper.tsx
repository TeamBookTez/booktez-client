import styled from "styled-components";

export const StBookModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;

  background-color: ${({ theme }) => theme.colors.white};
`;
