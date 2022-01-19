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
  const [dataa, setDataa] = useState<string>("");

  const token = `${process.env.REACT_APP_TEST_TOKEN}`;
  const infoKey = "/user/myInfo";
  const patchImgKey = "/user/img";

  const getInfo = async (token: string, key: string) => {
    try {
      const { data } = await getData(key, token);

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
          setDataa(data.img);
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
  }, [dataa]);

  return (
    <>
      <MainHeader>마이페이지</MainHeader>
      <TopContent userInfo={userInfo} onImageChange={handleImageChange} />
      <BottomContent userInfo={userInfo} />
    </>
  );
}
