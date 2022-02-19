import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";

import { Cards, Navigation } from "../components/bookcase";
import { Loading, MainHeader } from "../components/common";
import { isLoginState } from "../utils/atom";
import { useCheckLoginState } from "../utils/useHooks";

export interface BookcaseInfo {
  author: string[];
  reviewId: number;
  reviewSt?: number;
  thumbnail: string;
  title: string;
}

export default function Bookcase() {
  const [navIndex, setNavIndex] = useState<number>(0);
  const { isLogin, isLoginLoading } = useCheckLoginState();
  const setIsLogin = useSetRecoilState(isLoginState);

  const handleChangeNavIndex = (idx: number) => {
    setNavIndex(idx);
  };

  useEffect(() => {
    if (isLogin) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [isLogin]);

  return (
    <>
      {isLoginLoading ? (
        <Loading />
      ) : (
        <>
          <MainHeader>서재</MainHeader>
          <Navigation navIndex={navIndex} onChangeNavIndex={handleChangeNavIndex} />
          <Cards navIndex={navIndex} />
        </>
      )}
    </>
  );
}
