import { useOutletContext } from "react-router-dom";

import { BookcaseInfo } from "../../pages/Bookcase";
// import { NoCards } from ".";
import Cards from "./Cards";

export default function Total() {
  const [bookcaseTotal, bookcasePre, bookcasePeri, bookcasePost, setBookDelete] =
    useOutletContext<
      [BookcaseInfo[], BookcaseInfo[], BookcaseInfo[], BookcaseInfo[], React.Dispatch<React.SetStateAction<boolean>>]
    >();

  return (
    <>
      <Cards bookcaseInfo={bookcaseTotal} setBookDelete={setBookDelete} />
      {/* <NoCards /> */}
    </>
  );
}
