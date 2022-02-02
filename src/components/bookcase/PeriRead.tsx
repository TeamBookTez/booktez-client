import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import { BookcaseInfo } from "../../pages/Bookcase";
import { getMockData } from "../../utils/lib/api";
import Cards from "./Cards";

export default function PeriRead() {
  const [handleIsLoading, isLogin] = useOutletContext<[() => void, boolean]>();
  const [bookcasePeri, setBookcasePeri] = useState<BookcaseInfo[]>([]);

  const TOKEN = localStorage.getItem("booktez-token");
  const localToken = TOKEN ? TOKEN : "";

  const handleBookDelete = () => {
    getBookcasePeri("/peribook", localToken);
  };

  useEffect(() => {
    getBookcasePeri("/peribook", localToken);
  }, []);

  const getBookcasePeri = async (key: string, token: string) => {
    try {
      const {
        data: {
          data: { books },
        },
      } = await getMockData(key, token);

      setBookcasePeri(books);
    } catch (err) {
      console.log("err", err);
    }
    handleIsLoading();
  };

  return (
    <>
      <Cards bookcaseInfo={bookcasePeri} handleBookDelete={handleBookDelete} isLogin={isLogin} />
    </>
  );
}
