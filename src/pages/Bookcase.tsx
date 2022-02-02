import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { Navigation } from "../components/bookcase";
import { MainHeader } from "../components/common";
import { getData } from "../utils/lib/api";

export interface BookcaseInfo {
  author: string[];
  reviewId: number;
  state?: number;
  thumbnail: string;
  title: string;
}

export default function Bookcase() {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const TOKEN = localStorage.getItem("booktez-token");
  const localToken = TOKEN ? TOKEN : "";

  // const handleBookDelete = () => {
  //   getBookcase("/book", localToken);
  // };
  // 코드 리뷰 후 해당 주석 삭제 예정

  const handleIsLoading = () => {
    setIsLoading((e) => !e);
  };

  useEffect(() => {
    getLogin("/auth/check", localToken);
  }, []);

  const getLogin = async (key: string, token: string) => {
    try {
      const { data } = await getData(key, token);
      const status = data.status;

      if (!localToken) {
        setIsLogin(false);
      }
      if (!(status === 200)) {
        setIsLogin(false);
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <>
      <MainHeader>서재</MainHeader>
      <Navigation />
      <Outlet context={[isLoading, handleIsLoading, isLogin]} />
    </>
  );
}
