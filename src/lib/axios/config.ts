import axios from "axios";
import { cookies } from "next/headers";

export const api = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((request) => {
  const token = cookies().get("token")?.value;
  if (token) {
    request.headers.Authorization = "Bearer " + token;
  }
  return request;
});
