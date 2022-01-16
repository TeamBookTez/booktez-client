import { useOutletContext } from "react-router-dom";

import { BookcaseInfo } from "../../pages/Bookcase";
import Cards from "./Cards";

export default function PeriRead() {
  const [bookcasePeri] =
    useOutletContext<[BookcaseInfo[], React.Dispatch<React.SetStateAction<BookcaseInfo[]>>, () => void]>();

  return (
    <>
      <Cards bookcaseInfo={bookcasePeri} />
      {/* <NoCards /> 3항 연산자로 각기 다른 컴포넌트 렌더링*/}
    </>
  );
}
