import axios from "axios";

console.log(process.env.NEXT_PUBLIC_AMBIENTE);

export const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_AMBIENTE == "development"
      ? "http://localhost:9001/api/v1/"
      : "http://apidelivery.mannatech.com.br:9001/api/v1/", // : "http://lgvhost.mannatech.com.br:9001/api/v1/",
  timeout: 15000,
});
