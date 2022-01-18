import React from "react";
import styled from "styled-components";

export default function RightWrapper() {
  return (
    <StRightWrapper>
      <StHeader></StHeader>
      <StDesc></StDesc>
    </StRightWrapper>
  );
}

const StRightWrapper = styled.div``;
const StHeader = styled.h3``;
const StDesc = styled.p``;
