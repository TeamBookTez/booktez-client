import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import { BookcaseInfo } from "../../pages/Bookcase";
import { getMockData } from "../../utils/lib/api";
import Cards from "./Cards";

export default function Total() {
  const [handleIsLoading, isLogin] = useOutletContext<[() => void, boolean]>();
  const [bookcaseTotal, setBookcaseTotal] = useState<BookcaseInfo[]>([]);

  const TOKEN = localStorage.getItem("booktez-token");
  const localToken = TOKEN ? TOKEN : "";

  const handleBookDelete = () => {
    getBookcaseTotal("/book", localToken);
  };

  useEffect(() => {
    getBookcaseTotal("/book", localToken);
  }, []);

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
      <Cards bookcaseInfo={bookcaseTotal} handleBookDelete={handleBookDelete} isLogin={isLogin} />
    </>
  );
}
