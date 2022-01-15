import axios from "axios";

export const loginAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
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
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message);
    }
  }

  return false;
};
