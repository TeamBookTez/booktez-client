import { useEffect, useState } from "react";
import styled from "styled-components";

import { BookcaseInfo } from "../../pages/Bookcase";
import { useGetBookInfo } from "../../utils/lib/api";
import { Loading } from "../common";
import { AddBookCard, BookCard } from ".";
import Empty from "./cardSection/Empty";

interface CardsProps {
  navIndex: number;
}

export default function Cards(props: CardsProps) {
  const { navIndex } = props;
  const [pathKey, setPathKey] = useState<string>("");

  useEffect(() => {
    switch (navIndex) {
      case 1:
        setPathKey("/book/pre");
        break;
      case 2:
        setPathKey("/book/peri");
        break;
      case 3:
        setPathKey("/book/post");
        break;
      default:
        setPathKey("/book");
    }
  }, [navIndex]);

  const { bookcaseInfo, isLoading, isError } = useGetBookInfo(pathKey);

  if (isLoading) {
    return <Loading />;
  } else if (!bookcaseInfo || isError || bookcaseInfo.length === 0) {
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
          <BookCard key={idx} bookcaseInfo={bookcaseInfo} pathKey={pathKey} />
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
