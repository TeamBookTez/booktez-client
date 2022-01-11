import axios from "axios";

export const client = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
  },
});

const KEY = "079ae5512bb109fcddd4026bc011f3e9";
const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com",
  headers: {
    Authorization: `KakaoAK ${KEY}`,
  },
});

// search book api
export const bookSearch = (params: any) => {
  return Kakao.get("/v3/search/book", { params });
};
