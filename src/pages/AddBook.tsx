import { useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import styled, { css } from "styled-components";

import AddBookDefault from "../components/addBook/AddBookDefault";
import BookList from "../components/addBook/BookList";
import SearchBar from "../components/addBook/SearchBar";
import { Loading, MainHeader } from "../components/common";
import { isLoginState } from "../utils/atom";
import { searchBook } from "../utils/lib/api";
import { useCheckLoginState } from "../utils/useHooks";

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

  const { isLogin, isLoginLoading } = useCheckLoginState();
  const setIsLogin = useSetRecoilState(isLoginState);

  const { scrollY } = useViewportScroll();
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const MAIN_HEADER_HEIGHT = 109;

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > MAIN_HEADER_HEIGHT) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });

    return () => {
      scrollY.clearListeners();
    };
  }, [scrollY]);

  useEffect(() => {
    if (isLogin) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [isLogin]);

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
          <StWrapper isscroll={isScroll}>
            <MainHeader>책 추가</MainHeader>
            <SearchBar debounceQuery={debounceQuery} onDebounceQuery={handleDebounceQuery} />
          </StWrapper>
          {debounceQuery ? <BookList books={books} /> : <AddBookDefault />}
        </>
      )}
    </>
  );
}

const StWrapper = styled.div<{ isscroll: boolean }>`
  position: sticky;
  top: 0rem;

  border-radius: 2rem 0 0 0;
  background-color: ${({ theme }) => theme.colors.white};

  ${({ isscroll }) =>
    isscroll
      ? css`
          box-shadow: 0rem 0.6rem 1rem rgba(0, 0, 0, 0.17);
        `
      : css`
          box-shadow: 0;
        `};
`;
