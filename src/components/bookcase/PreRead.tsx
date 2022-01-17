import { useOutletContext } from "react-router-dom";

import { BookcaseInfo } from "../../pages/Bookcase";
import Cards from "./Cards";

export default function PreRead() {
  const [bookcasePre] =
    useOutletContext<[BookcaseInfo[], React.Dispatch<React.SetStateAction<BookcaseInfo[]>>, () => void]>();

  console.log(bookcasePre);

  return (
    <>
      <Cards bookcaseInfo={bookcasePre} />
      {/* <NoCards /> 3항 연산자로 각기 다른 컴포넌트 렌더링*/}
    </>
  );
}
