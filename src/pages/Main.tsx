import axios from "axios";
import { useEffect, useState } from "react";

import { MainHeader } from "../components/common";
import { Banner, Recent } from "../components/main";
import { getData } from "../utils/lib/api";

export default function Main() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
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
      if (axios.isAxiosError(err)) {
        console.log("err", err.response?.data);
      }
    }
  };

  useEffect(() => {
    getLogin(authCheckKey, localToken);
  }, []);

  return (
    <>
      <MainHeader>메인</MainHeader>
      <Banner />
      <Recent isLogin={isLogin} />
    </>
  );
}
