import { api } from "@/lib/axios/config";

type CreateUserProps = {
  username: string;
  email: string;
  password: string;
};

export async function createUser(path: string, user: CreateUserProps) {
  const response = await api.post(path, user);
  const userData = response.data;
  return userData;
}

export async function getUser(path: string, token: string) {
  try {
    const response = await api.get(path, {
      headers: { Authorization: "Bearer " + token },
    });
    const userData = response.data;
    return userData;
  } catch (error) {
    console.log(error);
  }
}
