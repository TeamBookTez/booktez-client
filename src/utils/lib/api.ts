import axios from "axios";
import useSWR from "swr";

import { BookcaseInfo } from "../../pages/Bookcase";
import { KAKAOParams, PatchBody, PeriNoteData, PostBody, PreNoteData } from "../dataType";
import { client, KAKAO } from ".";

export const searchBook = (params: KAKAOParams) => {
  return KAKAO.get("/v3/search/book", { params });
};

export const getData = (key: string, token?: string) => {
  return client(token).get(key);
};

// 제네릭으로 바꾸기
export const postData = (key: string, postBody: PostBody, token?: string) => {
  return client(token).post(key, postBody);
};

export const patchData = (token: string, key: string, patchBody: PatchBody | FormData) => {
  return client(token).patch(key, patchBody);
};

export const patchBookNote = async (token: string, key: string, body: PreNoteData | PeriNoteData) => {
  const { data } = await client(token).patch(key, body);

  return data.data;
};

export const deleteData = (key: string, token: string | null) => {
  return client(token).delete(key);
};

const bookcaseFetcher = async (key: string): Promise<BookcaseInfo[]> => {
  const _token = localStorage.getItem("booktez-token");
  const userToken = _token ? _token : "";

  // token이 없으면 요청하지 않음
  if (!userToken) return [];

  const {
    data: {
      data: { books },
    },
  } = await getData(key, userToken);

  return books;
};

export function useGetBookInfo(key: string) {
  const { data, error } = useSWR(key, bookcaseFetcher);

  return {
    bookcaseInfo: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export const checkIsBookExist = async (isbn: string) => {
  const _token = localStorage.getItem("booktez-token");
  const userToken = _token ? _token : "";

  try {
    const { data } = await client(userToken).get(`/book/exist/${isbn}`);

    if (data.success) {
      return { isError: false, isExist: data.data.isExist };
    } else {
      // 통신에는 성공했으나 에러가 난 경우
      console.log("[ERROR RETURNED]", data);

      return { isError: true, isExist: false };
    }
  } catch (err) {
    // 통신에 실패한 경우
    if (axios.isAxiosError(err)) {
      console.log("[ERROR CATCHED] statusCode: ", err.response?.status, err.message);
    }

    return { isError: true, isExist: false };
  }
};
