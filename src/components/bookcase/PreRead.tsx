import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import { BookcaseInfo } from "../../pages/Bookcase";
import { getMockData } from "../../utils/lib/api";
import { Loading } from "../common";
import Cards from "./Cards";

export default function PreRead() {
  const [isLoading, handleIsLoading, isLogin] = useOutletContext<[boolean, () => void, boolean]>();
  const [bookcasePre, setBookcasePre] = useState<BookcaseInfo[]>([]);

  const TOKEN = localStorage.getItem("booktez-token");
  const localToken = TOKEN ? TOKEN : "";

  const handleBookDelete = () => {
    getBookcasePre("/prebook", localToken);
  };

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
      {isLoading ? (
        <Loading />
      ) : (
        <Cards bookcaseInfo={bookcasePre} handleBookDelete={handleBookDelete} isLogin={isLogin} />
      )}
    </>
  );
}
