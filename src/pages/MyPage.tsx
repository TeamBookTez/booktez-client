import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";

import { Loading, MainHeader } from "../components/common";
import { BottomContent, TopContent } from "../components/myPage";
import { isLoginState } from "../utils/atom";
import { getData, patchData } from "../utils/lib/api";
import { useCheckLoginState } from "../utils/useHooks";

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
  const setIsLogin = useSetRecoilState(isLoginState);
  const { isLogin, isLoginLoading } = useCheckLoginState();

  const _token = localStorage.getItem("booktez-token");
  const userToken = _token ? _token : "";

  useEffect(() => {
    if (isLogin) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [isLogin]);

  useEffect(() => {
    getInfo("/user/myInfo", userToken);
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
      const { data } = await patchData(userToken, "/user/img", formData);

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
      {isLoading && isLoginLoading ? (
        <Loading />
      ) : (
        <>
          <MainHeader>마이페이지</MainHeader>
          <TopContent userInfo={userInfo} onImageChange={handleImageChange} onLogout={handleLogout} />
          <BottomContent userInfo={userInfo} />
        </>
      )}
    </>
  );
}
