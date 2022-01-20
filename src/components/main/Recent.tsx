import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { BookcaseInfo } from "../../pages/Bookcase";
import { getData } from "../../utils/lib/api";
import { BookCard } from "../bookcase";
import Empty from "../bookcase/cardSection/Empty";
import { Button } from "../common/styled/Button";

export default function Recent() {
  const [booksRecent, setBooksRecent] = useState<BookcaseInfo[]>([]);

  const [bookDelete, setBookDelete] = useState<boolean>(false);
  const handleBookDelete = () => {
    setBookDelete(!bookDelete);
  };

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
      console.log(booksRecent);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log("err", err.response?.data);
      }
    }
  };

  const isDefault = false;

  useEffect(() => {
    getBookRecent("/book", userToken);
  }, [bookDelete]);

  return (
    <section>
      <StHeader>
        <StHeading3>최근 작성한 북노트</StHeading3>
        {!isDefault ? (
          <StButton type="button">
            <Link to="/main/bookcase">전체보기</Link>
          </StButton>
        ) : null}
      </StHeader>
      <StBookWrapper isdefault={isDefault}>
        {isDefault ? (
          <Empty />
        ) : (
          booksRecent.map((tempInfo, idx) => (
            <BookCard key={idx} bookcaseInfo={tempInfo} handleBookDelete={handleBookDelete} />
          ))
        )}
      </StBookWrapper>
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

const StButton = styled(Button)`
  border: 0.2rem solid ${({ theme }) => theme.colors.gray300};
  border-radius: 2.4rem;
  padding: 0.9rem 2.1rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray300};
`;

const StBookWrapper = styled.section<{ isdefault: boolean }>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ isdefault }) => (isdefault ? "column" : "row")};
  align-items: center;
  justify-content: center;
`;
