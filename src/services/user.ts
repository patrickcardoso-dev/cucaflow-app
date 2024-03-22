import { api } from "@/lib/axios/config";

type CreateUserProps = {
  username: string;
  email: string;
  password: string;
};

type LoginUserProps = {
  email: string;
  password: string;
};

export async function createUser(path: string, user: CreateUserProps) {
  const response = await api.post(path, user);
  const userData = response.data;
  return userData;
}

export async function loginUser(path: string, user: LoginUserProps) {
  const response = await api.post(path, user);
  const loginUserData = response.data;
  return loginUserData;
}
