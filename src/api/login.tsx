import { User } from "@/public/model/User";
import { api } from "./api";

export const loginService = { authenticate };

async function authenticate(loginData: User) {
  return await api.get<User[]>("/users", { params: loginData });
}
