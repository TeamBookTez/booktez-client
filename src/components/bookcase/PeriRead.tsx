import { useOutletContext } from "react-router-dom";

import { BookcaseInfo } from "../../pages/Bookcase";
import Cards from "./Cards";

export default function PeriRead() {
  const [bookcaseTotal, bookcasePre, bookcasePeri, bookcasePost, handleBookDelete, isLogin] =
    useOutletContext<[BookcaseInfo[], BookcaseInfo[], BookcaseInfo[], BookcaseInfo[], () => void, boolean]>();

  return (
    <>
      <Cards bookcaseInfo={bookcasePeri} handleBookDelete={handleBookDelete} isLogin={isLogin} />
      {/* <NoCards /> 3항 연산자로 각기 다른 컴포넌트 렌더링*/}
    </>
  );
}
