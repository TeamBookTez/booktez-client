import { atom } from "recoil";

export const isLoginState = atom<boolean>({
  key: "isLogin",
  default: false,
});
