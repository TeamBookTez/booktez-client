import theme from "../../styles/theme";
import { MainHeader, MainLayout } from "../common";
import BookList from "./BookList";
import SearchBar from "./SearchBar";

export default function AddBookWrapper() {
  const headerColor = theme.colors.orange100;

  return (
    <MainLayout>
      <MainHeader color={headerColor}>책 추가</MainHeader>
      <SearchBar />
      <BookList />
    </MainLayout>
  );
}
