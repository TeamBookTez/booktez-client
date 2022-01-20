import axios from "axios";
import { useEffect } from "react";

import { MainHeader } from "../components/common";
import { Banner, Recent } from "../components/main";
import { getData } from "../utils/lib/api";

export default function Main() {
  return (
    <>
      <MainHeader>메인</MainHeader>
      <Banner />
      <Recent />
    </>
  );
}
