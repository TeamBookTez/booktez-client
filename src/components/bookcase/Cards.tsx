import styled from "styled-components";

import { ImgTemp } from "../../assets/images";
import { AddBookCard, BookCard } from ".";

export default function Cards() {
  const tempBookInfo = {
    thumbnail: ImgTemp,
    title: "조화로운 부",
    authors: ["제임스 아세 러이", "령이"],
  };

  return (
    <StSection>
      <AddBookCard />
      <BookCard bookInfo={tempBookInfo} />
      <BookCard bookInfo={tempBookInfo} />
      <BookCard bookInfo={tempBookInfo} />
      <BookCard bookInfo={tempBookInfo} />
      <BookCard bookInfo={tempBookInfo} />
      <BookCard bookInfo={tempBookInfo} />
      <BookCard bookInfo={tempBookInfo} />
      <BookCard bookInfo={tempBookInfo} />
      <BookCard bookInfo={tempBookInfo} />
      <BookCard bookInfo={tempBookInfo} />
      <BookCard bookInfo={tempBookInfo} />
      <BookCard bookInfo={tempBookInfo} />
      <BookCard bookInfo={tempBookInfo} />
    </StSection>
  );
}

const StSection = styled.section`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  /* height: 83%; */

  padding-top: 3.2rem;
  padding-left: 2rem;
`;
