import React from "react";
import styled from "styled-components";

interface ModalWrapperProps {
  handleToggleModal: () => void;
  children: React.ReactNode;
}
export default function ModalWrapper(props: ModalWrapperProps) {
  const { handleToggleModal, children } = props;

  const preventMouseEvent = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return <StModalWrapper onClick={preventMouseEvent}>{children}</StModalWrapper>;
}

const StModalWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.white};

  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
`;
