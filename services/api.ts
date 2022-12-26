import axios from "axios";

export const api = axios.create({
  // baseURL: "http://api.mannatech.com.br/api/v1/",
  baseURL: "http://64.31.19.104:9001/api/v1/",
  timeout: 15000,
});
