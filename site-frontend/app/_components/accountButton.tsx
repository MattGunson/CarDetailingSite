'use client';
import { getServerSession } from "next-auth/next";
import { signOut } from "next-auth/react";
import Link from "next/link"
import { options } from "../api/auth/[...nextauth]/options";

export default async function AccountButton() {
  const session = await getServerSession(options);
  return (
    <>
      <li>
        <span className="text-primary-content" onClick={() => signOut({ callbackUrl: "/" })}>
          Logout
        </span>
      </li>
      <li>
        <Link className="text-primary-content" href="/register">Register</Link>
      </li>
      <li>
        <Link className="text-primary-content" href="/dashboard">Login</Link>
      </li>

    </>
  );
}