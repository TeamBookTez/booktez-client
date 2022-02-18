import { useEffect, useState } from "react";

import { Cards, Navigation } from "../components/bookcase";
import { MainHeader } from "../components/common";
import { getData } from "../utils/lib/api";

export interface BookcaseInfo {
  author: string[];
  reviewId: number;
  reviewSt?: number;
  thumbnail: string;
  title: string;
}

export default function Bookcase() {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [navIndex, setNavIndex] = useState<number>(0);

  const _token = localStorage.getItem("booktez-token");
  const userToken = _token ? _token : "";

  const handleChangeNavIndex = (idx: number) => {
    setNavIndex(idx);
  };

  useEffect(() => {
    getLogin("/auth/check", userToken);
  }, []);

  const getLogin = async (key: string, token: string) => {
    try {
      const { data } = await getData(key, token);
      const status = data.status;

      if (!userToken) {
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
      <Cards navIndex={navIndex} isLogin={isLogin} />
    </>
  );
}
