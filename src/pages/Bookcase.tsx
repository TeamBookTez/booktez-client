import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { Navigation } from "../components/bookcase";
import { MainHeader } from "../components/common";
import Loading from "../components/common/Loading";
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
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const TOKEN = localStorage.getItem("booktez-token");
  const localToken = TOKEN ? TOKEN : "";

  const handleBookDelete = () => {
    getBookcase("/book", localToken);
  };

  useEffect(() => {
    getBookcase("/book", localToken);
    getLogin("/auth/check", localToken);
  }, []);

  const getLogin = async (key: string, token: string) => {
    try {
      const { data } = await getData(key, token);
      const status = data.status;

      if (!localToken) {
        setIsLogin(false);
      }
      if (!(status === 200)) {
        setIsLogin(false);
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log("err", err.response?.data);
      }
    }
  };

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
    console.log("123s");
    setIsLoading(false);
  };

  return (
    <>
      {isLogin && isLoading ? (
        <Loading />
      ) : (
        <>
          <MainHeader>서재</MainHeader>
          <Navigation />
          <Outlet context={[bookcaseTotal, bookcasePre, bookcasePeri, bookcasePost, handleBookDelete, isLogin]} />
        </>
      )}
    </>
  );
}
