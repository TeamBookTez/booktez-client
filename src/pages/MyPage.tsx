import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";

import { Loading, MainHeader } from "../components/common";
import { ServiceContent, UserContent, WithdrawContent } from "../components/myPage";
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
  const setIsLogin = useSetRecoilState(isLoginState);
  const { isLogin, isLoginLoading } = useCheckLoginState();

  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: "",
    img: "",
    nickname: "",
    reviewCount: 0,
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [tempImg, setTempImg] = useState<string>(""); //patch 렌더링 문제 해결 state

  const _token = localStorage.getItem("booktez-token");
  const userToken = _token ? _token : "";

  useEffect(() => {
    setIsLogin(isLogin);
  }, [isLogin]);

  useEffect(() => {
    getInfo("/user/myInfo", userToken);
  }, [tempImg]);

  const getInfo = async (key: string, token: string) => {
    if (token) {
      try {
        const { data } = await getData(key, token);

        if (data.success) {
          setUserInfo(data.data);
        } else {
          setIsLogin(false);
        }
      } catch (err) {
        setIsLogin(false);
      }
    }
    setIsLoading(false);
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isLogin === false) return;
    if (e.target.files === null) return;

    const imgFile = e.target.files[0];
    const formData = new FormData();

    formData.append("img", imgFile);

    const { data } = await patchData(userToken, "/user/img", formData);

    if (data.success) {
      setTempImg(data.img);
      setUserInfo((current) => ({ ...current, img: data.img }));
    }
  };

  return (
    <>
      {isLoading && isLoginLoading ? (
        <Loading />
      ) : (
        <>
          <MainHeader>마이페이지</MainHeader>
          <UserContent userInfo={userInfo} onImageChange={handleImageChange} />
          <ServiceContent userInfo={userInfo}>
            <WithdrawContent />
          </ServiceContent>
        </>
      )}
    </>
  );
}
