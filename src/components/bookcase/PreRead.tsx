import { useOutletContext } from "react-router-dom";

import { BookcaseInfo } from "../../pages/Bookcase";
import Cards from "./Cards";

export default function PreRead() {
  const [bookcasePre, handleBookDelete] = useOutletContext<[BookcaseInfo[], () => void]>();

  return (
    <>
      <Cards bookcaseInfo={bookcasePre} handleBookDelete={handleBookDelete} />
      {/* <NoCards /> 3항 연산자로 각기 다른 컴포넌트 렌더링*/}
    </>
  );
}
