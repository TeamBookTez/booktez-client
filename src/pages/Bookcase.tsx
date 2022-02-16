import { useEffect, useState } from "react";

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

export const useGetBookcase = (key: string) => {
  const [bookcaseInfo, setBookcaseInfo] = useState<BookcaseInfo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getBookcase = async () => {
    try {
      const {
        data: {
          data: { books },
        },
      } = await getData(key, localToken);

      console.log("books", books);
      books.forEach((book: BookcaseInfo) => {
        setBookcaseInfo((currentBook) => [...currentBook, book]);
      });
    } catch (err) {
      console.log("err", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBookcase();
  }, []);

  return { bookcaseInfo, isLoading, getBookcase };
};

export default function Bookcase() {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [navIndex, setNavIndex] = useState<number>(0);

  let path: string;

  switch (navIndex) {
    case 1:
      path = "/pre";
      break;
    case 2:
      path = "/peri";
      break;
    case 3:
      path = "/post";
      break;
    default:
      path = "";
  }

  const [bookcaseInfo, setBookcaseInfo] = useState<BookcaseInfo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getBookcase = async (key: string) => {
    try {
      const {
        data: {
          data: { books },
        },
      } = await getData(key, localToken);

      setBookcaseInfo(books);
    } catch (err) {
      console.log("err", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBookcase(`/book${path}`);
  }, [navIndex]);

  const handleChangeNavIndex = (idx: number) => {
    setNavIndex(idx);
  };

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
      <Navigation navIndex={navIndex} onChangeNavIndex={handleChangeNavIndex} />
      {isLoading ? <Loading /> : <Cards bookcaseInfo={bookcaseInfo} reloadBookcase={getBookcase} isLogin={isLogin} />}
    </>
  );
}
