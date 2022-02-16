import styled from "styled-components";

import { BookcaseInfo } from "../../pages/Bookcase";
import { AddBookCard, BookCard } from ".";
import Empty from "./cardSection/Empty";

interface CardsProps {
  bookcaseInfo: BookcaseInfo[];
  reloadBookcase: (key: string) => void;
  isLogin: boolean;
}
export default function Cards(props: CardsProps) {
  const { bookcaseInfo, reloadBookcase, isLogin } = props;

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
          <BookCard key={idx} bookcaseInfo={bookcaseInfo} reloadBookcase={reloadBookcase} isLogin={isLogin} />
        ))}
      </StSection>
    );
  }
}
const StDefaultSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  height: calc(100vh - 19.7rem);
`;

const StSection = styled.section`
  display: flex;
  flex-wrap: wrap;

  width: 100%;

  padding-top: 3.2rem;
  padding-left: 2rem;
`;
