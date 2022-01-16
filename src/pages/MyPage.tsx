import axios, { AxiosRequestHeaders } from "axios";
import { useEffect, useState } from "react";

import { MainHeader } from "../components/common";
import BottomContent from "../components/mypage/BottomContent";
import TopContent from "../components/mypage/TopContent";
import { getData } from "../utils/lib/api";

export interface UserInfo {
  email: string;
  img: string;
  nickname: string;
  reviewCount: number;
}
export default function MyPage() {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: "",
    img: "",
    nickname: "",
    reviewCount: 0,
  });

  const infoHeaders: AxiosRequestHeaders = {
    "Content-Type": "application/json",
    Authorization: `${process.env.REACT_APP_TEST_TOKEN}`,
  };

  const infoKey = "/user/myInfo";

  const getInfo = async (headers: AxiosRequestHeaders, key: string) => {
    try {
      const { data } = await getData(headers, key);

      setUserInfo(data.data);
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
      <TopContent userInfo={userInfo} />
      <BottomContent userInfo={userInfo} />
    </>
  );
}
