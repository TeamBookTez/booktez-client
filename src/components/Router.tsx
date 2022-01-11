import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { AddBook, Bookcase, Login, Main, Signup } from "../pages";
import { PeriRead, PostRead, PreRead, Total } from "./bookcase";
import { CommonLayout } from "./common";
import { FirstStep, SecondStep, ThirdStep } from "./signup";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />
        <Route path="/*" element={<CommonLayout />}>
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
          {/* add-book */}
          <Route path="add-book" element={<AddBook />} />
          {/* my-page */}
          {/* <Route path="/my-page" element={<div>상언이의 마이페이지</div>} /> */}
          {/* to-be */}
          <Route path="to-be" element={<div>곧 만나용</div>} />
          <Route path="*" element={<Navigate to="" />} />
        </Route>
        <Route path="/login" element={<Login />} />
        {/* 회원가입 1,2,3 나눔 */}
        <Route path="/signup/*" element={<Signup />}>
          <Route path="1" element={<FirstStep />} />
          <Route path="2" element={<SecondStep />} />
          <Route path="3" element={<ThirdStep />} />
          <Route path="*" element={<Navigate to="1" />} />
        </Route>
        {/* <Route path="/*" element={<div>404에러얍얍</div>} /> */}
      </Routes>
    </BrowserRouter>
  );
}
