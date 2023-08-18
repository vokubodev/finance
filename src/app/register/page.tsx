"use client";
import { userService } from "@/api/user";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import LoginForm from "../components/LoginForm";

export default function Register() {
  const router = useRouter();
  const register = (data: FieldValues) => {
    userService.create(data).then((created) => {
      if (created) router.push("/login");
      else alert("Erro ao criar usuario");
    });
  };
  return (
    <>
      <LoginForm action={register} />
    </>
  );
}
