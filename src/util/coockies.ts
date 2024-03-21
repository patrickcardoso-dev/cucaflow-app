"use server";

import { cookies } from "next/headers";

export const getCookie = (key: string) => cookies().get(key);
