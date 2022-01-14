import { AxiosRequestHeaders } from "axios";
import { useEffect } from "react";

import { getData, postData } from "../utils/lib/fetcher";

export default function Test() {
  // getAPI 사용방법
  // headers에 전달할 내용
  const tempHeaders1: AxiosRequestHeaders = {
    "Content-Type": "application/json",
    Authorization: `${process.env.REACT_APP_TEST_TOKEN}`,
  };

  // api key 값 - 요청을 보낼 주소값
  const tempKey1 = "/user/myInfo";

  // get 통신 방식
  const myGet = async (headers: AxiosRequestHeaders, key: string) => {
    const { data } = await getData(headers, key);

    console.log("get data", data);
  };

  ////////////////////////////////////////

  // postAPI 사용방법
  // headers에 전달할 내용
  const tempHeaders2: AxiosRequestHeaders = {
    "Content-Type": "application/json",
  };

  // api key 값 - 요청을 보낼 주소값
  const tempKey2 = "/auth/login";

  // get 통신 방식
  const myPost = async (headers: AxiosRequestHeaders, key: string) => {
    const { data } = await postData(headers, key, {
      email: "soryeongk.test@booktez.com",
      password: "soryeongk00!",
    });

    console.log("post data", data);
  };

  useEffect(() => {
    myGet(tempHeaders1, tempKey1);
    myPost(tempHeaders2, tempKey2);
  }, []);

  return <div>Test</div>;
}
