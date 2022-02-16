import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Cards, Navigation } from "../components/bookcase";
import { Loading, MainHeader } from "../components/common";
import { getData } from "../utils/lib/api";

export interface BookcaseInfo {
  author: string[];
  reviewId: number;
  reviewSt?: number;
  thumbnail: string;
  title: string;
}

const TOKEN = localStorage.getItem("booktez-token");
const localToken = TOKEN ? TOKEN : "";

export const useGetBookcase = (key: string, navIndex: number) => {
  const [bookcaseInfo, setBookcaseInfo] = useState<BookcaseInfo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getBookcase();
  }, [navIndex]);

  const getBookcase = async () => {
    try {
      const {
        data: {
          data: { books },
        },
      } = await getData(key, localToken);

      books.forEach((book: BookcaseInfo) => {
        setBookcaseInfo((currentBook) => [...currentBook, book]);
      });
      setIsLoading(false);
    } catch (err) {
      console.log("err", err);
    }
  };

  return { bookcaseInfo, isLoading, getBookcase };
};

export default function Bookcase() {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [navIndex, setNavIndex] = useState<number>(0);
  const [path, setPath] = useState<string>("");
  const location = useLocation();
  const { bookcaseInfo, isLoading, getBookcase } = useGetBookcase(`/book${path}`, navIndex);

  useEffect(() => {
    getLogin("/auth/check", localToken);
  }, []);

  useEffect(() => {
    switch (location.pathname) {
      case "/main/bookcase":
        setNavIndex(0);
        setPath("");
        break;
      case "/main/bookcase/pre":
        setNavIndex(1);
        setPath("/pre");
        break;
      case "/main/bookcase/peri":
        setNavIndex(2);
        setPath("/peri");
        break;
      case "/main/bookcase/post":
        setNavIndex(3);
        setPath("/post");
        break;
    }
  }, [location.pathname]);

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
      return;
    }
  };

  return (
    <>
      <MainHeader>서재</MainHeader>
      <Navigation navIndex={navIndex} />
      {isLoading ? <Loading /> : <Cards bookcaseInfo={bookcaseInfo} handleBookDelete={getBookcase} isLogin={isLogin} />}
    </>
  );
}
