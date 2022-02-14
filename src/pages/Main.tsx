import { useEffect } from "react";
import { useRecoilState } from "recoil";

import { MainHeader } from "../components/common";
import { Banner, RecentBooks } from "../components/main";
import { isLoginState } from "../utils/atoms";
import { getData } from "../utils/lib/api";

export default function Main() {
  const [isLogin, setIsLogin] = useRecoilState<boolean>(isLoginState);
  const TOKEN = localStorage.getItem("booktez-token");
  const localToken = TOKEN ? TOKEN : "";
  const authCheckKey = "/auth/check";

  const getLogin = async (key: string, token: string) => {
    try {
      const { data } = await getData(key, token);
      const status = data.status;

      if (!localToken) {
        return setIsLogin(false);
      }
      if (!(status === 200)) {
        return setIsLogin(false);
      }
      setIsLogin(true);
    } catch (err) {
      return;
    }
  };

  useEffect(() => {
    getLogin(authCheckKey, localToken);
  }, []);

  return (
    <>
      <MainHeader>메인</MainHeader>
      <Banner />
      <RecentBooks isLogin={isLogin} />
    </>
  );
}
