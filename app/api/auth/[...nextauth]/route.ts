import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // TODO: call API login here
        const user = await new Promise<any>((rel) => {
          console.log("credentials", credentials);
          rel({
            id: "1",
            email: credentials?.username,
            name: credentials?.username.split("@")[0] || "USER NAME",
            image: "https://i.pngimg.me/thumb/f/720/c3f2c592f9.jpg",
          });
        });
        if (user) {
          return user;
        }
        return null;
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
