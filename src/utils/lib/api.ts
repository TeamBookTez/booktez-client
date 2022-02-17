import useSWR from "swr";

import { BookcaseInfo } from "../../pages/Bookcase";
import { KAKAOParams, PatchBody, PostBody } from "../dataType";
import { client, KAKAO } from ".";

export const searchBook = (params: KAKAOParams) => {
  return KAKAO.get("/v3/search/book", { params });
};

// headers에 들어갈 내용의 예시
// "Content-Type": "application/json",
// "Content-Type": "multipart/form-data"
// "Authorization": "토큰"

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

export const deleteData = (key: string, token: string | null) => {
  return client(token).delete(key);
};

// 활용할 때 검수 필요!!!!!!!!!!!!!!!!!!!!
export const useLoginChecking = async (localToken: string | null) => {
  // const localToken = localStorage.getItem("booktez-token");
  const _token = localToken ? localToken : "";

  try {
    const { data } = await getData("/auth/check", _token);

    if (data.status === 200) {
      if (data.data.isLogin === true) {
        return true;
      }
    }
  } catch (err) {
    return;
  }

  return false;
};

const bookcaseFetcher = async (key: string): Promise<BookcaseInfo[]> => {
  const TOKEN = localStorage.getItem("booktez-token");
  const _token = TOKEN ? TOKEN : "";

  const {
    data: {
      data: { books },
    },
  } = await getData(key, _token);

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
