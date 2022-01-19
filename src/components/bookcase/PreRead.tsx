import { useOutletContext } from "react-router-dom";

import { BookcaseInfo } from "../../pages/Bookcase";
import Cards from "./Cards";

export default function PreRead() {
  const [bookcaseTotal, bookcasePre, bookcasePeri, bookcasePost, setBookDelete] =
    useOutletContext<
      [BookcaseInfo[], BookcaseInfo[], BookcaseInfo[], BookcaseInfo[], React.Dispatch<React.SetStateAction<boolean>>]
    >();

  return (
    <>
      <Cards bookcaseInfo={bookcasePre} setBookDelete={setBookDelete} />
      {/* <NoCards /> 3항 연산자로 각기 다른 컴포넌트 렌더링*/}
    </>
  );
}
