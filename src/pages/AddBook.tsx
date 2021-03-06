import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";

import AddBookDefault from "../components/addBook/AddBookDefault";
import BookList from "../components/addBook/BookList";
import SearchBar from "../components/addBook/SearchBar";
import { StickyHeader } from "../components/bookcase";
import { Loading, MainHeader } from "../components/common";
import { isLoginState } from "../utils/atom";
import { searchBook } from "../utils/lib/api";
import { useCheckLoginState, useDebounce } from "../utils/useHooks";

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
  const { query, debounceQuery, setDebounceQuery } = useDebounce<string>("");

  const [books, setBooks] = useState<BookInfo[]>([]);

  const { isLogin, isLoginLoading } = useCheckLoginState();
  const setIsLogin = useSetRecoilState(isLoginState);

  useEffect(() => {
    setIsLogin(isLogin);
  }, [isLogin]);

  useEffect(() => {
    if (query.length > 0) {
      handleSearchBook(query, true); // 컴포넌트 마운트 후에, 함수를 호출한다.
    }
  }, [query]);

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

  return (
    <>
      {isLoginLoading ? (
        <Loading />
      ) : (
        <>
          <StickyHeader headerHeight={109}>
            <MainHeader>책 추가</MainHeader>
            <SearchBar debounceQuery={debounceQuery} onDebounceQuery={handleDebounceQuery} />
          </StickyHeader>
          {debounceQuery ? <BookList isLogin={isLogin} books={books} /> : <AddBookDefault />}
        </>
      )}
    </>
  );
}
