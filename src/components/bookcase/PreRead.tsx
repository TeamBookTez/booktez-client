import { useGetBookcase } from "../../pages/Bookcase";
import { Loading } from "../common";
import Cards from "./Cards";

export default function PreRead() {
  const { bookcaseInfo, isLoading, getBookcase } = useGetBookcase("/book/pre");

  return <>{isLoading ? <Loading /> : <Cards bookcaseInfo={bookcaseInfo} handleBookDelete={getBookcase} />}</>;
}
