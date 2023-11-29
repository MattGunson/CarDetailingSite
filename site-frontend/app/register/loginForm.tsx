'use client'

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function LoginForm() {
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log("Signing in...");
    const response = await signIn<'credentials'>('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    })

    console.log("Response:")
    console.log({ response });
    if (response === undefined) {
      console.log("signIn returned nonsense")
    } else {
      if (!response?.error) {
        console.log("navigate to the dashboard")
        router.push("/dashboard");
        router.refresh();
      } else {
        console.log(response.error)
      }
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 mx-auto max-w-md mt-10"
    >
      <input name="email" className="border border-black" type="email" />
      <input name="password" className="border border-black" type="password" />
      <button type="submit">Login</button>

    </form>
  );
}
