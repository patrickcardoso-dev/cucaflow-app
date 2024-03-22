import NextAuth, { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import { api } from "./lib/axios/config";
import { setCookie } from "./util/coockies";
import { AdapterUser } from "next-auth/adapters";

export const nextAuthOptions: NextAuthConfig = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "string" },
        password: { label: "password", type: "string" },
      },
      async authorize(credentials, req) {
        const response = await fetch("https://cucaflow-api.cyclic.app/signIn", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });
        const user = await response.json();

        if (user && response.ok) {
          return user;
        }
        return null;
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
    async session({ session, token }) {
      session.user = token.user as AdapterUser;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
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
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
};

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth(nextAuthOptions);
