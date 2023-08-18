import { FieldValues } from "react-hook-form";
import { api } from "./api";

export const userService = {
  create,
  patch,
  delete: remove,
  findById,
  findByUsername,
};

async function create(user: FieldValues) {
  return await api.post("/users", user);
}
async function patch(userId: number, data: any) {
  return await api.patch(`/users/${userId}`, data);
}
async function remove(userId: number) {
  return await api.delete(`/users/${userId}`);
}
async function findById(userId: number) {
  return await api.get(`/users/${userId}`);
}
async function findByUsername(username: string) {
  return await api.get(`/user?username=${username}`);
}
