import { Purchase } from "@/model/Purchase";
import { api } from "./api";

export const purchaseService = { addPurchase, listAll };

async function addPurchase(data: Purchase) {
  return await api.post("/purchases", data);
}

async function listAll() {
  return await api.get<Purchase[]>("/purchases");
}
