import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { BookcaseInfo } from "../../pages/Bookcase";
import { getData } from "../../utils/lib/api";
import { BookCard } from "../bookcase";
import Empty from "../bookcase/cardSection/Empty";
import Loading from "../common/Loading";

interface RecentProps {
  isLogin: boolean;
}

export default function RecentBooks(props: RecentProps) {
  const { isLogin } = props;
  const [booksRecent, setBooksRecent] = useState<BookcaseInfo[]>([]);
  // const [bookDelete, setBookDelete] = useState<boolean>(false);
  const [isDefault, setIsDefault] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const TOKEN = localStorage.getItem("booktez-token");
  const userToken = TOKEN ? TOKEN : "";

  const getBookRecent = async (key: string, token: string) => {
    try {
      const {
        data: {
          data: { books },
        },
      } = await getData(key, token);

      setBooksRecent(books);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log("err", err.response?.data);
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    getBookRecent("/book", userToken);
  }, []);

  const handleBookDelete = () => {
    getBookRecent("/book", userToken);
  };

  useEffect(() => {
    setIsDefault(!(booksRecent.length > 0));
  }, [booksRecent]);

  return (
    <section>
      {isLogin && isLoading ? (
        <Loading />
      ) : (
        <>
          <StHeader>
            <StHeading3>최근 작성한 북노트</StHeading3>
            {!isDefault && <StLink to="/main/bookcase">전체보기</StLink>}
          </StHeader>
          <StBookWrapper isdefault={isDefault}>
            {!isDefault ? (
              booksRecent
                .slice(0, 5)
                .map((tempInfo, idx) => (
                  <BookCard key={idx} bookcaseInfo={tempInfo} handleBookDelete={handleBookDelete} isLogin={isLogin} />
                ))
            ) : (
              <Empty />
            )}
          </StBookWrapper>
        </>
      )}
    </section>
  );
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
