import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

import { BookcaseInfo } from "../../pages/Bookcase";
import { AddBookCard, BookCard } from ".";
import Empty from "./cardSection/Empty";

interface CardsProps {
  bookcaseInfo: BookcaseInfo[];
  setBookDelete: Dispatch<SetStateAction<boolean>>;
}
export default function Cards(props: CardsProps) {
  const { bookcaseInfo, setBookDelete } = props;

  if (bookcaseInfo.length === 0) {
    return (
      <StDefaultSection>
        <Empty />
      </StDefaultSection>
    );
  } else {
    return (
      <StSection>
        <AddBookCard />
        {bookcaseInfo.map((bookcaseInfo: BookcaseInfo, idx: number) => (
          <BookCard key={idx} bookcaseInfo={bookcaseInfo} setBookDelete={setBookDelete} />
        ))}
      </StSection>
    );
  }
}
const StDefaultSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  height: calc(100% - 19.7rem);
`;

const StSection = styled.section`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  /* height: 83%; */

  padding-top: 3.2rem;
  padding-left: 2rem;
`;
