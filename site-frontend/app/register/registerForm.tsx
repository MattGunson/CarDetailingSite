'use client'

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default async function RegisterForm() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const regRes = await fetch('api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        email: formData.get('email'),
        password: formData.get('password'),
        name: formData.get('name'),
      }),
    })

    const router = useRouter();
    const response = await signIn<'credentials'>('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    })

    console.log({ response });
    if (response === undefined) {
      console.log("signIn returned nonsense")
    } else {
      if (!response?.error) {
        router.push("/dashboard");
        router.refresh();
      } else {
        console.log(response.error)
      }
    }

    console.log({ response });
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 mx-auto max-w-md mt-10"
    >
      <input name="name" className="border border-black" type="text" />
      <input name="email" className="border border-black" type="email" />
      <input name="password" className="border border-black" type="password" />
      <button type="submit">Register</button>

    </form>
  );
}
