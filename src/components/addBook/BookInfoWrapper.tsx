import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import { ImgNull } from "../../assets/images";
import { BookInfo } from "../../pages/AddBook";
import ModalBookInfo from "./ModalBookInfo";

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

  const publishDate = {
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
        <ModalBookInfo handleToggleModal={handleToggleModal}>
          {thumbnail ? (
            <ModalThumbnail src={thumbnail} alt="책 표지" />
          ) : (
            <ModalThumbnail src={ImgNull} alt="책 표지" />
          )}
          <ModalTitle>{title}</ModalTitle>
          <ModalLabelWrapper>
            <ModalLabel>{authors} </ModalLabel>
            {translators.length > 0 && (
              <ModalLabel>
                <span> | </span>
                {translators}
              </ModalLabel>
            )}
          </ModalLabelWrapper>
          <ModalDate>
            {publishDate.year}년 {publishDate.month}월 {publishDate.date}일 출간
          </ModalDate>
        </ModalBookInfo>
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
  margin-right: 1.6rem;

  width: 12.1rem;
  height: 16.9rem;
`;

const StInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-top: 1.5rem;
`;

const InfoTitle = styled.strong`
  font: ${({ theme }) => theme.fonts.header2};
`;

const InfoLabelWrapper = styled.div`
  display: flex;
  align-items: center;

  height: 2.1rem;
`;

const InfoLabel = styled.p`
  color: ${({ theme }) => theme.colors.gray300};

  font: ${({ theme }) => theme.fonts.body6};

  vertical-align: middle; // p 태그의 수직 정렬 이렇게 하는 것으로 알고있는데 잘 먹지 않는 것 같아요.
`;

const DivideLine = styled.div`
  margin: 0 1.2rem;

  background-color: ${({ theme }) => theme.colors.white500};

  width: 0.1rem;
  height: 1.1rem;
`;

const InfoSummary = styled.p`
  color: ${({ theme }) => theme.colors.gray300};

  font: ${({ theme }) => theme.fonts.body4};

  overflow: hidden;
  max-height: 8.1rem;
`;

const ModalThumbnail = styled.img`
  width: 20.5rem;
  height: 30rem;

  margin-bottom: 3.5rem;
`;

const ModalTitle = styled.strong`
  margin-bottom: 0.5rem;

  font: ${({ theme }) => theme.fonts.header0};
`;

const ModalLabelWrapper = styled.div`
  display: flex;
  margin-bottom: 2.1rem;
`;

const ModalLabel = styled.p`
  color: ${({ theme }) => theme.colors.gray400};
  font: ${({ theme }) => theme.fonts.body0};

  & > span {
    margin-left: 0.2em;
  }
`;

const ModalDate = styled.p`
  color: ${({ theme }) => theme.colors.white500};
  font: ${({ theme }) => theme.fonts.body2};
`;
