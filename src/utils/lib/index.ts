import axios, { AxiosRequestHeaders } from "axios";

export const KAKAO = axios.create({
  baseURL: "https://dapi.kakao.com",
  headers: {
    Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}`,
  },
});

// header에 맞춰서 axios를 만들어줌
export const client = (headers: AxiosRequestHeaders) => {
  return axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    headers,
  });
};
