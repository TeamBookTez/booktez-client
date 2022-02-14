import { atom, selector } from "recoil";

import { getData } from "./lib/api";

export const isLoginState = atom<boolean>({
  key: "isLogin",
  default: false,
});

export const isLoginSelector = selector({
  key: "isLoginSelector",
  get: async () => {
    try {
      const { data } = await getData(
        "/auth/check",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxM30sImlhdCI6MTY0NDgwNjM4OSwiZXhwIjoxNjQ2MDE1OTg5fQ.FfV1lVZ-tPY_bue10T1LOiGld9hLV3b-J4zXajg5b-0",
      );
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
