import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

import { Loading, MainHeader } from "../components/common";
import { Banner, RecentBooks } from "../components/main";
import { isLoginState } from "../utils/atoms";
import { useCheckLoginState } from "../utils/useHooks";

export default function Main() {
  const { isLogin, isLoginLoading } = useCheckLoginState();
  const setIsLogin = useSetRecoilState(isLoginState);

  useEffect(() => {
    if (isLogin) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  return (
    <>
      {isLoginLoading ? (
        <Loading />
      ) : (
        <>
          <MainHeader>메인</MainHeader>
          <Banner />
          <RecentBooks />
        </>
      )}
    </>
  );
}
