import axios, { AxiosRequestHeaders } from "axios";
import { emitWarning } from "process";
import { useEffect } from "react";

import { MainHeader } from "../components/common";
import BottomContent from "../components/mypage/BottomContent";
import TopContent from "../components/mypage/TopContent";
import { getData } from "../utils/lib/api";

export default function MyPage() {
  const infoHeaders: AxiosRequestHeaders = {
    "Content-Type": "application/json",
    Authorization: `${process.env.REACT_APP_TEST_TOKEN}`,
  };

  const infoKey = "/user/myInfo";

  const getInfo = async (headers: AxiosRequestHeaders, key: string) => {
    try {
      const { data } = await getData(headers, key);

      const { email, img, nickname, reviewCount } = data.data;

      console.log(email, img, nickname, reviewCount);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log("err", err.response?.data);
      }
    }
  };

  useEffect(() => {
    getInfo(infoHeaders, infoKey);
  }, []);

  return (
    <>
      <MainHeader>마이페이지</MainHeader>
      <TopContent />
      <BottomContent />
    </>
  );
}
