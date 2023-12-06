'use client'

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function RegisterForm() {
  const router = useRouter();
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
      className="flex flex-col gap-3 mx-auto max-w-md my-10"
    >
      <label htmlFor="name">Name:</label>
      <input name="name" placeholder="matthew" className="border border-primary rounded-md" type="text" />
      <label htmlFor="email">Email:</label>
      <input name="email" placeholder="matt@gmail.com" className="border border-primary rounded-md" type="email" />
      <label htmlFor="password">Password:</label>
      <input name="password" placeholder="password" className="border border-primary rounded-md" type="password" />
      <button type="submit" className="btn btn-primary">Register</button>

    </form>
  );
}
