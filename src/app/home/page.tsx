"use client";
import { purchaseService } from "@/api/purchaseApi";
import { Purchase } from "@/model/Purchase";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import ListItems from "../components/ListItems";
import PurchaseModal from "../components/PurchaseModal";

const InfoView = styled.section`
  display: flex;
  justify-content: space-between;
`;

export default function HomePage() {
  const [isPurchaseModalOpen, setPurchaseModalOpen] = useState<boolean>(false);
  const [puchaseInMonth, setPuchaseInMonth] = useState<number>(0);
  useEffect(() => {
    purchaseService.listAll().then((response) => {
      setPurchaseItems(response.data);
      if (response.data.length > 0) {
        setPuchaseInMonth(
          response.data
            .map((p) => p.price)
            .reduce((total, current, idx, array) => (total += current), 0)
        );
      }
    });
  }, [isPurchaseModalOpen]);

  const [purchaseItems, setPurchaseItems] = useState<Purchase[]>([]);
  const openPurchaseModal = () => {
    setPurchaseModalOpen(true);
  };
  const closePurchaseModal = () => {
    setPurchaseModalOpen(false);
  };

  return (
    <>
      <InfoView>
        <div>
          <span>Ganhos do mes</span>
          {/* <span>{puchaseInMonth}</span> */}
        </div>
        <div>
          <span>Gastos do mes</span>
          <span>{puchaseInMonth}</span>
        </div>
        <div>
          <span>Salto total</span>
          {/* <span>{puchaseInMonth}</span> */}
        </div>
        <div>
          <button type="button">Adicionar Ganho</button>
          <button type="button" onClick={openPurchaseModal}>
            Adicionar Gasto
          </button>
        </div>
      </InfoView>
      <PurchaseModal
        isModalOpen={isPurchaseModalOpen}
        closeModal={closePurchaseModal}
      />
      <section>
        <ListItems title="Gastos" items={purchaseItems} key="purchase-list" />
        <div>Lista de ganhos do mes</div>
      </section>
    </>
  );
}
