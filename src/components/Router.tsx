import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { AddBook, Bookcase, Login, Main, MyPage, Signup, Test } from "../pages";
import ToBe from "../pages/ToBe";
import { PeriRead, PostRead, PreRead, Total } from "./bookcase";
import Drawer1 from "./bookNote/Drawer1";
import Drawer2 from "./bookNote/Drawer2";
import Drawer3 from "./bookNote/Drawer3";
import { CommonLayout } from "./common";
import { FirstStep, LastStep, SecondStep, ThirdStep } from "./signup";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<CommonLayout />}>
          <Route path="" element={<Navigate to="/main" />} />
          {/* /main */}
          <Route path="main/" element={<Main />} />
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
        <Route path="/error" element={<Test />} />
        <Route path="/test-drawer1" element={<Drawer1 />} />
        <Route path="/test-drawer2" element={<Drawer2 />} />
        <Route path="/test-drawer3" element={<Drawer3 />} />
      </Routes>
    </BrowserRouter>
  );
}
