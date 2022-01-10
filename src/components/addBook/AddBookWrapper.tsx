import { MainHeader, MainLayout } from "../common";
import SearchBar from "./SearchBar";

export default function AddBookWrapper() {
  return (
    <MainLayout>
      <MainHeader color="#FF4C00">책 추가</MainHeader>
      <SearchBar />
    </MainLayout>
  );
}
