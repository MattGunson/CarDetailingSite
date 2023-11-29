import { FormEvent } from "react";
import RegisterForm from './registerForm';
import LoginForm from "./loginForm";

export default function Register() {
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
      <LoginForm />
    </>
  );
}

// <body className="__next-auth-theme-auto">
//     <div className="page">
//         <div className="signin">
//             <div className="card">
//                 <div className="provider">
//                     <form action="http://localhost:3000/api/auth/callback/credentials" method="POST">
//                         <input type="hidden" name="csrfToken" value="c906efedc9064bb238db1dabf35efaeada408b553721883c9ab958c31e86386c"/>
//                         <div>
//                             <label className="section-header" for="input-username-for-credentials-provider">Email:</label>
//                             <input name="username" id="input-username-for-credentials-provider" type="text" placeholder="matt@gmail.com" label="Email:"/>
//                         </div>
//                         <div>
//                             <label className="section-header" for="input-password-for-credentials-provider">Password:</label>
//                             <input name="password" id="input-password-for-credentials-provider" type="password" placeholder="nextauth" label="Password:"/>
//                         </div>
//                         <button type="submit">Sign in with Credentials</button>
//                     </form>
//                     <hr/>
//                 </div>
//                 <div className="provider">
//                     <form action="http://localhost:3000/api/auth/signin/github" method="POST">
//                         <input type="hidden" name="csrfToken" value="c906efedc9064bb238db1dabf35efaeada408b553721883c9ab958c31e86386c"/>
//                         <input type="hidden" name="callbackUrl" value="/schedule"/>
//                         <button type="submit" className="button">
//                             <img loading="lazy" height="24" width="24" id="provider-logo" src="https://authjs.dev/img/providers/github.svg"/>
//                             <img loading="lazy" height="24" width="24" id="provider-logo-dark" src="https://authjs.dev/img/providers/github.svg"/>
//                             <span>Sign in with GitHub</span>
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     </div>
// </body>