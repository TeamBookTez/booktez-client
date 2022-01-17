import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { IcSave } from "../assets/icons";
import { StIcCancel } from "../components/addBook/ShowModal";
import { Navigator } from "../components/bookNote";

export default function BookNote() {
  const navigate = useNavigate();

  return (
    <StNoteModalWrapper>
      <StIcCancel onClick={() => navigate(-1)} />
      <StBookTitle>엉덩이 탐정 뿡뿡</StBookTitle>
      <StNavWrapper>
        <Navigator />
        <IcSave />
      </StNavWrapper>
      <Outlet />
    </StNoteModalWrapper>
  );
}

const StNoteModalWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

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
