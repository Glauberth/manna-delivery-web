import axios from "axios";

console.log(process.env.NEXT_PUBLIC_AMBIENTE);

export const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_AMBIENTE == "development"
      ? "http://localhost:9001/api/v1/"
      : "http://64.31.19.104:9001/api/v1/",
  timeout: 15000,
});
