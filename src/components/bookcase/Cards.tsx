import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";

import { BookcaseInfo } from "../../pages/Bookcase";
import { bookcaseFetcher } from "../../utils/lib/api";
import { AddBookCard, BookCard } from ".";
import Empty from "./cardSection/Empty";

interface CardsProps {
  isLogin: boolean;
  navIndex: number;
}

export default function Cards(props: CardsProps) {
  const { isLogin, navIndex } = props;
  const [pathKey, setPathKey] = useState<string>("/book");

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

  // react-query로 데이터 받아오기
  // 기존과의 차이: 받아온 데이터를 클라이언트가 아닌 서버 상태로 관리
  // SWR과의 차이: SWR은 전달된 key를 자동으로 뒤 fetch에 넘겨줌.
  // react-query에서의 key는 queryClient에서 저장할 때 구분하는 key값
  const { data } = useQuery("bookcase", () => bookcaseFetcher(pathKey));

  if (!data || (data && data.length === 0)) {
    return (
      <StDefaultSection>
        <Empty />
      </StDefaultSection>
    );
  } else {
    return (
      <StSection>
        <AddBookCard />
        {data.map((bookcaseInfo: BookcaseInfo, idx: number) => (
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
