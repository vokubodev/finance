import { FieldValues } from "react-hook-form";
import { api } from "./api";

export const loginService = { authenticate };

async function authenticate(loginData: FieldValues) {
  return await api.get("/users", { params: loginData });
}
