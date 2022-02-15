import { atom } from "recoil";

export const isLoginState = atom<boolean>({
  key: "isLoginState",
  default: false,
});
