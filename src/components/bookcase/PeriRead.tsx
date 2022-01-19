import { useOutletContext } from "react-router-dom";

import { BookcaseInfo } from "../../pages/Bookcase";
import Cards from "./Cards";

export default function PeriRead() {
  const [bookcasePeri, setBookDelete] =
    useOutletContext<[BookcaseInfo[], React.Dispatch<React.SetStateAction<boolean>>]>();

  return (
    <>
      <Cards bookcaseInfo={bookcasePeri} setBookDelete={setBookDelete} />
      {/* <NoCards /> 3항 연산자로 각기 다른 컴포넌트 렌더링*/}
    </>
  );
}
