import axios from "axios";

import { client } from ".";

interface SignUp {
  email: string;
  password: string;
  nickname: string;
}

const PREFIX_URL = "/auth";

export const postSignup = async (signupData: SignUp) => {
  try {
    const data = await client.post(`${PREFIX_URL}/signup`, signupData);

    localStorage.setItem("token", data.data.token);
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.log("err", err.response?.data);
    }
  }
};

export const getEmail = async (emailData: string) => {
  try {
    const { data: response } = await client.get(`${PREFIX_URL}/email?email=${emailData}`);

    if (response !== undefined) {
      if (response.status === 200) {
        // console.log(response.message);

        return response.message;
      }
    }
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.log("err", err.response?.data);
    }
  }

  return console.log("딱 가져온나");
};
