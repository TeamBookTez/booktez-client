import { AxiosRequestHeaders } from "axios";

import { client, KAKAO } from "./client";

interface Params {
  query: string;
  sort: string;
  size: number;
}

interface PostBody {
  email: string;
  password: string;
  nickname?: string;
}

// search book api
// 함수명을 searchBook으로?
export const bookSearch = (params: Params) => {
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

export const postData = (headers: AxiosRequestHeaders, key: string, body: PostBody) => {
  return client(headers).post(key, body);
};
