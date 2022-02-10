import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { Navigation } from "../components/bookcase";
import { MainHeader } from "../components/common";
import { getData, getMockData } from "../utils/lib/api";

export interface BookcaseInfo {
  author: string[];
  reviewId: number;
  reviewSt?: number;
  thumbnail: string;
  title: string;
}

export const useGetBookcase = (key: string, token: string) => {
  const [bookcase, setBookcase] = useState<BookcaseInfo[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(true);

  // const handleIsLoading = () => {
  //   setIsLoading((isLoading) => !isLoading);
  // };

  useEffect(() => {
    (async function () {
      try {
        const {
          data: {
            data: { books },
          },
        } = await getMockData(key, token);

        books.forEach((book: BookcaseInfo) => {
          setBookcase((currentBook) => [...currentBook, book]);
        });
      } catch (err) {
        console.log("err", err);
      }
      // handleIsLoading();
    })();

    // return () => {
    //   handleIsLoading();
    // };
  }, []);

  return [bookcase];
};

export default function Bookcase() {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const TOKEN = localStorage.getItem("booktez-token");
  const localToken = TOKEN ? TOKEN : "";

  // const handleBookDelete = () => {
  //   getBookcase("/book", localToken);
  // };
  // 코드 리뷰 후 해당 주석 삭제 예정

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
      <Outlet context={[isLogin]} />
    </>
  );
}
