import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit } = useForm();

  function login(data: any) {}

  return (
    <>
      <form onSubmit={handleSubmit(login)}>
        <div>
          <label htmlFor="username">Usuário:</label>
          <input type="text" id="username" {...register("username")} />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" {...register("password")} />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </>
  );
}
