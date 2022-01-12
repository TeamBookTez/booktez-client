import styled from "styled-components";

import { BookInfo } from "./AddBookWrapper";
import BookInfoWrapper from "./BookInfoWrapper";

interface BookListProps {
  books: BookInfo[];
}

export default function BookList(props: BookListProps) {
  const { books } = props;

  return (
    <StListWrapper>
      {books.map((book: BookInfo, idx: number) => (
        <BookInfoWrapper key={idx} book={book} />
      ))}
    </StListWrapper>
  );
}

const StListWrapper = styled.section`
  margin: 4.8rem 4rem 2.9rem 4rem;
`;
