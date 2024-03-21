import { getCookie } from "@/util/coockies";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://cucaflow-api.cyclic.app/",
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((request) => {
  const token = getCookie("token");
  if (token) {
    request.headers.Authorization = "Bearer " + token;
  }
  return request;
});
