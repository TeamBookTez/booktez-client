import { useOutletContext } from "react-router-dom";

import { useGetBookcase } from "../../pages/Bookcase";
import { Loading } from "../common";
import Cards from "./Cards";

export default function PeriRead() {
  const isLogin = useOutletContext<boolean>();
  const { bookcaseInfo, isLoading, getBookcase } = useGetBookcase("/book/peri");

  return (
    <>
      {isLoading ? <Loading /> : <Cards bookcaseInfo={bookcaseInfo} handleBookDelete={getBookcase} isLogin={isLogin} />}
    </>
  );
}
