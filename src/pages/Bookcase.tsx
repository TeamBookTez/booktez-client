import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { Navigation } from "../components/bookcase";
import { MainHeader } from "../components/common";
import { isLoginSelector, isLoginState } from "../utils/atoms";
import { getData } from "../utils/lib/api";

export interface BookcaseInfo {
  author: string[];
  reviewId: number;
  reviewSt?: number;
  thumbnail: string;
  title: string;
}

const tempToken = localStorage.getItem("booktez-token");
const TOKEN = tempToken ? tempToken : "";

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
      } = await getData(key, TOKEN);

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
  const isLogin = useRecoilValue(isLoginSelector); //isLoginFromSelector
  const setIsLogin = useSetRecoilState(isLoginState);

  useEffect(() => {
    if (isLogin) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  return (
    <>
      <MainHeader>서재</MainHeader>
      <Navigation />
      <Outlet context={isLogin} />
    </>
  );
}
