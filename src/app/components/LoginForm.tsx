import { usePathname } from "next/navigation";
import { useForm } from "react-hook-form";

export default function LoginForm({ action }: { action: any }) {
  const { register, handleSubmit } = useForm();
  const pathname = usePathname();
  return (
    <form onSubmit={handleSubmit(action)}>
      <div>
        <label htmlFor="username">Usuário:</label>
        <input type="text" id="username" {...register("username")} />
      </div>
      <div>
        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" {...register("password")} />
      </div>
      <button type="submit">
        {pathname.includes("register") ? "Registrar" : "Entrar"}
      </button>
    </form>
  );
}
