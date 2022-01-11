import { Outlet } from "react-router-dom";

import { Navigation } from "../components/bookcase";
import { MainHeader } from "../components/common";

export default function Bookcase() {
  return (
    <>
      <MainHeader>서재</MainHeader>
      <Navigation />
      <Outlet />
    </>
  );
}
