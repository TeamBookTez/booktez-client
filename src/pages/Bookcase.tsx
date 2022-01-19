import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { Navigation } from "../components/bookcase";
import { MainHeader } from "../components/common";
import { getData } from "../utils/lib/api";

export interface BookcaseInfo {
  author: string[];
  state?: number;
  thumbnail: string;
  title: string;
}

export default function Bookcase() {
  const [bookcaseTotal, setBookcaseTotal] = useState<BookcaseInfo[]>([]);
  const [bookcasePre, setBookcasePre] = useState<BookcaseInfo[]>([]);
  const [bookcasePeri, setBookcasePeri] = useState<BookcaseInfo[]>([]);
  const [bookcasePost, setBookcasePost] = useState<BookcaseInfo[]>([]);

  // 로그인 정보를 이용할때 아래 두 줄의 코드
  // const userToken = localStorage.getItem("booktez-token");
  // const token = `${userToken}`;
  const token = `${process.env.REACT_APP_TEST_TOKEN}`;
  const infoKey = "/book";

  const getBookcase = async (key: string, token: string) => {
    try {
      const { data } = await getData(key, token);

      setBookcaseTotal(data.data.books);

      //filter를 3번이나 갈겨주는데 더 좋은 방법이 있으면 수정 부탁드립니다
      const pre = data.data.books.filter((books: BookcaseInfo) => books.state === 2);
      const peri = data.data.books.filter((books: BookcaseInfo) => books.state === 3);
      const post = data.data.books.filter((books: BookcaseInfo) => books.state === 4);

      setBookcasePre(pre);
      setBookcasePeri(peri);
      setBookcasePost(post);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log("err", err.response?.data);
      }
    }
  };

  useEffect(() => {
    getBookcase(infoKey, token);
  }, []);

  return (
    <>
      <MainHeader>서재</MainHeader>
      <Navigation />
      <Outlet context={[bookcaseTotal, bookcasePre, bookcasePeri, bookcasePost]} />
    </>
  );
}
