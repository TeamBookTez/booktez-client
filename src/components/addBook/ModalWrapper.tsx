import React from "react";

import { StBookModalWrapper } from "../common/styled/BookModalWrapper";

interface ModalWrapperProps {
  children: React.ReactNode;
}
export default function ModalWrapper(props: ModalWrapperProps) {
  const { children } = props;

  return <StBookModalWrapper>{children}</StBookModalWrapper>;
}
