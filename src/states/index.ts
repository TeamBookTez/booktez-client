import { atom } from "recoil";
// import { selector } from "recoil";

export const articleAtom = atom({
  key: "articleData",
  default: [],
});

export const isLikeAtom = atom({
  key: "isLike",
  default: true,
});
