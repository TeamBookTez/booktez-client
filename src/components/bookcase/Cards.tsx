import React from "react";
import styled from "styled-components";

import AddBookCard from "./cardSection/AddBookCard";
import BookCard from "./cardSection/BookCard";

export default function Cards() {
  return (
    <StSection>
      <AddBookCard />
      <BookCard />
    </StSection>
  );
}

const StSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 83%;
  padding-top: 3.2rem;
  padding-left: 2rem;
`;
