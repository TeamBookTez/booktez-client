import React from "react";

import { MainHeader } from "../../components/common";
import BottomContent from "./BottomContent";
import TopContent from "./TopContent";

export default function MyPageWrapper() {
  return (
    <>
      <MainHeader>마이페이지</MainHeader>
      <TopContent />
      <BottomContent />
    </>
  );
}
