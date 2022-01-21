import { useOutletContext } from "react-router-dom";

import { BookcaseInfo } from "../../pages/Bookcase";
import Cards from "./Cards";

export default function PostRead() {
  const [bookcaseTotal, bookcasePre, bookcasePeri, bookcasePost, handleBookDelete, isLogin] =
    useOutletContext<[BookcaseInfo[], BookcaseInfo[], BookcaseInfo[], BookcaseInfo[], () => void, boolean]>();

  return (
    <>
      <Cards bookcaseInfo={bookcasePost} handleBookDelete={handleBookDelete} isLogin={isLogin} />
    </>
  );
}
