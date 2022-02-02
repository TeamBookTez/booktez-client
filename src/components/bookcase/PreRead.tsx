import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import { BookcaseInfo } from "../../pages/Bookcase";
import { getMockData } from "../../utils/lib/api";
import Cards from "./Cards";

export default function PreRead() {
  const [handleIsLoading, handleBookDelete, isLogin] = useOutletContext<[() => void, () => void, boolean]>();
  const [bookcasePre, setBookcasePre] = useState<BookcaseInfo[]>([]);

  const TOKEN = localStorage.getItem("booktez-token");
  const localToken = TOKEN ? TOKEN : "";

  useEffect(() => {
    getBookcasePre("/prebook", localToken);
  }, []);

  const getBookcasePre = async (key: string, token: string) => {
    try {
      const {
        data: {
          data: { books },
        },
      } = await getMockData(key, token);

      setBookcasePre(books);
    } catch (err) {
      console.log("err", err);
    }
    handleIsLoading();
  };

  return (
    <>
      <Cards bookcaseInfo={bookcasePre} handleBookDelete={handleBookDelete} isLogin={isLogin} />
    </>
  );
}
