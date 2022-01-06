import axios from "axios";

export const client = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
  },
});
