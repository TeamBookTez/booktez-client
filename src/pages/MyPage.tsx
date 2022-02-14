import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { Loading, MainHeader } from "../components/common";
import { BottomContent, TopContent } from "../components/myPage";
import { isLoginSelector, isLoginState } from "../utils/atoms";
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
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [tempImg, setTempImg] = useState<string>(""); //patch 렌더링 문제 해결 state
  const [isLogin, setIsLogin] = useRecoilState<boolean>(isLoginState);
  const isLoginFromSelector = useRecoilValue(isLoginSelector);

  const tempToken = localStorage.getItem("booktez-token");
  const TOKEN = tempToken ? tempToken : "";

  useEffect(() => {
    if (isLoginFromSelector) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  useEffect(() => {
    getInfo("/user/myInfo", TOKEN);
  }, [tempImg]);

  const handleLogout = () => {
    setIsLogin(false);
  };

  const getInfo = async (key: string, token: string) => {
    try {
      const { data } = await getData(key, token);

      if (data.success) {
        setUserInfo(data.data);
      }
    } catch (err) {
      setIsLogin(false);

      return setIsLoading(false);
    }
    setIsLoading(false);
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isLogin === false) return;
    if (e.target.files === null) return;

    const imgFile = e.target.files[0];
    const formData = new FormData();

    formData.append("img", imgFile);

    try {
      const { data } = await patchData(TOKEN, "/user/img", formData);

      if (data.success) {
        setTempImg(data.img);
        setUserInfo((current) => ({ ...current, img: data.img }));
      }
    } catch (err) {
      return;
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <MainHeader>마이페이지</MainHeader>
          <TopContent userInfo={userInfo} onImageChange={handleImageChange} isLogin={isLogin} onLogout={handleLogout} />
          <BottomContent userInfo={userInfo} isLogin={isLogin} />
        </>
      )}
    </>
  );
}
