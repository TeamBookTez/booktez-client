import styled from "styled-components";

import { BookcaseInfo } from "../../pages/Bookcase";
import { AddBookCard, BookCard } from ".";
import Empty from "./cardSection/Empty";

interface CardsProps {
  bookcaseInfo: BookcaseInfo[];
}
export default function Cards(props: CardsProps) {
  const { bookcaseInfo } = props;

  console.log(bookcaseInfo);

  if (bookcaseInfo.length === 0) {
    return (
      <StSection>
        <Empty />
      </StSection>
    );
  } else {
    return (
      <StSection>
        <AddBookCard />
        {bookcaseInfo.map((bookcaseInfo: BookcaseInfo, idx: number) => (
          <BookCard key={idx} bookcaseInfo={bookcaseInfo} />
        ))}
      </StSection>
    );
  }
}

const StSection = styled.section`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  /* height: 83%; */

  padding-top: 3.2rem;
  padding-left: 2rem;
`;
