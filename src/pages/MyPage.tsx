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
  const _token = localStorage.getItem("booktez-token");
  const userToken = _token ? _token : "";

  const setIsLogin = useSetRecoilState(isLoginState);
  const { isLogin, isLoginLoading } = useCheckLoginState();

  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: "",
    img: "",
    nickname: "",
    reviewCount: 0,
  });
  const [isInfoLoading, setIsInfoLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLogin(isLogin);
  }, [isLogin]);

  useEffect(() => {
    getInfo("/user/myInfo", userToken);
  }, []);

  const getInfo = async (key: string, token: string) => {
    try {
      const { data } = await getData(key, token);

      if (data.success) {
        setUserInfo(data.data);
      } else {
        setIsLogin(false);
      }
    } catch (err) {
      setIsLogin(false);
    } finally {
      setIsInfoLoading(false);
    }
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isLogin === false) return;
    if (e.target.files === null) return;

    const imgFile = e.target.files[0];
    const formData = new FormData();

    formData.append("img", imgFile);

    const { data } = await patchData(userToken, "/user/img", formData);

    if (data.success) {
      getInfo("/user/myInfo", userToken);
    }
  };

  return (
    <>
      {isInfoLoading && isLoginLoading ? (
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
