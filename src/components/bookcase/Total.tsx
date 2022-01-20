import { useOutletContext } from "react-router-dom";

import { BookcaseInfo } from "../../pages/Bookcase";
// import { NoCards } from ".";
import Cards from "./Cards";

export default function Total() {
  const [bookcaseTotal, handleBookDelete] = useOutletContext<[BookcaseInfo[], () => void]>();

  return (
    <>
      <Cards bookcaseInfo={bookcaseTotal} handleBookDelete={handleBookDelete} />
      {/* <NoCards /> */}
    </>
  );
}
