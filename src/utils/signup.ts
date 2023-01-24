import axios from "axios";

import { getData } from "./lib/api";

export const checkIsValid = async (index: string, key: string) => {
  const urlPath = `/auth/${index}?${index}=${key}`;
  let result = { isValid: false, message: "" };

  try {
    const { data } = await getData(urlPath);

    result = { isValid: data.data.isValid, message: data.message };
  } catch (err) {
    if (axios.isAxiosError(err)) {
      result = { ...result, message: err.response?.data.message };
    }
  }

  return result;
};
