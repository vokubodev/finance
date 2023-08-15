import { UserLogin } from "@/model/UserLogin";
import axios from "axios";
import { FieldValues } from "react-hook-form";

const BASE_URL = "http://localhost:3000";
const api = {
  login: function login(login: FieldValues) {
    return get(`/users?username=${login.username}&password=${login.password}`);
  },
};

async function get(path: string): Promise<UserLogin | null> {
  try {
    const response = await axios.get(BASE_URL + path);
    return response.data;
  } catch (err) {
    alert("Erro na requisicao: " + err);
    return null;
  }
}

export default api;
