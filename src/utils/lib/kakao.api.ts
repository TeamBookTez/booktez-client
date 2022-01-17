import { KAKAO } from ".";

export interface KAKAOParams {
  query: string;
  sort: string;
  size: number;
}

export const searchBook = (params: KAKAOParams) => {
  return KAKAO.get("/v3/search/book", { params });
};
