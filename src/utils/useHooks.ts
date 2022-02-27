import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { isLoginState } from "./atom";
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

        setData(data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          console.log(err.response);
        }
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return { data, setData, isLoading };
}