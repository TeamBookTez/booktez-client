import { useGetBookcase } from "../../pages/Bookcase";
import { Loading } from "../common";
import Cards from "./Cards";

export default function PostRead() {
  const { bookcaseInfo, isLoading, getBookcase } = useGetBookcase("/book/post");

  return <>{isLoading ? <Loading /> : <Cards bookcaseInfo={bookcaseInfo} handleBookDelete={getBookcase} />}</>;
}
