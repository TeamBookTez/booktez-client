import { useState } from "react";
import styled from "styled-components";

import { BookProps } from "./AddBookWrapper";
import BookInfoWrapper from "./BookInfoWrapper";

export default function BookList(props: { books: BookProps[] }) {
  const { books } = props;

  return (
    <StListWrapper>
      {books.map((book: any, idx: number) => (
        <BookInfoWrapper key={idx} book={book} />
      ))}
    </StListWrapper>
  );
}

const StListWrapper = styled.section`
  margin: 4.8rem 4rem 2.9rem 4rem;
`;
