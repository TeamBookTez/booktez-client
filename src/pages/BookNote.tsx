import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { IcSave } from "../assets/icons";
import { StModalWrapper } from "../components/addBook/ModalWrapper";
import { StIcCancel } from "../components/addBook/ShowModal";
import Navigater from "../components/bookNote/Navigater";

export default function BookNote() {
  return (
    <StNoteModalWrapper>
      <StIcCancel />
      <StBookTitle>엉덩이 탐정 뿡뿡</StBookTitle>
      <StNavWrapper>
        <Navigater />
        <IcSave />
      </StNavWrapper>
      <Outlet />
    </StNoteModalWrapper>
  );
}

const StNoteModalWrapper = styled(StModalWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;

  padding: 10rem 9.5rem;

  background-color: ${({ theme }) => theme.colors.white200};
`;

const StNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  width: 100%;
`;

const StBookTitle = styled.h1`
  width: 100%;

  ${({ theme }) => theme.fonts.header0};
`;
