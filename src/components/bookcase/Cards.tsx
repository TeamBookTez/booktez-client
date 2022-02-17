import { useEffect, useState } from "react";
import styled from "styled-components";

import { BookcaseInfo } from "../../pages/Bookcase";
import { getData } from "../../utils/lib/api";
import { Loading } from "../common";
import { AddBookCard, BookCard } from ".";
import Empty from "./cardSection/Empty";

interface CardsProps {
  isLogin: boolean;
  navIndex: number;
}

const TOKEN = localStorage.getItem("booktez-token");
const localToken = TOKEN ? TOKEN : "";

const useGetBookcase = (key: string, navIndex: number) => {
  const [bookcaseInfo, setBookcaseInfo] = useState<BookcaseInfo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getBookcase = async () => {
    try {
      const {
        data: {
          data: { books },
        },
      } = await getData(key, localToken);

      console.log("books", books);
      setBookcaseInfo(books);
    } catch (err) {
      console.log("err", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBookcase();
  }, [navIndex]);

  return { bookcaseInfo, isLoading };
};

export default function Cards(props: CardsProps) {
  const { isLogin, navIndex } = props;
  let path: string;

  switch (navIndex) {
    case 1:
      path = "/pre";
      break;
    case 2:
      path = "/peri";
      break;
    case 3:
      path = "/post";
      break;
    default:
      path = "";
  }
  const { bookcaseInfo, isLoading } = useGetBookcase(`/book${path}`, navIndex);

  if (isLoading) {
    return <Loading />;
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
