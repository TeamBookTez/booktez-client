import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { IcSave } from "../assets/icons";
import { StIcCancel } from "../components/addBook/ShowModal";
import { DrawerWrapper, Navigator } from "../components/bookNote";

export default function BookNote() {
  const [drawerIdx, setDrawerIdx] = useState(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggleDrawer = (i: number) => {
    setIsDrawerOpen(true);
    setDrawerIdx(i);
  };

  return (
    <StWrapper>
      <StNoteModalWrapper isopen={isDrawerOpen}>
        <StIcCancel onClick={() => navigate(-1)} />
        <StBookTitle>엉덩이 탐정 뿡뿡</StBookTitle>
        <StNavWrapper>
          <Navigator />
          <IcSave />
        </StNavWrapper>
        <Outlet context={[handleToggleDrawer]} />
      </StNoteModalWrapper>
      {isDrawerOpen && <DrawerWrapper idx={drawerIdx} isOpen={isDrawerOpen} />}
    </StWrapper>
  );
}

const StWrapper = styled.main`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white200};

  overflow: hidden;
`;

const StNoteModalWrapper = styled.section<{ isopen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;

  padding: 10rem ${({ isopen }) => (isopen ? "3.4rem" : "9.5rem")} 10rem 9.5rem;
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
