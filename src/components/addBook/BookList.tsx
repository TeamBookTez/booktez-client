import { useEffect, useState } from "react";
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
  margin: 4.8rem 4rem 2.9rem 4rem;
`;
