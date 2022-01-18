import React from "react";
import styled from "styled-components";

import { StIcCancel } from "../../addBook/ShowModal";

interface StepUpBoxProps {
  idx: number;
}

interface Contents {
  lifeQuote?: string[];
  public?: string[];
  header: string[];
  desc: string[];
}

export default function StepUpModal(props: StepUpBoxProps) {
  const { idx } = props;

  const contents: Contents = { lifeQuote: [""], public: [""], header: [""], desc: [""] };

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
