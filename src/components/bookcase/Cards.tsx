import { useEffect, useState } from "react";
import styled from "styled-components";

import { BookcaseInfo } from "../../pages/Bookcase";
import { getData, useGetBookInfo } from "../../utils/lib/api";
import { Error404, Loading } from "../common";
import { AddBookCard, BookCard } from ".";
import Empty from "./cardSection/Empty";

interface CardsProps {
  isLogin: boolean;
  navIndex: number;
}

export default function Cards(props: CardsProps) {
  const { isLogin, navIndex } = props;
  const [path, setPath] = useState<string>("");

  useEffect(() => {
    switch (navIndex) {
      case 1:
        setPath("/book/pre");
        break;
      case 2:
        setPath("/book/peri");
        break;
      case 3:
        setPath("/book/post");
        break;
      default:
        setPath("/book");
    }
  }, [navIndex]);

  const { bookcaseInfo, isLoading, isError } = useGetBookInfo(path);

  if (isLoading) {
    return <Loading />;
  } else if (!bookcaseInfo || isError) {
    return <Error404 />;
  } else if (bookcaseInfo.length === 0) {
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
          <BookCard key={idx} bookcaseInfo={bookcaseInfo} isLogin={isLogin} />
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
