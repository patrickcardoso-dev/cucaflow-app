import NextAuth, { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const nextAuthOptions: NextAuthConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  pages: {
    signIn: "/",
  },

  secret: String(process.env.NEXTAUTH_SECRET),
};

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth(nextAuthOptions);
