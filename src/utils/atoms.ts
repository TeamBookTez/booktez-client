import { atom } from "recoil";

export const isLoginState = atom<boolean>({
  key: "isLogin",
  default: false,
});

export const navWrapperWidthState = atom<number>({
  key: "navWrapperWidth",
  default: 17.5,
});
