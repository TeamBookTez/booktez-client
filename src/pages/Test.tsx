import axios from "axios";

import { PeriNoteExample } from "../components/bookNote";
import { getData } from "../utils/lib/api";

export default function Test() {
  // const header: AxiosRequestHeaders = {
  //   "Content-Type": "application/json",
  //   Authorization: `${process.env.REACT_APP_TEST_TOKEN}`,
  // };

  const handleFileChange = async () => {
    try {
      const res = await getData("/auth/email");

      console.log("res", res);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log("err", err.response?.data);
      }
    }
  };

  // const body: Body = {
  //   email: "test@booktez.com",
  //   password: "test1",
  //   nickname: "뀽",
  // };

  // const reviewId = 16;

  // const signup = async (header: AxiosRequestHeaders, key: string) => {
  //   const { data } = await getData(header, key);

  //   console.log("data", data);
  // };

  // useEffect(() => {
  //   signup(header, `/review/${reviewId}`);
  // }, []);

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <PeriNoteExample />
    </div>
  );
}
