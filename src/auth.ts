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
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ account }) {
      //account?.access_token
      // account?.expires_at
      // account?.refresh_token

      if (
        !account?.scope?.includes("https://www.googleapis.com/auth/calendar")
      ) {
        return "/?error=permissions";
      }
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
