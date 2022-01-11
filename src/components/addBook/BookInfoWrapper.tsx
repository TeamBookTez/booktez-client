import styled from "styled-components";

import { ImgTemp } from "../../assets/images";

export default function BookInfoWrapper({ bookInfo }: any) {
  return (
    <StArticle>
      <StImgTemp src={bookInfo.thumbnail} alt="책 표지" />
      <StInfoWrapper>
        <InfoTitle>{bookInfo.title}</InfoTitle>
        <InfoAuthor>{bookInfo.authors}</InfoAuthor>
        <InfoSummary>{bookInfo.contents}</InfoSummary>
      </StInfoWrapper>
    </StArticle>
  );
}

const StArticle = styled.article`
  display: flex;
  padding: 1.6rem 8.1rem 1.6rem 1.6rem;

  border-radius: 1.6rem;

  height: 20.1rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white300};
    cursor: pointer;
  }
`;

const StImgTemp = styled.img`
  margin-right: 1.6rem;

  /* height: 100%; */
  width: auto;
`;

const StInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1.5rem 0;
`;

const InfoTitle = styled.strong`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3.12rem;
`;

const InfoAuthor = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.08rem;
`;

const InfoSummary = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.34rem;

  overflow: hidden;
  max-height: 6.9rem;
`;
