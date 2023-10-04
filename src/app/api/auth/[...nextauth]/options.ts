import type { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

interface interfaceData {
  id: string;
  username: string;
  password: string;
  image: string;
  role: string;
}

export const options: NextAuthOptions = {
  providers: [
    CredentialProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials: any) {
        const { username, password } = credentials;
        try {
          const res: Response = await fetch("https://650c816247af3fd22f67b58e.mockapi.io/Account");
          const data: interfaceData[] = await res.json();
          const user: interfaceData | undefined = data.find((item) => item.username === username && item.password === password);
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
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
};
