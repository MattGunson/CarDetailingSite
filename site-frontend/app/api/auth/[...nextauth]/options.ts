import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import mongoClientPromise from "@/lib/db/mongodb";
import getUser from "@/lib/db/getUser";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Email:",
          type: "text",
          placeholder: "matt@gmail.com",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "nextauth"
        }
      },
      async authorize(credentials) {
        console.log(credentials)
        // This is where I retrieve user data to verify credentials
        if (credentials?.username === undefined || credentials?.password === undefined) {
          return null;
        }

        const user = await getUser(credentials.username);

        if (credentials.password === user?.password) {
          return user;
        }
        return null;
      }
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID as string,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    // })
  ],
}
