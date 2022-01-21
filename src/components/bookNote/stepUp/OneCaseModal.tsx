import styled from "styled-components";

import { IcCancelBlack } from "../../../assets/icons";
import { ImgBefore1, ImgBefore3 } from "../../../assets/images";
import { before1, before3 } from "../../../utils/mockData";

interface StepUpProps {
  idx: number;
  onToggleModal: () => void;
}

export default function OneCaseModal(props: StepUpProps) {
  const { idx, onToggleModal } = props;

  return (
    <StModalBox>
      <StModalIcCancel onClick={onToggleModal} />
      <StLeftWrapper>
        <StImgWrapper>
          {idx === 1 ? (
            <img src={ImgBefore1} alt="방향성을 찾아보세요" />
          ) : (
            <img src={ImgBefore3} alt="방향성을 찾아보세요" />
          )}
        </StImgWrapper>
        <StLifeQuotes>{idx === 1 ? before1.lifeQuote : before3.lifeQuote}</StLifeQuotes>
        <StPublic>{idx === 1 ? before1.public : before3.public}</StPublic>
      </StLeftWrapper>
      <StRightWrapper>
        <StHeader>{idx === 1 ? before1.header : before3.header}</StHeader>
        {idx === 1
          ? before1.desc.map((comment) => <StDesc key={comment}>{comment}</StDesc>)
          : before3.desc.map((comment) => <StDesc key={comment}>{comment}</StDesc>)}
      </StRightWrapper>
      <StCarouselDot />
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

const StCarouselDot = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 50%;

  width: 1rem;
  height: 1rem;
  border-radius: 50%;

  background-color: ${({ theme }) => theme.colors.orange100};
`;
