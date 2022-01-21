import styled from "styled-components";

import { StModalWrapper } from "../../addBook/ModalWrapper";
import { Button } from "./Button";

export const StPopUpWrpper = styled(StModalWrapper)`
  background-color: rgba(55, 56, 62, 0.9);
`;

export const StPopUp = styled.article`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 43.5rem;
  height: 35.2rem;

  padding: 3rem;

  border-radius: 2.1rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const StQuestion = styled.p`
  margin-top: 0.5rem;

  ${({ theme }) => theme.fonts.header3}
  color: ${({ theme }) => theme.colors.gray100};
`;

export const StDetail = styled.p`
  margin-top: 1.2rem;

  ${({ theme }) => theme.fonts.body2}
  color: ${({ theme }) => theme.colors.gray400};
`;

export const StBtnWrapper = styled.div`
  position: absolute;
  right: 3rem;
  bottom: 3rem;

  width: 100%;

  display: flex;
  justify-content: flex-end;
`;

export const StBtnCancel = styled(Button)`
  width: 8rem;
  height: 4.6rem;

  margin-right: 1.6rem;

  border-radius: 0.8rem;

  ${({ theme }) => theme.fonts.button}
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.gray300};
`;

export const StBtnDelete = styled(Button)`
  width: 8rem;
  height: 4.6rem;

  border-radius: 0.8rem;

  ${({ theme }) => theme.fonts.button}
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.orange100};
`;
