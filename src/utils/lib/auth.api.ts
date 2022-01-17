import axios from "axios";

import { client } from ".";

interface SignUp {
  email: string;
  password: string;
  nickname: string;
}

const PREFIX_URL = "/auth";

export const postSignup = async (body: SignUp) => {
  try {
    const data = await client.post(`${PREFIX_URL}/signup`, body);

    localStorage.setItem("token", data.data.token);
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.log("err", err.response?.data);
    }
  }
};
