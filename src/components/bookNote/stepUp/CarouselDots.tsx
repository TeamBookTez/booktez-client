import React from "react";
import styled from "styled-components";

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
      {Array.from({ length: 1 }).map((item: any, index: number) => (
        <div
          key={item}
          onClick={() => moveDot(index + 1)}
          className={slideIndex === index + 1 ? "dot active" : "dot"}></div>
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
