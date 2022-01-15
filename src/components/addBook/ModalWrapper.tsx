import React from "react";
import styled from "styled-components";

interface ModalWrapperProps {
  children: React.ReactNode;
}
export default function ModalWrapper(props: ModalWrapperProps) {
  const { children } = props;

  return <StModalWrapper>{children}</StModalWrapper>;
}

const StModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;

  background-color: ${({ theme }) => theme.colors.white};
`;
