import { useState } from "react";
import styled from "styled-components";

import BookInfoWrapper from "./BookInfoWrapper";

export interface BookProps {
  thumbnail: string;
  title: string;
  authors: string[];
  datetime: Date;
  contents: string;
}

export default function BookList({ books }: any) {
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
