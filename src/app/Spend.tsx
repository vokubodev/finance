"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function () {
  const { register, handleSubmit, reset } = useForm();
  const [output, setOutput] = useState<string>();
  function submit(data: any) {
    data.data = new Date();
    setOutput(JSON.stringify(data, null, 2));
  }
  return (
    <>
      <h2>Novo gasto</h2>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" {...register("name")} />
        </div>
        <div>
          <label htmlFor="value">Valor:</label>
          <input type="number" id="value" {...register("value")} />
        </div>
        <div>
          <legend>Tipo:</legend>
          <input
            type="radio"
            id="credit-card"
            value="credit-card"
            title="Cartão de crédito"
            {...register("type")}
          />
          <label htmlFor="credit-card">Cartão de crédito</label>
          <input type="radio" id="money" value="money" {...register("type")} />
          <label htmlFor="money">Dinheiro</label>
        </div>
        <button type="submit">Adicionar</button>
      </form>
      <pre>{output}</pre>
    </>
  );
}
