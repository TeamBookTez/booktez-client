import { Outlet } from "react-router-dom";

import { Navigation } from "../bookcase";
import { MainHeader } from "../common";
import { Banner } from ".";

export default function MainWrapper() {
  return (
    <main>
      <MainHeader>메인</MainHeader>
      <Banner />
      <section>
        <Navigation />
        <Outlet />
      </section>
    </main>
  );
}
