import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { Navigation } from "../components/bookcase";
import { MainHeader } from "../components/common";
import { deleteData, getData } from "../utils/lib/api";

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

  const TOKEN = localStorage.getItem("booktez-token");
  const userToken = TOKEN ? TOKEN : "";

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

      // const wow = localStorage.getItem("booktez-data");
      // const woww = wow ? wow : "";

      // const wowww = JSON.parse(woww);

      // setBookcaseTotal([wowww]);

      // wowww.forEach((book: BookcaseInfo) => {
      //   if (book.state === 2) setBookcasePre((currentBook) => [...currentBook, book]);
      //   if (book.state === 3) setBookcasePeri((currentBook) => [...currentBook, book]);
      //   if (book.state === 4) setBookcasePost((currentBook) => [...currentBook, book]);
      // LocalStorage에서 저장한 객체를 불러올 때는 JSON.parse를 쓴다.
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log("err", err.response?.data);
      }
    }
  };

  useEffect(() => {
    getBookcase("/book", userToken);
  }, []);

  const handleBookDelete = () => {
    getBookcase("/book", userToken);
  };

  return (
    <>
      <MainHeader>서재</MainHeader>
      <Navigation />
      <Outlet context={[bookcaseTotal, bookcasePre, bookcasePeri, bookcasePost, handleBookDelete]} />
    </>
  );
}
