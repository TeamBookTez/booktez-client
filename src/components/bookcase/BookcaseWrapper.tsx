import { Outlet } from "react-router-dom";

import { MainHeader } from "../common";
import { Navigation } from ".";

export default function BookcaseContainer() {
  return (
    <section>
      <MainHeader>서재</MainHeader>
      <Navigation />
      <Outlet />
    </section>
  );
}
