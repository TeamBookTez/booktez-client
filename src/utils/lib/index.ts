import axios from "axios";

export const KAKAO = axios.create({
  baseURL: "https://dapi.kakao.com",
  headers: {
    Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}`,
  },
});

export const client = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const auth = () => {
  return axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${process.env.REACT_APP_TEST_TOKEN}`,
    },
  });
};
