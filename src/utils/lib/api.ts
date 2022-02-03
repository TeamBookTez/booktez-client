import { KAKAOParams, PatchBody, PostBody } from "../dataType";
import { client, KAKAO, mockClient } from ".";

export const searchBook = (params: KAKAOParams) => {
  return KAKAO.get("/v3/search/book", { params });
};

// headers에 들어갈 내용의 예시
// "Content-Type": "application/json",
// "Content-Type": "multipart/form-data"
// "Authorization": "토큰"

export const getMockData = (key: string, token?: string) => {
  return mockClient(token).get(key);
};

export const getData = (key: string, token?: string) => {
  return client(token).get(key);
};

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
    return false;
  }

  return false;
};
