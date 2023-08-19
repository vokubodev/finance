import { PaymentMethod } from "./PaymantMethod";

export interface Purchase {
  id: number;
  name: string;
  price: number;
  date: string;
  type: PaymentMethod;
  userId: number;
}
