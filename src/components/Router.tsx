import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import {
  AddBook,
  Bookcase,
  BookNote,
  DetailBookNote,
  DetailExample,
  Login,
  Main,
  MyPage,
  Signup,
  ToBe,
} from "../pages";
import Landing from "../pages/Landing";
import { getData } from "../utils/lib/api";
import { PeriRead, PostRead, PreRead, Total } from "./bookcase";
import { PeriNote, PreNote } from "./bookNote";
import { CommonLayout } from "./common";
import { FirstStep, LastStep, SecondStep, ThirdStep } from "./signup";

export default function Router() {
  const tempToken = localStorage.getItem("booktez-token");
  const localToken = tempToken ? tempToken : "";

  const [isLogin, setIsLogin] = useState<boolean>(false);

  const getLogin = async (key: string, token: string) => {
    try {
      const { data } = await getData(key, token);
      const status = data.status;

      if (!localToken) {
        setIsLogin(false);
      }
      if (!(status === 200)) {
        setIsLogin(false);
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log("err", err.response?.data);
      }
    }
  };

  useEffect(() => {
    getLogin("/auth/check", localToken);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLogin ? <Navigate to="/main" /> : <Landing />} />
        <Route path="/main/*" element={<CommonLayout />}>
          {/* /main */}
          <Route path="" element={<Main />} />
          {/* bookcase */}
          <Route path="bookcase/*" element={<Bookcase />}>
            <Route path="" element={<Total />} />
            <Route path="pre" element={<PreRead />} />
            <Route path="peri" element={<PeriRead />} />
            <Route path="post" element={<PostRead />} />
            <Route path="*" element={<Navigate to="" />} />
          </Route>
          <Route path="add-book" element={<AddBook />} />
          {/* my-page */}
          <Route path="my-page" element={<MyPage />} />
          {/* to-be */}
          <Route path="to-be" element={<ToBe />} />
        </Route>
        {/* book-note */}
        <Route path="book-note/*" element={<BookNote />}>
          <Route path="" element={<PreNote />} />
          <Route path="peri" element={<PeriNote />} />
          <Route path="*" element={<Navigate to="" />} />
        </Route>
        <Route path="/detail-book-note" element={<DetailBookNote />} />
        <Route path="/detail-example" element={<DetailExample />} />
        <Route path="/login" element={<Login />} />
        {/* 회원가입 1,2,3 나눔 */}
        <Route path="/signup/*" element={<Signup />}>
          <Route path="" element={<FirstStep />} />
          <Route path="2" element={<SecondStep />} />
          <Route path="3" element={<ThirdStep />} />
          <Route path="4" element={<LastStep />} />
          <Route path="*" element={<Navigate to="" />} />
        </Route>
        <Route path="*" element={<p>404 에러 얍얍</p>} />
      </Routes>
    </BrowserRouter>
  );
}
