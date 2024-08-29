import axios from "axios";

const dataAtual = new Date().toLocaleDateString("pt-Br", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

console.log(`${dataAtual} ${process.env.NEXT_PUBLIC_AMBIENTE}`);

export const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_AMBIENTE == "development"
      ? process.env.NEXT_PUBLIC_URL_API_DEVELOPMENT
      : process.env.NEXT_PUBLIC_URL_API_PRODUCTION, // : "http://lgvhost.mannatech.com.br:9001/api/v1/",
  timeout: 15000,
});
