import { useEffect, useState } from "react";

import BookList from "../components/addBook/BookList";
import SearchBar from "../components/addBook/SearchBar";
import { MainHeader } from "../components/common";
import { searchBook } from "../utils/lib/kakao.api";

export interface BookInfo {
  thumbnail: string;
  title: string;
  authors: string[];
  translators: string[];
  datetime: Date | string;
  contents: string;
  isbn: string;
}

export default function AddBook() {
  const [books, setBooks] = useState<BookInfo[]>([]);
  const [query, setQuery] = useState<string>("");
  const [debounceQuery, setDebounceQuery] = useState<string>("");

  const handleSearchBook = async (query: string, reset: boolean) => {
    const paramsAPI = {
      query,
      sort: "accuracy",
      // page: 1,
      size: 15,
    };

    const { data } = await searchBook(paramsAPI);

    if (reset) {
      setBooks(data.documents);
    } else {
      setBooks(books.concat(data.documents));
    }
  };

  const handleDebounceQuery = (tempQuery: string) => {
    setDebounceQuery(tempQuery);
  };

  useEffect(() => {
    if (query.length > 0) {
      handleSearchBook(query, true); // 컴포넌트 마운트 후에, 함수를 호출한다.
    }
  }, [query]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      return setQuery(debounceQuery);
    }, 200);

    return () => clearTimeout(debounce);
  }, [debounceQuery]);

  return (
    <>
      <MainHeader>책 추가</MainHeader>
      <SearchBar debounceQuery={debounceQuery} onDebounceQuery={handleDebounceQuery} />
      {debounceQuery ? <BookList books={books} /> : <></>}
    </>
  );
}
