import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import { BookcaseInfo } from "../../pages/Bookcase";
import { getMockData } from "../../utils/lib/api";
import Cards from "./Cards";

export default function PostRead() {
  const [handleIsLoading, handleBookDelete, isLogin] = useOutletContext<[() => void, () => void, boolean]>();
  const [bookcasePost, setBookcasePost] = useState<BookcaseInfo[]>([]);

  const TOKEN = localStorage.getItem("booktez-token");
  const localToken = TOKEN ? TOKEN : "";

  useEffect(() => {
    getBookcasePost("/postbook", localToken);
  }, []);

  const getBookcasePost = async (key: string, token: string) => {
    try {
      const {
        data: {
          data: { books },
        },
      } = await getMockData(key, token);

      setBookcasePost(books);
    } catch (err) {
      console.log("err", err);
    }
    handleIsLoading();
  };

  return (
    <>
      <Cards bookcaseInfo={bookcasePost} handleBookDelete={handleBookDelete} isLogin={isLogin} />
    </>
  );
}
