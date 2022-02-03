import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import { BookcaseInfo } from "../../pages/Bookcase";
import { getMockData } from "../../utils/lib/api";
import { Loading } from "../common";
import Cards from "./Cards";

export default function PostRead() {
  const [isLoading, handleIsLoading, isLogin] = useOutletContext<[boolean, () => void, boolean]>();
  const [bookcasePost, setBookcasePost] = useState<BookcaseInfo[]>([]);

  const TOKEN = localStorage.getItem("booktez-token");
  const localToken = TOKEN ? TOKEN : "";

  const handleBookDelete = () => {
    getBookcasePost("/postbook", localToken);
  };

  useEffect(() => {
    getBookcasePost("/postbook", localToken);

    return () => {
      handleIsLoading();
    };
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
      {isLoading ? (
        <Loading />
      ) : (
        <Cards bookcaseInfo={bookcasePost} handleBookDelete={handleBookDelete} isLogin={isLogin} />
      )}
    </>
  );
}
