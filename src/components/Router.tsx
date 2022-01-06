import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Bookcase, Login, Main, SignUp } from "../pages";
import { PeriRead, PostRead, PreRead } from "./main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main/*" element={<Main />}>
          <Route path="pre" element={<PreRead />} />
          <Route path="peri" element={<PeriRead />} />
          <Route path="post" element={<PostRead />} />
        </Route>
        <Route path="/bookcase" element={<Bookcase />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/*" element={<div>404에러얍얍</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
