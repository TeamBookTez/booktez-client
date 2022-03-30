import styled, { css } from "styled-components";

interface CarouselProps {
  maxIndex: number;
  contentIndex: number;
  onSetContentIndex: (idx: number) => void;
}

export default function CarouselDots(props: CarouselProps) {
  const { maxIndex, contentIndex, onSetContentIndex } = props;

  return (
    <StContainerDots>
      {Array.from({ length: maxIndex + 1 }, (value: number, index: number) => (
        <StDiv
          key={`carouselDots-${index}`}
          isActive={contentIndex === index}
          onClick={() => onSetContentIndex(value)}
        />
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
    isActive &&
    css`
      background: ${({ theme }) => theme.colors.orange300};
    `}
`;
