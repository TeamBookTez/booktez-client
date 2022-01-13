import axios from "axios";

import { getBaseURL } from "../restApi";

export const loginAxios = axios.create({
  baseURL: `${getBaseURL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export interface SignUp {
  email: string;
  password: string;
  nickname: string;
}

const PREFIX_URL = "/auth";

export const postSignUp = async (SignUpData: SignUp): Promise<boolean> => {
  try {
    const data = await loginAxios.post(`${PREFIX_URL}/signup`, SignUpData);

    console.log(data);

    if (data !== undefined) {
      if (data.data.status === 201) return true;
    }
  } catch (e: any) {
    if (e.response !== undefined) {
      alert(e.response.data.message);
    }
  }

  return false;
};
