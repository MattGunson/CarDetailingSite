import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

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
        // This is where I retrieve user data to verify credentials
        const user = { id: "01", email: "matt@gmail.com", password: "nextauth" }

        if (credentials?.username === user.email && credentials?.password === user.password) {
          return user
        } else {
          return null
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
}
