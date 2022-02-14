import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { Navigation } from "../components/bookcase";
import { MainHeader } from "../components/common";
import { isLoginSelector } from "../utils/atoms";
import { getData } from "../utils/lib/api";

export interface BookcaseInfo {
  author: string[];
  reviewId: number;
  reviewSt?: number;
  thumbnail: string;
  title: string;
}

export const useGetBookcase = (key: string) => {
  const [bookcaseInfo, setBookcaseInfo] = useState<BookcaseInfo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const isLoginFromSelector = useRecoilValue(isLoginSelector);

  const tempToken = localStorage.getItem("booktez-token");
  const TOKEN = tempToken ? tempToken : "";

  useEffect(() => {
    getBookcase();
  }, []);

  const getBookcase = async () => {
    if (!isLoginFromSelector) {
      setIsLoading(false);

      return { bookcaseInfo, isLoading, getBookcase };
    }

    try {
      const {
        data: {
          data: { books },
        },
      } = await getData(key, TOKEN);

      books.forEach((book: BookcaseInfo) => {
        setBookcaseInfo((currentBook) => [...currentBook, book]);
      });

      return setIsLoading(false);
    } catch (err) {
      return setIsLoading(false);
    }
  };

  return { bookcaseInfo, isLoading, getBookcase };
};

export default function Bookcase() {
  return (
    <>
      <MainHeader>서재</MainHeader>
      <Navigation />
      <Outlet />
    </>
  );
}
