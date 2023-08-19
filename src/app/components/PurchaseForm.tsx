import { purchaseService } from "@/api/purchaseApi";
import { Purchase } from "@/model/Purchase";
import { useForm } from "react-hook-form";

export default function PurchaseForm({ closeModal }: { closeModal: Function }) {
  const { register, handleSubmit } = useForm<Purchase>();

  function submitItem(data: any) {
    data.userId = Number(localStorage.getItem("user_id"));
    data.date = new Date().toDateString();
    data.price = parseFloat(data.price);
    purchaseService.addPurchase(data).then((response) => {
      if (response.status !== 201) {
        alert("Erro ao inserir Item");
        return;
      }
      closeModal();
    });
  }

  return (
    <div>
      <h3>Novo gasto</h3>
      <form onSubmit={handleSubmit(submitItem)}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" {...register("name")} />
        </div>
        <div>
          <label htmlFor="value">Valor:</label>
          <input type="text" {...register("price")} />
        </div>
        <div>
          <legend>Tipo:</legend>
          <input
            type="radio"
            id="credit-card"
            value="credit-card"
            {...register("type")}
          />
          <label htmlFor="credit-card">Cartão de crédito</label>
          <input type="radio" id="money" value="money" {...register("type")} />
          <label htmlFor="money">Dinheiro</label>
        </div>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}

function parseFloat(value: string) {
  value = value.replace(",", ".");
  return Number.parseFloat(value);
}
