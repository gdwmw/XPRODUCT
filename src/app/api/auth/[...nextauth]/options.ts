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
      credentials: {
        username: {
          label: "Credentials",
          type: "text",
          placeholder: "Enter your Username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your Password",
        },
      },
      async authorize(credentials, req) {
        const user = { id: "1", name: "admin", password: "admin" };

        if (credentials?.username === user.name && credentials?.password === user.password) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};
