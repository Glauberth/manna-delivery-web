import axios from "axios";

export const api = axios.create({
  baseURL:
    process.env.AMBIENTE === "production"
      ? "http://localhost:9001/api/v1/"
      : "http://localhost:9001/api/v1/",
  timeout: 15000,
});
