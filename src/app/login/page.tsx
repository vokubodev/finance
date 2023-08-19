"use client";
import { loginService } from "@/api/login";
import { User } from "@/public/model/User";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import LoginForm from "../components/LoginForm";

export default function Login() {
  useEffect(() => {
    localStorage.clear();
  });
  const router = useRouter();
  const { reset } = useForm();
  const [hidden, setHidden] = useState<boolean>(true);
  function login(data: User) {
    loginService.authenticate(data).then(({ data }) => {
      if (data[0]) {
        localStorage.setItem("user_id", data[0].id + "");
        router.push("/home");
      } else {
        setHidden(false);
        reset();
      }
    });
  }
  return (
    <>
      <h1>Login</h1>
      <p hidden={hidden}>Usuario ou senha invalidos</p>
      <LoginForm action={login} />
      <p>
        Se ainda não possui cadastro, <Link href="/register">clique aqui</Link>
      </p>
    </>
  );
}
