import styled from "styled-components";

import { IcCancelWhite } from "../../../assets/icons";

export const StIcCancelWhite = styled(IcCancelWhite)`
  position: absolute;
  top: 3.2rem;
  left: 2.4rem;
  z-index: 20;

  width: 4.8rem;
  height: 4.8rem;

  &:hover {
    cursor: pointer;
  }
`;

export const StNoteModalWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;
  min-height: 100vh;

  padding: 10rem 9.5rem;

  background-color: ${({ theme }) => theme.colors.white200};
`;

export const StBookTitle = styled.h1`
  width: 100%;

  ${({ theme }) => theme.fonts.header0};
`;

export const StNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  width: 100%;
`;
