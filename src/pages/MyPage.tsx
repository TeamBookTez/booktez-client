import axios from "axios";
import { useEffect, useState } from "react";

import { MainHeader } from "../components/common";
import { BottomContent, TopContent } from "../components/mypage";
import { getData, patchData } from "../utils/lib/api";

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

  const token = `${process.env.REACT_APP_TEST_TOKEN}`;
  const infoKey = "/user/myInfo";
  const patchImgKey = "/user/img";

  const getInfo = async (token: string, key: string) => {
    try {
      const { data } = await getData(key, token);

      console.log("data", data);
      setUserInfo(data.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log("err", err.response?.data);
      }
    }
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();

    if (e.target.files !== null) {
      const imgFile = e.target.files[0];

      formData.append("img", imgFile);

      try {
        const { data } = await patchData(token, patchImgKey, formData);

        if (data.success) {
          setUserInfo((current) => ({ ...current, img: data.img }));
        }
      } catch (err) {
        if (axios.isAxiosError(err)) {
          console.log("err", err.response?.data);
        }
      }
    }
  };

  useEffect(() => {
    getInfo(token, infoKey);
  }, []);

  return (
    <>
      <MainHeader>마이페이지</MainHeader>
      <TopContent userInfo={userInfo} onImageChange={handleImageChange} />
      <BottomContent userInfo={userInfo} />
    </>
  );
}
