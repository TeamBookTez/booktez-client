import { useState } from "react";
import useSWR from "swr";

import { BookcaseInfo } from "../../pages/Bookcase";
import { KAKAOParams, PatchBody, PeriNoteData, PostBody, PreNoteData } from "../dataType";
import { client, KAKAO } from ".";

interface ServerError {
  error: boolean;
  exist: boolean;
  message: string;
}

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

export const patchUserWithdraw = (token: string, key: string) => {
  return client(token).patch(key);
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

    console.log(data);
    if (data.success) {
      return { isError: false, isExist: data.data.isExist, message: data.message };
    } else {
      // 통신에는 성공했으나 에러가 난 경우
      // 에러 메시지 받아서 토스트 띄울 수 있도록 추후 변경 예정
      return { isError: true, isExist: false, message: data.message };
    }
  } catch (err) {
    // 통신에 실패한 경우
    console.log(err);

    return { isError: true, isExist: false, message: "df" };
  }
};
