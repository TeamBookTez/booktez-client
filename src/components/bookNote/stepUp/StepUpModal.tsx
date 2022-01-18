import { useState } from "react";
import styled from "styled-components";

import { IcCancelBlack } from "../../../assets/icons";
import { before1 } from "../../../utils/dataCarousel";
import CarouselDots from "./CarouselDots";
interface StepUpProps {
  onToggleModal: () => void;
}

export default function StepUpModal(props: StepUpProps) {
  const { onToggleModal } = props;
  const [slideIndex, setSlideIndex] = useState<number>(1);

  return (
    <StModalBox>
      <StModalIcCancel onClick={onToggleModal} />
      <StLeftWrapper>
        <StImgWrapper>
          <img src="" alt="" />
        </StImgWrapper>
        <StLifeQuotes>{before1.lifeQuote}</StLifeQuotes>
        <StPublic>{before1.public}</StPublic>
      </StLeftWrapper>
      <StRightWrapper>
        <StHeader>{before1.header}</StHeader>
        {before1 && before1.desc.map((comment) => <StDesc key={comment}>{comment}</StDesc>)}
      </StRightWrapper>
      <CarouselDots slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
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

const StLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 36.9rem;

  margin-right: 2.8rem;
`;

const StImgWrapper = styled.div`
  width: 35.2rem;
  height: 33.2rem;

  margin-bottom: 2rem;

  & > img {
    width: 100%;
    height: 100%;
  }
`;

const StLifeQuotes = styled.p`
  ${({ theme }) => theme.fonts.caption};
  color: ${({ theme }) => theme.colors.gray200};
`;

const StPublic = styled.p`
  ${({ theme }) => theme.fonts.caption};
  color: ${({ theme }) => theme.colors.gray200};
`;

const StRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const StHeader = styled.h3`
  margin-bottom: 2.4rem;

  ${({ theme }) => theme.fonts.header3};
  color: ${({ theme }) => theme.colors.gray100};
`;

const StDesc = styled.p`
  ${({ theme }) => theme.fonts.body4};
  color: ${({ theme }) => theme.colors.gray100};
`;
