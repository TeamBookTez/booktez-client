import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { Navigation } from "../components/bookcase";
import { MainHeader } from "../components/common";
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

export const useGetBookcase = (key: string) => {
  const [bookcaseInfo, setBookcaseInfo] = useState<BookcaseInfo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getBookcase();
  }, []);

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

  useEffect(() => {
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
      return;
    }
  };

  return (
    <>
      <MainHeader>서재</MainHeader>
      <Navigation />
      <Outlet context={isLogin} />
    </>
  );
}
