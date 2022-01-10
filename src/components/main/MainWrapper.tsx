import { Outlet } from "react-router-dom";

import { Navigation } from "../bookcase";
import { MainHeader, MainLayout } from "../common";
import { Banner } from ".";

export default function MainWrapper() {
  return (
    <MainLayout>
      <MainHeader>메인</MainHeader>
      <Banner />
      <section>
        <Navigation />
        <Outlet />
      </section>
    </MainLayout>
  );
}
