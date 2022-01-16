import axios, { AxiosRequestHeaders } from "axios";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { Navigation } from "../components/bookcase";
import { MainHeader } from "../components/common";
import { getData } from "../utils/lib/api";

export interface BookcaseInfo {
  author: string[];
  state: number;
  thumbnail: string;
  title: string;
}

export default function Bookcase() {
  const [bookcaseInfo, setBookcaseInfo] = useState<BookcaseInfo[]>([]);

  const infoHeaders: AxiosRequestHeaders = {
    "Content-Type": "application/json",
    Authorization: `${process.env.REACT_APP_TEST_TOKEN}`,
  };

  const infoKey = "/book";

  const getBookcase = async (headers: AxiosRequestHeaders, key: string) => {
    try {
      const { data } = await getData(headers, key);

      console.log(data.data.books);
      setBookcaseInfo(data.data.books);
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
      <Outlet context={[bookcaseInfo]} />
    </>
  );
}
