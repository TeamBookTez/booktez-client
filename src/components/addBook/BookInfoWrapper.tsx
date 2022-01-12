import { useEffect, useState } from "react";
import styled from "styled-components";

import { BookInfo } from "./AddBookWrapper";

export default function BookInfoWrapper({ book }: any) {
  const [bookInfo, setBookInfo] = useState<BookInfo>({
    thumbnail: "",
    title: "",
    authors: [],
    datetime: "",
    contents: "",
  });
  const { thumbnail, title, authors, datetime, contents }: BookInfo = book;

  console.log(bookInfo);

  useEffect(
    () =>
      setBookInfo((prev: any) => ({
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
        <div>
          <InfoAuthor>{bookInfo.authors}</InfoAuthor>
          <div>hi</div>
          <InfoAuthor>{bookInfo.datetime.toString()}</InfoAuthor>
        </div>
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
