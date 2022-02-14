import { useGetBookcase } from "../../pages/Bookcase";
import { Loading } from "../common";
import Cards from "./Cards";

export default function Total() {
  const { bookcaseInfo, isLoading, getBookcase } = useGetBookcase("/book");

  return <>{isLoading ? <Loading /> : <Cards bookcaseInfo={bookcaseInfo} handleBookDelete={getBookcase} />}</>;
}
