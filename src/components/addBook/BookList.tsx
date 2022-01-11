import styled from "styled-components";

import { BookProps } from "./AddBookWrapper";
import BookInfoWrapper from "./BookInfoWrapper";

export default function BookList({ bookInfo }: any) {
  // console.log(bookInfo);
  // if (books.books.length > 0) {
  //   const book1 = books.books[0];
  //   const { thumbnail, title, authors, datetime, contents }: BookProps = book1;

  //   setBookInfo((prev: any) => ({
  //     ...prev,
  //     thumbnail,
  //     title,
  //     authors,
  //     datetime,
  //     contents,
  //   }));

  //   console.log(bookInfo);
  // }

  return (
    <StListWrapper>
      {/* map으로 여러개 불러오기 */}
      <BookInfoWrapper bookInfo={bookInfo} />
    </StListWrapper>
  );
}

const StListWrapper = styled.section`
  margin: 4.8rem 4rem 2.9rem 4rem;
`;
