import React from "react";
import styled, { css } from "styled-components";

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
  ${({ isActive }) =>
    isActive
      ? css`
          border-radius: 0.7rem;
          background: ${({ theme }) => theme.colors.orange300};
        `
      : css`
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          margin: 0 0.5rem;
          transition: 0.5s;
          background: ${({ theme }) => theme.colors.white300};
        `}
`;
