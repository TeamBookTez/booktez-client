import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { Navigation } from "../components/bookcase";
import { MainHeader } from "../components/common";
import { getData } from "../utils/lib/api";

export interface BookcaseInfo {
  author: string[];
  reviewId: number;
  state?: number;
  thumbnail: string;
  title: string;
}

export default function Bookcase() {
  const [bookcaseTotal, setBookcaseTotal] = useState<BookcaseInfo[]>([]);
  const [bookcasePre, setBookcasePre] = useState<BookcaseInfo[]>([]);
  const [bookcasePeri, setBookcasePeri] = useState<BookcaseInfo[]>([]);
  const [bookcasePost, setBookcasePost] = useState<BookcaseInfo[]>([]);

  const [bookDelete, setBookDelete] = useState<boolean>(false);

  // 로그인 정보를 이용할때 아래 두 줄의 코드
  // const userToken = localStorage.getItem("booktez-token");
  // const token = `${userToken}`;
  const token = `${process.env.REACT_APP_TEST_TOKEN}`;

  const getBookcase = async (key: string, token: string) => {
    try {
      const {
        data: {
          data: { books },
        },
      } = await getData(key, token);

      setBookcaseTotal(books);

      books.forEach((book: BookcaseInfo) => {
        if (book.state === 2) setBookcasePre((currentBook) => [...currentBook, book]);
        if (book.state === 3) setBookcasePeri((currentBook) => [...currentBook, book]);
        if (book.state === 4) setBookcasePost((currentBook) => [...currentBook, book]);
      });
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log("err", err.response?.data);
      }
    }
  };

  useEffect(() => {
    getBookcase("/book", token);
  }, []);

  return (
    <>
      <MainHeader>서재</MainHeader>
      <Navigation />
      <Outlet context={[bookcaseTotal, bookcasePre, bookcasePeri, bookcasePost, setBookDelete]} />
    </>
  );
}
