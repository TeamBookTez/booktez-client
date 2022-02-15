import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { MainHeader } from "../components/common";
import { Banner, RecentBooks } from "../components/main";
import { isLoginSelector, isLoginState } from "../utils/atoms";
import { getData } from "../utils/lib/api";

function useCheckLoginState() {
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
          return setIsLogin(true);
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

export default function Main() {
  const isLoginFromSelector = useCheckLoginState();
  const setIsLogin = useSetRecoilState(isLoginState);

  useEffect(() => {
    if (isLoginFromSelector) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  return (
    <>
      <MainHeader>메인</MainHeader>
      <Banner />
      <RecentBooks />
    </>
  );
}
