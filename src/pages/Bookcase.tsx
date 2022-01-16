import axios, { AxiosRequestHeaders } from "axios";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { Navigation } from "../components/bookcase";
import { MainHeader } from "../components/common";
import { getData } from "../utils/lib/api";

export interface BookcaseInfo {
  thumbnail: string;
  title: string;
  author: string;
  state: number;
}
export default function Bookcase() {
  const [bookcaseInfo, setBookcaseInfo] = useState<BookcaseInfo>({
    thumbnail: "",
    title: "",
    author: "",
    state: 0,
  });

  const infoHeaders: AxiosRequestHeaders = {
    "Content-Type": "application/json",
    Authorization: `${process.env.REACT_APP_TEST_TOKEN}`,
  };

  const infoKey = "/book";

  const getBookcase = async (headers: AxiosRequestHeaders, key: string) => {
    try {
      const { data } = await getData(headers, key);

      setBookcaseInfo(data.data.books);
      console.log(bookcaseInfo);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log("err", err.response?.data);
      }
    }
  };

  useEffect(() => {
    getBookcase(infoHeaders, infoKey);
  }, []);

  return (
    <>
      <MainHeader>서재</MainHeader>
      <Navigation />
      <Outlet />
    </>
  );
}
