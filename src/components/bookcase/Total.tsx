import { useOutletContext } from "react-router-dom";

import { BookcaseInfo } from "../../pages/Bookcase";
// import { NoCards } from ".";
import Cards from "./Cards";

export default function Total() {
  const [bookcaseTotal, setBookDelete] =
    useOutletContext<[BookcaseInfo[], React.Dispatch<React.SetStateAction<boolean>>, () => void]>();

  return (
    <>
      <Cards bookcaseInfo={bookcaseTotal} setBookDelete={setBookDelete} />
      {/* <NoCards /> */}
    </>
  );
}
