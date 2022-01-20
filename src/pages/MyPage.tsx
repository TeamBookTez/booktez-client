import axios from "axios";
import { useEffect, useState } from "react";

import { MainHeader } from "../components/common";
import { BottomContent, TopContent } from "../components/myPage";
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

  // 이미지 patch 시에 렌더링이 잘 되지 않는 문제를 이미지를 위한 state를 만들고
  // useEffect로 getInfo를 호출해주었다.
  const [tempImg, setTempImg] = useState<string>("");
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const tempToken = localStorage.getItem("booktez-token");
  const localToken = tempToken ? tempToken : "";

  useEffect(() => {
    getLogin("/auth/check", localToken);
    console.log("asdf");
  }, []);

  useEffect(() => {
    getInfo("/user/myInfo", localToken);
  }, [tempImg]);

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
      if (axios.isAxiosError(err)) {
        console.log("err", err.response?.data);
      }
    }
  };

  const getInfo = async (key: string, token: string) => {
    try {
      const { data } = await getData(key, token);

      if (data.success) {
        setUserInfo(data.data);
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log("err", err.response?.data);
      }
    }
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isLogin === false) return;

    const formData = new FormData();

    if (e.target.files !== null) {
      const imgFile = e.target.files[0];

      formData.append("img", imgFile);

      try {
        const { data } = await patchData(localToken, "/user/img", formData);

        if (data.success) {
          setTempImg(data.img);
          setUserInfo((current) => ({ ...current, img: data.img }));
        }
      } catch (err) {
        if (axios.isAxiosError(err)) {
          console.log("err", err.response?.data);
        }
      }
    }
  };

  return (
    <>
      <MainHeader>마이페이지</MainHeader>
      <TopContent userInfo={userInfo} onImageChange={handleImageChange} isLogin={isLogin} />
      <BottomContent userInfo={userInfo} isLogin={isLogin} />
    </>
  );
}
