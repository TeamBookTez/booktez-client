import { useOutletContext } from "react-router-dom";

import { BookcaseInfo } from "../../pages/Bookcase";
import Cards from "./Cards";

export default function PostRead() {
  const [bookcaseTotal, bookcasePre, bookcasePeri, bookcasePost] =
    useOutletContext<[BookcaseInfo[], BookcaseInfo[], BookcaseInfo[], BookcaseInfo[]]>();

  return (
    <>
      <Cards bookcaseInfo={bookcasePost} />
      {/* <NoCards /> 3항 연산자로 각기 다른 컴포넌트 렌더링*/}
    </>
  );
}
