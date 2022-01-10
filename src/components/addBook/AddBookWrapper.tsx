import theme from "../../styles/theme";
import { MainHeader, MainLayout } from "../common";
import BookList from "./BookList";
import SearchBar from "./SearchBar";

export default function AddBookWrapper() {
  return (
    <MainLayout>
      <MainHeader color={theme.colors.orange100}>책 추가</MainHeader>
      <SearchBar />
      <BookList />
    </MainLayout>
  );
}
