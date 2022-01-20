import { useOutletContext } from "react-router-dom";

import { BookcaseInfo } from "../../pages/Bookcase";
// import { NoCards } from ".";
import Cards from "./Cards";

export default function Total() {
  const [bookcaseTotal, bookcasePre, bookcasePeri, bookcasePost, handleBookDelete] =
    useOutletContext<[BookcaseInfo[], BookcaseInfo[], BookcaseInfo[], BookcaseInfo[], () => void]>();

  return (
    <>
      <Cards bookcaseInfo={bookcaseTotal} handleBookDelete={handleBookDelete} />
      {/* <NoCards /> */}
    </>
  );
}
