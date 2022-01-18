import React from "react";
import styled from "styled-components";

import { StIcCancel } from "../../addBook/ShowModal";
import LeftWrapper from "./LeftWrapper";
import RightWrapper from "./RightWrapper";

export default function StepUpModal() {
  return (
    <StModalBox>
      <StIcCancel />
      <StContentWrapper>
        <LeftWrapper />
        <RightWrapper />
      </StContentWrapper>
    </StModalBox>
  );
}

const StModalBox = styled.article``;
const StContentWrapper = styled.div``;
