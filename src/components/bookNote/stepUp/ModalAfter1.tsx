import { useState } from "react";
import styled from "styled-components";

import { IcCancelBlack } from "../../../assets/icons";
import { after1 } from "../../../utils/dataCarousel";
import CarouselDots from "./CarouselDots";
interface StepUpProps {
  onToggleModal: () => void;
}

export default function ModaAfter1(props: StepUpProps) {
  const { onToggleModal } = props;
  const [slideIndex, setSlideIndex] = useState<number>(1);
  const [data, setData] = useState(after1[0]);

  const nextSlide = (e: any) => {
    e.preventDefault();
    if (slideIndex !== after1.length) {
      setSlideIndex(slideIndex + 1);
      setData(after1[slideIndex]);
    } else if (slideIndex === after1.length) {
      setSlideIndex(1);
      setData(after1[0]);
    }
  };

  const prevSlide = (e: any) => {
    e.preventDefault();
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
      setData(after1[slideIndex - 2]);
    } else if (slideIndex === 1) {
      setSlideIndex(after1.length);
      setData(after1[2]);
    }
  };

  return (
    <StModalBox>
      <StModalIcCancel onClick={onToggleModal} />
      <StLeftWrapper>
        <StImgWrapper>
          <img src="" alt="" />
        </StImgWrapper>
        <StLifeQuotes>{data.lifeQuote}</StLifeQuotes>
        <StPublic>{data.public}</StPublic>
      </StLeftWrapper>
      <StRightWrapper>
        <StHeader>{data.header}</StHeader>
        {data && data.desc.map((comment) => <StDesc key={comment}>{comment}</StDesc>)}
      </StRightWrapper>
      <StPrevBtn onClick={prevSlide}>이전</StPrevBtn>
      <StNextBtn onClick={nextSlide}>다음</StNextBtn>
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
