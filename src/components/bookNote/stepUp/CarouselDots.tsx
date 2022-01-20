import React from "react";
import styled, { css } from "styled-components";

import { before2 } from "../../../utils/mockData";

interface CarouselProps {
  slideIndex: number;
  setSlideIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function CarouselDots(props: CarouselProps) {
  const { slideIndex, setSlideIndex } = props;

  const moveDot = (index: number) => {
    setSlideIndex(index);
  };

  return (
    <StContainerDots>
      {Array.from({ length: 3 }).map((item: any, index: number) => (
        <StDiv key={item} onClick={() => moveDot(index + 1)} isActive={slideIndex === index + 1} />
      ))}
    </StContainerDots>
  );
}

const StContainerDots = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 50%;

  display: flex;

  transform: translateX(-50%);
`;

const StDiv = styled.div<{ isActive: boolean }>`
  width: 1rem;
  height: 1rem;

  margin: 0 0.5rem;

  border-radius: 50%;

  transition: 0.5s;
  background: ${({ theme }) => theme.colors.white300};

  ${({ isActive }) =>
    isActive
      ? css`
          background: ${({ theme }) => theme.colors.orange300};
        `
      : css``}
`;
