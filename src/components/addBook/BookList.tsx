import { useState } from "react";
import styled from "styled-components";

import { BookInfo } from "../../pages/AddBook";
import { checkIsBookExist } from "../../utils/lib/api";
import AlertToast from "./AlertToast";
import BookEmpty from "./BookEmpty";
import BookInfoWrapper from "./BookInfoWrapper";

interface BookListProps {
  books: BookInfo[];
}

export default function BookList(props: BookListProps) {
  const { books } = props;

  // default is false
  const [alertToastOpen, setAlertToastOpen] = useState<boolean>(false);
  const [selectedBookIsbn, setSelectedBookIsbn] = useState<string>("");

  const closeAlertToast = () => {
    setAlertToastOpen(false);
  };

  const handleClickBookCard = (isbn: string) => {
    checkIsBookExist(isbn).then((result) => {
      if (result.isError) {
        // 에러 토스트 띄우기 - 모종의 이유로 실패한 경우
        return;
      } else if (result.isExist) {
        // 통신에 성공 - 책이 중복된 경우
        setAlertToastOpen(true);
      } else {
        // 모든 상황을 통과
        setSelectedBookIsbn(isbn);
      }
    });
  };

  if (books.length === 0) return <BookEmpty />;

  return (
    <StListWrapper>
      {books.map((book: BookInfo, idx: number) => (
        <BookInfoWrapper
          key={idx}
          book={book}
          selectedBookIsbn={selectedBookIsbn}
          onClickBookCard={handleClickBookCard}
        />
      ))}
      {alertToastOpen ? <AlertToast onCloseAlertToast={closeAlertToast} /> : null}
    </StListWrapper>
  );
}

const StListWrapper = styled.section`
  margin: 0 4rem 2.9rem 4rem;
`;
