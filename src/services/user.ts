"use server";
import { api } from "@/lib/axios/config";
import { cookies } from "next/headers";
import { sanitizeEmptyStrings } from "@/util/sanitizeObj";

type CreateUserProps = {
  username: string;
  email: string;
  password: string;
};

type EditUserProps = {
  username?: string;
  email?: string;
  password?: string;
  avatar?: File;
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

export async function editUser(path: string, user: EditUserProps) {
  if (!user.username && !user.email && !user.password && !user.avatar) return;

  const userData = sanitizeEmptyStrings(user)
  try {
    await api.patch(path, userData );
    return userData;
  } catch (error: any) {
    console.log(error?.response?.data);
  }
}

export async function deleteUser(path: string, password: string) {
  try {
    await api.delete(path, {data: JSON.stringify({password})});
  } catch (error: any) {
    console.log(error?.response?.data);
  }
}
