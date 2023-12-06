import { FormEvent } from "react";
import RegisterForm from './registerForm';
import { getServerSession } from "next-auth/next";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export default async function Register() {
  const session = await getServerSession(options)

  if (session) {
    redirect("/dashboard");
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch('api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        email: formData.get('email'),
        password: formData.get('password'),
      }),
    })
    console.log({ response });
  }
  return (
    <>
      <RegisterForm />
    </>
  );
}