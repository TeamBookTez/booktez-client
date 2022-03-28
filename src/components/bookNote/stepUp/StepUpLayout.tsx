import { useState } from "react";
import styled from "styled-components";

import { IcCancelBlack } from "../../../assets/icons";
import { StepUpContent } from "../../../utils/exampleData";
import CarouselDots from "./CarouselDots";
import StepUpContentWrapper from "./StepUpContentWrapper";

interface StepUpProps {
  stepUpContent: StepUpContent[];
  onToggleModal: () => void;
}

export default function PeriModal(props: StepUpProps) {
  const { stepUpContent, onToggleModal } = props;
  const [contentIndex, setContentIndex] = useState<number>(0);
  const maxIndex = stepUpContent.length - 1;

  const nextSlide = () => {
    if (contentIndex < maxIndex) {
      setContentIndex((curr) => curr + 1);
    } else {
      setContentIndex(0);
    }
  };

  const prevSlide = () => {
    if (contentIndex > 0) {
      setContentIndex((curr) => curr - 1);
    } else {
      setContentIndex(maxIndex);
    }
  };

  const handleSetContentIndex = (idx: number) => {
    setContentIndex(idx);
  };

  return (
    <StModalBox>
      <StModalIcCancel onClick={onToggleModal} />
      <StepUpContentWrapper content={stepUpContent[contentIndex]} />
      <StPrevBtn onClick={prevSlide}>이전</StPrevBtn>
      <StNextBtn onClick={nextSlide}>다음</StNextBtn>
      {stepUpContent.length > 1 && (
        <CarouselDots maxIndex={maxIndex} contentIndex={contentIndex} onSetContentIndex={handleSetContentIndex} />
      )}
    </StModalBox>
  );
}

const StModalBox = styled.article`
  position: relative;

  display: flex;

  width: 85rem;
  height: 48.2rem;

  padding: 4.2rem 4.5rem;

  border-radius: 2.1rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const StModalIcCancel = styled(IcCancelBlack)`
  position: absolute;
  top: 3.2rem;
  right: 4.2rem;

  cursor: pointer;
`;

const StPrevBtn = styled.button`
  position: absolute;
  bottom: 3rem;
  right: 13.6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 8rem;
  height: 4.6rem;

  border-radius: 0.8rem;

  background-color: ${({ theme }) => theme.colors.gray300};

  ${({ theme }) => theme.fonts.button2};
  color: ${({ theme }) => theme.colors.white};
`;

const StNextBtn = styled(StPrevBtn)`
  right: 4rem;
  background-color: ${({ theme }) => theme.colors.orange100};
`;
