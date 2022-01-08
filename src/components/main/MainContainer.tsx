import { Outlet } from "react-router-dom";

import { Navigation } from "../bookcase";
import { Header } from "../common";
import { Banner } from ".";

export default function MainContainer() {
  return (
    <main>
      <Header>메인</Header>
      <Banner />
      <section>
        <Navigation />
        <Outlet />
      </section>
    </main>
  );
}
