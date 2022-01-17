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
    const { data } = await client.get(`${PREFIX_URL}/email?email=${emailData}`);

    if (data !== undefined) {
      if (data.status === 200) {
        return data.message;
      }
    }
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.log("err", err.response?.data);
    }
  }
};

export const getNickname = async (nicknameData: string) => {
  try {
    const { data } = await client.get(`${PREFIX_URL}/nickname?nickname=${nicknameData}`);

    if (data !== undefined) {
      if (data.status === 200) {
        return data.message;
      }
    }
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.log("err", err.response?.data);
    }
  }
};
