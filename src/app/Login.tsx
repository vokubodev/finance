"use client";
import { loginService } from "@/api/login";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import LoginForm from "./components/LoginForm";

export default function Login() {
  function login(data: FieldValues) {
    loginService.authenticate(data).then((user) => {
      console.log(user);
    });
  }
  return (
    <>
      <h1>Login</h1>
      <LoginForm action={login} />
      <p>
        Se ainda não possui cadastro, <Link href="/register">clique aqui</Link>
      </p>
    </>
  );
}
