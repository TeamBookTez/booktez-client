import { useEffect, useState } from "react";
import styled from "styled-components";

import { BookInfo } from "./AddBookWrapper";

export default function BookInfoWrapper(props: { book: BookInfo }) {
  const { book } = props;

  const [bookInfo, setBookInfo] = useState<BookInfo>({
    thumbnail: "",
    title: "",
    authors: [],
    datetime: "",
    contents: "",
  });

  const { thumbnail, title, authors, datetime, contents }: BookInfo = book;

  const dateTimeString = bookInfo.datetime.toString();

  const publishDate = {
    year: dateTimeString.slice(0, 4),
    month: dateTimeString.slice(5, 7),
    date: dateTimeString.slice(8, 10),
  };

  useEffect(
    () =>
      setBookInfo((prev: BookInfo) => ({
        ...prev,
        thumbnail,
        title,
        authors,
        datetime,
        contents,
      })),
    [],
  );

  // console.log(bookInfo.datetime, typeof bookInfo.datetime);

  return (
    <StArticle>
      <StImgTemp src={bookInfo.thumbnail} alt="책 표지" />
      <StInfoWrapper>
        <InfoTitle>{bookInfo.title}</InfoTitle>
        <InfoLabelWrapper>
          <InfoDetail>{bookInfo.authors}</InfoDetail>
          <DivideLine></DivideLine>
          <InfoDetail>
            {publishDate.year}년 {publishDate.month}월 {publishDate.date}일
          </InfoDetail>
        </InfoLabelWrapper>
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
    background-color: ${({ theme }) => theme.colors.orange200};
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

  padding-top: 1.5rem;
`;

const InfoTitle = styled.strong`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3.12rem;
`;

const InfoLabelWrapper = styled.div`
  display: flex;
  align-items: center;

  height: 2.1rem;
`;

const InfoDetail = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.08rem;
  text-align: center;
`;

const DivideLine = styled.div`
  margin: 0 1.2rem;

  background-color: ${({ theme }) => theme.colors.white500};

  width: 0.1rem;
  height: 1.1rem;
`;

const InfoSummary = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.34rem;

  overflow: hidden;
  max-height: 6.9rem;
`;
