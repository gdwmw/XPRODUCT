import type { NextAuthOptions } from "next-auth";
// import GitHubProvider from "next-auth/providers/github";
import CredentialProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    // GitHubProvider({
    //   clientId: process.env.GITHUB_ID as string,
    //   clientSecret: process.env.GITHUB_SECRET as string,
    // }),
    CredentialProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        const { username, password }: any = credentials;
        try {
          const res = await fetch("https://650c816247af3fd22f67b58e.mockapi.io/Account");
          const data = await res.json();
          const user = data.find((item: any) => item.username === username && item.password === password);
          if (user) {
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
    // signOut: "/auth/signout",
    // error: "/auth/error",
    // verifyRequest: "/auth/verify-request",
    // newUser: "/auth/new-user",
  },
};
