"use server";

import { cookies } from "next/headers";

export const getCookie = (key: string) => cookies().get(key);

export const setCookie = (key: string, value: string) =>
  cookies().set(key, value, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24,
  });
