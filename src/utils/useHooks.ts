import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { BookcaseInfo } from "../pages/Bookcase";
import { isLoginSelector, isLoginState } from "./atoms";
import { getData } from "./lib/api";

export const useGetBookcase = (key: string) => {
  const [bookcaseInfo, setBookcaseInfo] = useState<BookcaseInfo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const isLoginFromSelector = useRecoilValue(isLoginSelector);
  const setIsLogin = useSetRecoilState(isLoginState);

  const tempToken = localStorage.getItem("booktez-token");
  const TOKEN = tempToken ? tempToken : "";

  useEffect(() => {
    if (isLoginFromSelector) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
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

      setIsLoading(false);
    } catch (err) {
      return setIsLoading(false);
    }
  };

  return { bookcaseInfo, isLoading, getBookcase };
};

export function useCheckLoginState() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const tempToken = localStorage.getItem("booktez-token");
  const TOKEN = tempToken ? tempToken : "";
  const API_PATH = "/auth/check";

  useEffect(() => {
    checkLoginState();
  }, []);

  const checkLoginState = async () => {
    try {
      const { data } = await getData(API_PATH, TOKEN);
      const status = data.status;

      if (status === 200) {
        if (data.data.isLogin === true) {
          setIsLogin(true);

          return setIsLoading(false);
        }
      }

      setIsLogin(false);
      setIsLoading(false);
    } catch (err) {
      setIsLogin(false);
      setIsLoading(false);
      throw err;
    }
  };

  return { isLogin, isLoading };
}
