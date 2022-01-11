import BookList from "../components/addBook/BookList";
import SearchBar from "../components/addBook/SearchBar";
import { MainHeader } from "../components/common";

export default function AddBook() {
  return (
    <>
      <MainHeader>책 추가</MainHeader>
      <SearchBar />
      <BookList />
    </>
  );
}
