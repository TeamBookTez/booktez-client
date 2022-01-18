import React from "react";
import styled from "styled-components";

import { StIcCancel } from "../../addBook/ShowModal";

export default function StepUpModal() {
  return (
    <StModalBox>
      <StIcCancel />
      <StContentWrapper>
        <StLeftWrapper>
          <StImgWrapper>
            <img src="" alt="" />
          </StImgWrapper>
          <StLifeQuotes></StLifeQuotes>
        </StLeftWrapper>
        <StRightWrapper>
          <StHeader></StHeader>
          <StDesc></StDesc>
        </StRightWrapper>
      </StContentWrapper>
    </StModalBox>
  );
}

const StModalBox = styled.article``;
const StContentWrapper = styled.div``;
const StLeftWrapper = styled.div``;
const StRightWrapper = styled.div``;
const StImgWrapper = styled.div``;
const StLifeQuotes = styled.p``;
const StHeader = styled.h3``;
const StDesc = styled.p``;
