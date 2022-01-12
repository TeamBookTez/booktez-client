import { useEffect, useState } from "react";

import BookList from "../components/addBook/BookList";
import SearchBar from "../components/addBook/SearchBar";
import { MainHeader } from "../components/common";
import theme from "../styles/theme";
import { bookSearch } from "../utils/api";

export interface BookInfo {
  thumbnail: string;
  title: string;
  authors: string[];
  datetime: Date | string;
  contents: string;
}

export default function AddBook() {
  const [books, setBooks] = useState<BookInfo[]>([]);
  const [query, setQuery] = useState<string>("");

  const bookSearchHandler = async (query: string, reset: boolean) => {
    const params = {
      query,
      sort: "accuracy",
      // page: 1,
      size: 15,
    };

    const { data } = await bookSearch(params);

    if (reset) {
      setBooks(data.documents);
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
    <>
      <MainHeader>책 추가</MainHeader>
      <SearchBar setQuery={setQuery} />
      <BookList books={books} />
    </>
  );
}
