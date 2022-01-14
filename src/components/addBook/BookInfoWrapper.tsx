import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import { ImgNull } from "../../assets/images";
import { BookInfo } from "../../pages/AddBook";
import ModalWrapper from "./ModalWrapper";
import ShowModal from "./ShowModal";

export interface PublishDate {
  year: string;
  month: string;
  date: string;
}

export default function BookInfoWrapper(props: { book: BookInfo }) {
  const { book } = props;

  const [bookInfo, setBookInfo] = useState<BookInfo>({
    thumbnail: "",
    title: "",
    authors: [],
    translators: [],
    datetime: "",
    contents: "",
    isbn: "",
  });

  const [openModal, setOpenModal] = useState<boolean>(false);

  const { thumbnail, title, authors, datetime, contents, translators }: BookInfo = book;

  console.log(authors);
  const dateTimeString = bookInfo.datetime.toString();

  const publishDate: PublishDate = {
    year: dateTimeString.slice(0, 4),
    month: dateTimeString.slice(5, 7),
    date: dateTimeString.slice(8, 10),
  };

  const handleToggleModal = useCallback(() => {
    setOpenModal(!openModal);
  }, [openModal]);

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
    <StArticle onClick={handleToggleModal}>
      {thumbnail ? (
        <StThumbnail src={thumbnail} alt="책 표지" />
      ) : (
        <StThumbnail src={ImgNull} alt="책 표지가 없습니다" />
      )}
      <StInfoWrapper>
        <InfoTitle>{title}</InfoTitle>
        <InfoLabelWrapper>
          <InfoLabel>{authors}</InfoLabel>
          <DivideLine></DivideLine>
          <InfoLabel>
            {publishDate.year}년 {publishDate.month}월 {publishDate.date}일
          </InfoLabel>
        </InfoLabelWrapper>
        <InfoSummary>{contents}</InfoSummary>
      </StInfoWrapper>
      {openModal && (
        <ModalWrapper handleToggleModal={handleToggleModal}>
          <ShowModal
            thumbnail={thumbnail}
            title={title}
            authors={authors}
            translators={translators}
            publishDate={publishDate}
          />
        </ModalWrapper>
      )}
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

const StThumbnail = styled.img`
  width: 12.1rem;
  height: 16.9rem;

  margin-right: 1.6rem;

  border-radius: 0.8rem;
`;

const StInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-top: 1.5rem;
`;

const InfoTitle = styled.strong`
  ${({ theme }) => theme.fonts.header2};
`;

const InfoLabelWrapper = styled.div`
  display: flex;
  align-items: center;

  height: 2.1rem;
`;

const InfoLabel = styled.p`
  color: ${({ theme }) => theme.colors.gray300};

  ${({ theme }) => theme.fonts.body6};

  line-height: 2.1rem; //감싸고 있는 부모의 div 높이인 2.1rem만큼 주어서 중앙에 오도록 설정(미세한 오차는 있음) - 씨에스에스 이주함 선생 -
`;

const DivideLine = styled.div`
  margin: 0 1.2rem;

  background-color: ${({ theme }) => theme.colors.white500};

  width: 0.1rem;
  height: 1.1rem;
`;

const InfoSummary = styled.p`
  color: ${({ theme }) => theme.colors.gray300};

  ${({ theme }) => theme.fonts.body4};

  overflow: hidden;
  max-height: 8.1rem;
`;
