import styled from "styled-components";

import { ImgTemp } from "../../assets/images";

export default function BookInfoWrapper() {
  return (
    <StArticle>
      <StImgTemp src={ImgTemp} alt="책 표지" />
      <StInfoWrapper>
        <InfoTitle>도서 제목</InfoTitle>
        <InfoAuthor>저자명 | 출간일</InfoAuthor>
        <InfoSummary>
          북스테어즈 화이팅 북스테어즈 화이팅 북스테어즈 화이팅 북스테어즈 화이팅 북스테어즈 화이팅 북스테어즈 화이팅
          북스테어즈 화이팅 북스테어즈 화이팅 북스테어즈 화이팅 북스테어즈 화이팅 북스테어즈 화이팅 북스테어즈 화이팅
          북스테어즈 화이팅 북스테어즈 화이팅 북스테어즈 화이팅 북스테어즈 화이팅 북스테어즈 화이팅 북스테어즈
          화이팅북스테어즈 화이팅 북스테어즈 화이팅 북스테어즈 화이팅
        </InfoSummary>
      </StInfoWrapper>
    </StArticle>
  );
}

const StArticle = styled.article`
  display: flex;
  margin-bottom: 3.2rem;

  height: 16.9rem;

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
`;
