'use client'
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <span className="text-primary-content" onClick={() => signOut({ callbackUrl: "/" })}>
      Logout
    </span>
  )
}