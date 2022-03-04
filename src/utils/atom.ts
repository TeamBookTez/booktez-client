import { atom } from "recoil";

import { NavigatingBookInfoState } from "../pages/BookNote";

export const isLoginState = atom<boolean>({
  key: "isLoginState",
  default: false,
});

export const navigatingBookInfoState = atom<NavigatingBookInfoState>({
  key: "navigatingBookInfoState",
  default: {
    reviewId: "-1",
    title: "",
    fromUrl: "",
  },
});
