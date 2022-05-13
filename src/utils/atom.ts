import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

interface NavigatingBookInfoState {
  reviewId: string;
  title: string;
  fromUrl: string;
  fromSt: number;
}

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
    fromSt: 0,
  },
  effects_UNSTABLE: [persistAtom],
});
