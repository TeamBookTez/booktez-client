import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import { BookcaseInfo } from "../../pages/Bookcase";
import { getMockData } from "../../utils/lib/api";
import { Loading } from "../common";
import Cards from "./Cards";

export default function Total() {
  const [isLoading, handleIsLoading, isLogin] = useOutletContext<[boolean, () => void, boolean]>();
  const [bookcaseTotal, setBookcaseTotal] = useState<BookcaseInfo[]>([]);

  const TOKEN = localStorage.getItem("booktez-token");
  const localToken = TOKEN ? TOKEN : "";

  const handleBookDelete = () => {
    getBookcaseTotal("/book", localToken);
  };

  useEffect(() => {
    getBookcaseTotal("/book", localToken);

    return () => {
      getBookcaseTotal("/book", localToken);
    };
  }, [bookcaseTotal]);

  const getBookcaseTotal = async (key: string, token: string) => {
    try {
      const {
        data: {
          data: { books },
        },
      } = await getMockData(key, token);

      setBookcaseTotal(books);
    } catch (err) {
      console.log("err", err);
    }
    handleIsLoading();
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Cards bookcaseInfo={bookcaseTotal} handleBookDelete={handleBookDelete} isLogin={isLogin} />
      )}
    </>
  );
}
