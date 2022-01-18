import styled from "styled-components";

import { IcCancelBlack } from "../../../assets/icons";
import { before1 } from "../../../utils/dataCarousel";

interface StepUpProps {
  onToggleModal: () => void;
}

export default function StepUpModal(props: StepUpProps) {
  const { onToggleModal } = props;

  return (
    <StModalBox>
      <StModalIcCancel onClick={onToggleModal} />
      <StContentWrapper>
        <StLeftWrapper>
          <StImgWrapper>
            <img src="" alt="" />
          </StImgWrapper>
          <StLifeQuotes>{before1.lifeQuote}</StLifeQuotes>
          <StPublic>{before1.public}</StPublic>
        </StLeftWrapper>
        <StRightWrapper>
          <StHeader>{before1.header}</StHeader>
          <StDesc>{before1.desc}</StDesc>
        </StRightWrapper>
      </StContentWrapper>
    </StModalBox>
  );
}

const StModalBox = styled.article`
  position: relative;

  display: flex;

  width: 85rem;
  height: 48rem;

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
const StContentWrapper = styled.div``;
const StLeftWrapper = styled.div``;
const StImgWrapper = styled.div``;
const StLifeQuotes = styled.p``;
const StPublic = styled.p``;
const StRightWrapper = styled.div``;
const StHeader = styled.h3``;
const StDesc = styled.p``;
