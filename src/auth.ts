import NextAuth, { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const nextAuthOptions: NextAuthConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      authorization: {
        params: {
          scope:
            "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/calendar",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ account }) {
      if (
        !account?.scope?.includes("https://www.googleapis.com/auth/calendar")
      ) {
        return "/?error=permissions";
      }
      return "/dashboard";
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
