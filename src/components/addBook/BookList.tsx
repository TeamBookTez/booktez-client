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
  const [serverError, setServerError] = useState<boolean>(false);

  const closeAlertToast = () => {
    setAlertToastOpen(false);
  };

  const resetSelectedBookIsbn = () => {
    setSelectedBookIsbn("");
  };

  const handleClickBookCard = (isbn: string) => {
    if (!isLogin) {
      setSelectedBookIsbn(isbn);
    } else {
      checkIsBookExist(isbn).then((result) => {
        if (result.isError) {
          // 에러 토스트 띄우기 - 모종의 이유로 실패한 경우
          setAlertToastOpen(true);
          setServerError(true);
        } else if (result.isExist) {
          // 통신에 성공 - 책이 중복된 경우
          setAlertToastOpen(true);
        } else {
          // 모든 상황을 통과
          setSelectedBookIsbn(isbn);
        }
      });
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
      {alertToastOpen ? <AlertToast onCloseAlertToast={closeAlertToast} isServerError={serverError} /> : null}
    </StListWrapper>
  );
}

const StListWrapper = styled.section`
  margin: 0 4rem 2.9rem 4rem;
`;
