import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { AddBook, Bookcase, Login, Main, MyPage, Signup, Test } from "../pages";
import BookNote from "../pages/BookNote";
import ToBe from "../pages/ToBe";
import { PeriRead, PostRead, PreRead, Total } from "./bookcase";
import PeriNote from "./bookNote/periNote/PeriNote";
import PreNote from "./bookNote/preNote/PreNote";
import { CommonLayout } from "./common";
import { FirstStep, LastStep, SecondStep, ThirdStep } from "./signup";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
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
        <Route path="/login" element={<Login />} />
        {/* 회원가입 1,2,3 나눔 */}
        <Route path="/signup/*" element={<Signup />}>
          <Route path="" element={<FirstStep />} />
          <Route path="2" element={<SecondStep />} />
          <Route path="3" element={<ThirdStep />} />
          <Route path="4" element={<LastStep />} />
          <Route path="*" element={<Navigate to="" />} />
        </Route>
        <Route
          path="*"
          element={
            <p>
              404 에러 얍얍
              <Test />
            </p>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
