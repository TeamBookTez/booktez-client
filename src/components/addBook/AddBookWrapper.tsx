import { useEffect, useState } from "react";

import theme from "../../styles/theme";
import { bookSearch } from "../../utils/api";
import { MainHeader, MainLayout } from "../common";
import BookList from "./BookList";
import SearchBar from "./SearchBar";

export default function AddBookWrapper() {
  const headerColor = theme.colors.orange100;

  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  const bookSearchHandler = async (query: string, reset: boolean) => {
    const params = {
      query,
      sort: "accuracy",
      page: 1,
      size: 10,
    };

    const { data } = await bookSearch(params);

    if (reset) {
      setBooks(data.documents);
      console.log(data);
    } else {
      setBooks(books.concat(data.documents));
    }
  };

  useEffect(() => {
    if (query.length > 0) {
      bookSearchHandler(query, true); // 컴포넌트 마운트 후에, 함수를 호출한다.
    }
  }, [query]);

  return (
    <MainLayout>
      <MainHeader color={headerColor}>책 추가</MainHeader>
      <SearchBar setQuery={setQuery} />
      <BookList />
    </MainLayout>
  );
}
