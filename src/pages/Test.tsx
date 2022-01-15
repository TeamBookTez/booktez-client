import { AxiosRequestHeaders } from "axios";
import { useEffect } from "react";

import { postData } from "../utils/lib/api";

interface Body {
  email: string;
  password: string;
  nickname?: string;
}

export default function Test() {
  const header: AxiosRequestHeaders = {
    "Content-Type": "application/json",
  };

  const body: Body = {
    email: "test@booktez.com",
    password: "test1",
    nickname: "뀽",
  };

  const signup = async (header: AxiosRequestHeaders, key: string, body: Body) => {
    const { data } = await postData(header, key, body);

    console.log("data", data);
  };

  useEffect(() => {
    signup(header, "/auth/signup", body);
  }, []);

  return <div>Test</div>;
}
