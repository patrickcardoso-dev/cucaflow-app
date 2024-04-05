"use server";
import { api } from "@/lib/axios/config";
import { cookies } from "next/headers";

type CreateUserProps = {
  username: string;
  email: string;
  password: string;
};

export async function createUser(path: string, user: CreateUserProps) {
  try {
    const response = await api.post(path, user);
    const userData = response.data;
    return userData;
  } catch (error) {
    console.log(error);
  }
}

export async function getUser(path: string) {
  try {
    const response = await api.get(path);
    const userData = response.data;
    return userData;
  } catch (error) {
    return error;
  }
}
