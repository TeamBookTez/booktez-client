import { atom } from "recoil";

export const articleAtom = atom({
  key: "articleData",
  default: [],
});

export const isLikeAtom = atom({
  key: "isLike",
  default: true,
});
