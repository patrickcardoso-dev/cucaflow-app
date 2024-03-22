import NextAuth, { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import { api } from "./lib/axios/config";
import { setCookie } from "./util/coockies";

export const nextAuthOptions: NextAuthConfig = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "string" },
        password: { label: "password", type: "string" },
      },
      async authorize(credentials, req) {
        try {
          const response = await api.post("signIn", credentials);
          const result = await response.data;
          setCookie("token", result.token);
          return result;
        } catch (error) {
          return false;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      authorization: {
        params: {
          scope:
            "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/calendar",
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ account }) {
      /*       if (
        !account?.scope?.includes("https://www.googleapis.com/auth/calendar")
      ) {
        return "/?error=permissions";
      } */
      return true;
    },
  },
  pages: {
    signIn: "/",
  },

  secret: String(process.env.NEXTAUTH_SECRET),
};

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth(nextAuthOptions);
