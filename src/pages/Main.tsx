import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { MainHeader } from "../components/common";
import { Banner, RecentBooks } from "../components/main";
import { isLoginSelector, isLoginState } from "../utils/atoms";

export default function Main() {
  const isLoginFromSelector = useRecoilValue(isLoginSelector);
  const setIsLogin = useSetRecoilState(isLoginState);
  const tempToken = localStorage.getItem("booktez-token");
  const localToken = tempToken ? tempToken : "";

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
      <RecentBooks isLogin={isLoginFromSelector} />
    </>
  );
}
