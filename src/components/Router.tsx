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
import { PeriNote, PreNote } from "./bookNote";
import { CommonLayout, Error404 } from "./common";
import { FirstStep, LastStep, SecondStep, ThirdStep } from "./signup";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main/*" element={<CommonLayout />}>
          {/* /main */}
          <Route path="" element={<Main />} />
          {/* bookcase */}
          <Route path="bookcase/*" element={<Bookcase />} />
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
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
