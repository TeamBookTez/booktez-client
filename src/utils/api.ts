import axios from "axios";

export const client = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
  },
});

const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com",
  headers: {
    Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}`,
  },
});

interface bookSearchProps {
  query: string;
  sort: string;
  size: number;
}

// search book api
export const bookSearch = (params: bookSearchProps) => {
  return Kakao.get("/v3/search/book", { params });
};
