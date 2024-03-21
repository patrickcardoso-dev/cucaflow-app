import { api } from "@/lib/axios/config";

type CreateUserProps = {
  username: string;
  email: string;
  password: string;
  isSocialLogin: boolean;
};

export async function createUser(path: string, user: CreateUserProps) {
  const response = await api.post(path, user);
  const userData = response.data;
  return userData;
}
