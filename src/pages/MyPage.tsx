import { useEffect, useState } from "react";

import { MainHeader } from "../components/common";
import Loading from "../components/common/Loading";
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
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // 이미지 patch 시에 렌더링이 잘 되지 않는 문제를 이미지를 위한 state를 만들고
  // useEffect로 getInfo를 호출해주었다.
  const [tempImg, setTempImg] = useState<string>("");

  const tempToken = localStorage.getItem("booktez-token");
  const localToken = tempToken ? tempToken : "";

  const handleLogout = () => {
    setIsLogin(false);
  };

  useEffect(() => {
    getInfo("/user/myInfo", localToken);
  }, [tempImg]);

  const getInfo = async (key: string, token: string) => {
    try {
      const { data } = await getData(key, token);

      if (data.success) {
        setUserInfo(data.data);
      }
    } catch (err) {
      setIsLogin(false);
      console.log("err", err);
    }
    setIsLoading(false);
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
        console.log("err", err);
      }
    }
  };

  return (
    <>
      {isLogin && isLoading ? (
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
