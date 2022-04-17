import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { Cards, Navigation, StickyHeader } from "../components/bookcase";
import { Loading, MainHeader } from "../components/common";
import { isLoginState, navigatingBookInfoState } from "../utils/atom";
import { useCheckLoginState } from "../utils/useHooks";

export interface BookcaseInfo {
  author: string[];
  reviewId: string;
  reviewSt?: number;
  thumbnail: string;
  title: string;
}

export default function Bookcase() {
  const navigatingBookInfo = useRecoilValue(navigatingBookInfoState);
  const { fromSt } = navigatingBookInfo;

  const [navIndex, setNavIndex] = useState<number>(fromSt);
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
          <StickyHeader>
            <MainHeader>서재</MainHeader>
            <Navigation navIndex={navIndex} onChangeNavIndex={handleChangeNavIndex} />
          </StickyHeader>
          <Cards navIndex={navIndex} />
        </>
      )}
    </>
  );
}
