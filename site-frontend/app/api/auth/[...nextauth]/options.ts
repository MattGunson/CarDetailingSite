import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import mongoClientPromise from "@/lib/db/mongodb";
import getUser from "@/lib/db/getUser";

export const options: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email:",
          type: "email",
          placeholder: "matt@gmail.com",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "nextauth"
        }
      },
      async authorize(credentials) {
        console.log("verifying credentials")
        console.log(credentials)
        // This is where I retrieve user data to verify credentials
        if (credentials?.email === undefined || credentials?.password === undefined) {
          return null;
        }

        const user = await getUser(credentials.email);

        if (credentials.password === user?.password) {
          return user;
        }
        console.log("bad password of %s", credentials.password)
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
