import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:9001/api/v1/",
  //baseURL: "http://api.mannatech.com.br/api/v1/",
  //baseURL: "http://lgvhost.mannatech.com.br:9001/api/v1/",
  timeout: 15000,
});
