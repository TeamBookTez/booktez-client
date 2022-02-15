import { useGetBookcase } from "../../utils/useHooks";
import { Loading } from "../common";
import Cards from "./Cards";

export default function PeriRead() {
  const { bookcaseInfo, isLoading, getBookcase } = useGetBookcase("/book/peri");

  return <>{isLoading ? <Loading /> : <Cards bookcaseInfo={bookcaseInfo} handleBookDelete={getBookcase} />}</>;
}
