import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useGetBookInfo } from "../../utils/lib/api";
import { BookCard } from "../bookcase";
import Empty from "../bookcase/cardSection/Empty";
import { Loading } from "../common";

interface RecentProps {
  isLogin: boolean;
}

export default function RecentBooks(props: RecentProps) {
  const { isLogin } = props;
  const [isFulFilled, setIsFulFilled] = useState<boolean>(false);

  const { bookcaseInfo, isLoading, isError } = useGetBookInfo("/book");

  useEffect(() => {
    if (bookcaseInfo && bookcaseInfo.length && !isError) {
      setIsFulFilled(true);
    } else {
      setIsFulFilled(false);
    }
  }, [bookcaseInfo]);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <section>
        <>
          <StHeader>
            <StHeading3>최근 작성한 북노트</StHeading3>
            {isFulFilled && <StLink to="/main/bookcase">전체보기</StLink>}
          </StHeader>
          <StBookWrapper isdefault={!isFulFilled}>
            {isFulFilled ? (
              bookcaseInfo &&
              bookcaseInfo
                .slice(0, 5)
                .map((tempInfo, idx) => (
                  <BookCard key={idx} bookcaseInfo={tempInfo} isLogin={isLogin} pathKey="/book" />
                ))
            ) : (
              <Empty />
            )}
          </StBookWrapper>
        </>
      </section>
    );
  }
}

const StHeader = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin: 0 4rem;
  padding-top: 6rem;
  padding-bottom: 1.4rem;
`;

const StHeading3 = styled.h3`
  ${({ theme }) => theme.fonts.header3}
  color: ${({ theme }) => theme.colors.gray100};
`;

const StLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 8.8rem;
  height: 3.6rem;

  border: 0.2rem solid ${({ theme }) => theme.colors.gray300};
  border-radius: 2.4rem;

  background-color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.button2};
  color: ${({ theme }) => theme.colors.gray300};
`;

const StBookWrapper = styled.section<{ isdefault: boolean }>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ isdefault }) => (isdefault ? "column" : "row")};
  align-items: center;
  justify-content: ${({ isdefault }) => (isdefault ? "center" : "normal")};

  margin-left: 2rem;
`;
