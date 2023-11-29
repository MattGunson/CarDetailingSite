'use client'
import { signOut } from "next-auth/react";

export default async function LogoutButton() {
  return (
    <span className="text-primary-content" onClick={() => signOut({ callbackUrl: "/" })}>
      Logout
    </span>
  )
}