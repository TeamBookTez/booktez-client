import styled from "styled-components";

import BookInfoWrapper from "./BookInfoWrapper";

export default function BookList() {
  return (
    <StListWrapper>
      {/* map으로 여러개 불러오기 */}
      <BookInfoWrapper />
      <BookInfoWrapper />
      <BookInfoWrapper />
      <BookInfoWrapper />
      <BookInfoWrapper />
      <BookInfoWrapper />
      <BookInfoWrapper />
      <BookInfoWrapper />
      <BookInfoWrapper />
    </StListWrapper>
  );
}

const StListWrapper = styled.section`
  margin: 6.4rem 12.1rem 2.9rem 5.6rem;
`;
