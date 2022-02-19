import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { isLoginState } from "./atom";
import { PeriNoteData, PreNoteData } from "./dataType";
import { client } from "./lib";
import { getData } from "./lib/api";

export function useCheckLoginState() {
  const [isLoginLoading, setIsLoginLoading] = useState<boolean>(true);
  const [isLogin, setIsLogin] = useRecoilState<boolean>(isLoginState);

  const _token = localStorage.getItem("booktez-token");
  const userToken = _token ? _token : "";
  const API_PATH = "/auth/check";

  useEffect(() => {
    checkLoginState();
  }, []);

  const checkLoginState = async () => {
    try {
      const { data } = await getData(API_PATH, userToken);
      const status = data.status;

      if (status === 200) {
        data.data.isLogin === true ? setIsLogin(true) : setIsLogin(false);
      }
    } catch (err) {
      setIsLogin(false);
    } finally {
      setIsLoginLoading(false);
    }
  };

  return { isLogin, isLoginLoading };
}

export function useFetchNote<T>(token: string, key: string, initialState: T) {
  const [data, setData] = useState<T>(initialState);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return { data, setData, isLoading };
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
