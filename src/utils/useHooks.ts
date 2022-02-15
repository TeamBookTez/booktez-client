import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { BookcaseInfo } from "../pages/Bookcase";
import { isLoginState } from "./atoms";
import { getData } from "./lib/api";

export const useGetBookcase = (key: string) => {
  const [bookcaseInfo, setBookcaseInfo] = useState<BookcaseInfo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);

  const tempToken = localStorage.getItem("booktez-token");
  const TOKEN = tempToken ? tempToken : "";

  useEffect(() => {
    if (isLogin) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
    getBookcase();
  }, []);

  const getBookcase = async () => {
    if (!isLogin) {
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
      setIsLoading(false);
    }
  };

  return { bookcaseInfo, isLoading, getBookcase };
};

export function useCheckLoginState() {
  const [isLoginLoading, setIsLoginLoading] = useState<boolean>(true);
  const [isLogin, setIsLogin] = useRecoilState<boolean>(isLoginState);

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

          return setIsLoginLoading(false);
        }
      }

      setIsLogin(false);
      setIsLoginLoading(false);
    } catch (err) {
      setIsLogin(false);
      setIsLoginLoading(false);
      throw err;
    }
  };

  return { isLogin, isLoginLoading };
}
