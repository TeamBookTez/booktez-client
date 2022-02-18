import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { BookcaseInfo } from "../pages/Bookcase";
import { isLoginState } from "./atoms";
import { PeriNoteData, PreNoteData } from "./dataType";
import { client } from "./lib";
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
  }, [isLogin]);

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

export function useFetchNote<T>(token: string, key: string, initialState: T) {
  const [data, setData] = useState<T>(initialState);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    (async function () {
      try {
        const {
          data: { data },
        } = await client(token).get(key);

        if (data.questionList && !data.questionList.length) {
          // 버그? 사용자가 질문 리스트를 모두 지우고 저장해도 다시 빈 input이 생성됨
          // 처음 추가된 책의 review에 대해서 서버에서 questionList를 []가 아닌 [""]로 주면 해결될 듯
          setData({ ...data, questionList: [""] });
        } else if (data.answerThree && !data.answerThree.children.length) {
          setData({
            ...data,
            answerThree: { type: "", content: "", children: [{ type: "", content: "", children: [] }] },
          });
        } else {
          setData(data);
        }
      } catch (err) {
        if (axios.isAxiosError(err)) {
          // isError 처리에 대하여 고민해보기
          setIsError(true);
        }
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return { data, setData, isLoading, isError };
}

export const patchBookNote = async (token: string, key: string, body: PreNoteData | PeriNoteData) => {
  try {
    const { data } = await client(token).patch(key, body);

    return data.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return err.response;
    }
  }
};
