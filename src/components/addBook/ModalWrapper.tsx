import React from "react";
import styled from "styled-components";

interface ModalWrapperProps {
  children: React.ReactNode;
}
export default function ModalWrapper(props: ModalWrapperProps) {
  const { children } = props;

  return <StModalWrapper>{children}</StModalWrapper>;
}

export const StModalWrapper = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.white};
`;
