import { atom, selector } from "recoil";

import { getData } from "./lib/api";

export const isLoginState = atom<boolean>({
  key: "isLogin",
  default: false,
});

export const isLoginSelector = selector({
  key: "isLoginSelector",
  get: async () => {
    const tempToken = localStorage.getItem("booktez-token");
    const TOKEN = tempToken ? tempToken : "";
    const API_PATH = "/auth/check";

    try {
      const { data } = await getData(API_PATH, TOKEN);
      const status = data.status;

      if (status === 200) {
        if (data.data.isLogin === true) {
          return true;
        }
      }

      return false;
    } catch (err) {
      return false;
    }
  },
});
