import { AxiosRequestHeaders } from "axios";

import { KAKAOParams, PatchBody, PostBody } from "../dataType";
import { client, KAKAO } from ".";

export const searchBook = (params: KAKAOParams) => {
  return KAKAO.get("/v3/search/book", { params });
};

// headers에 들어갈 내용의 예시
// "Content-Type": "application/json",
// "Content-Type": "multipart/form-data"
// "Authorization": "토큰"

// 함수명 같이 논의해보기
export const getData = (headers: AxiosRequestHeaders, key: string) => {
  return client(headers).get(key);
};

export const postData = (headers: AxiosRequestHeaders, key: string, postBody: PostBody) => {
  return client(headers).post(key, postBody);
};

export const patchData = (headers: AxiosRequestHeaders, key: string, patchBody: PatchBody | FormData) => {
  return client(headers).patch(key, patchBody);
};
