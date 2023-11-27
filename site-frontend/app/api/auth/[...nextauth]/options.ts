import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import mongoClientPromise from "@/lib/mongodb";

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

        try {
          const client = await mongoClientPromise
          const db = client.db("cs260");

          const users = await db
            .collection("users")
            .find({username: credentials.username})
            .toArray();

          if (users.length === 0) {
            console.log("username not found");
            return null;
          }

          const user = users[0];
          if (credentials.password === user?.password) {
            const res = {id: "" + user._id, email: "" + user.username, password: "" + user.password, name: "" + user.name};
            console.log(res);
            return res;
          }
          
        } catch (e) {
          console.error(e);
          return null;
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
