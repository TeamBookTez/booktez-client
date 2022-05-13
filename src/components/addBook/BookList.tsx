import { useState } from "react";
import styled from "styled-components";

import { BookInfo } from "../../pages/AddBook";
import { checkIsBookExist } from "../../utils/lib/api";
import { useAlertToast } from "../../utils/useHooks";
import AlertToast from "./AlertToast";
import BookEmpty from "./BookEmpty";
import BookInfoWrapper from "./BookInfoWrapper";

interface BookListProps {
  isLogin: boolean;
  books: BookInfo[];
}

export default function BookList(props: BookListProps) {
  const { isLogin, books } = props;

  // default is false
  const [alertToastOpen, setAlertToastOpen] = useState<boolean>(false);
  const [selectedBookIsbn, setSelectedBookIsbn] = useState<string>("");
  const [isServerError, setIsServerError] = useState<boolean>(false);

  const closeAlertToast = () => {
    setAlertToastOpen(false);
  };

  const resetSelectedBookIsbn = () => {
    setSelectedBookIsbn("");
  };

  const handleClickBookCard = (isbn: string) => {
    if (!isLogin) return setSelectedBookIsbn(isbn);

    checkIsBookExist(isbn).then((result) => {
      categorizeToast(result.isError, result.isExist, isbn);
    });
  };

  const categorizeToast = (isError: boolean, isExist: boolean, isbn: string) => {
    if (isError) {
      // 에러 토스트 띄우기 - 모종의 이유로 실패한 경우
      setAlertToastOpen(true);
      setIsServerError(true);
    } else if (isExist) {
      // 통신에 성공 - 책이 중복된 경우
      setAlertToastOpen(true);
    } else {
      // 모든 상황을 통과
      setSelectedBookIsbn(isbn);
    }
  };


  useAlertToast(alertToastOpen, () => setAlertToastOpen(false));


  if (books.length === 0) return <BookEmpty />;

  return (
    <StListWrapper>
      {books.map((book: BookInfo, idx: number) => (
        <BookInfoWrapper
          key={idx}
          book={book}
          selectedBookIsbn={selectedBookIsbn}
          onClickBookCard={handleClickBookCard}
          onResetSelectedBookIsbn={resetSelectedBookIsbn}
        />
      ))}
      {alertToastOpen ? <AlertToast onCloseAlertToast={closeAlertToast} isServerError={isServerError} /> : null}
    </StListWrapper>
  );
}

const StListWrapper = styled.section`
  margin: 0 4rem 2.9rem 4rem;
`;
