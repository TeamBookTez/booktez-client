import { MainHeader } from "../components/common";
import BottomContent from "../components/mypage/BottomContent";
import TopContent from "../components/mypage/TopContent";

export default function MyPage() {
  return (
    <>
      <MainHeader>마이페이지</MainHeader>
      <TopContent />
      <BottomContent />
    </>
  );
}
