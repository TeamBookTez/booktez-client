import { useOutletContext } from "react-router-dom";

import { BookcaseInfo } from "../../pages/Bookcase";
import Cards from "./Cards";

export default function PostRead() {
  const [bookcasePost, setBookDelete] =
    useOutletContext<[BookcaseInfo[], React.Dispatch<React.SetStateAction<boolean>>]>();

  return (
    <>
      <Cards bookcaseInfo={bookcasePost} setBookDelete={setBookDelete} />
      {/* <NoCards /> 3항 연산자로 각기 다른 컴포넌트 렌더링*/}
    </>
  );
}
