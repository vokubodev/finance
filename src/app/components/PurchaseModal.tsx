import { MouseEventHandler } from "react";
import PurchaseForm from "./PurchaseForm";

export default function PurchaseModal({
  isModalOpen,
  closeModal,
}: {
  isModalOpen: boolean;
  closeModal: MouseEventHandler<HTMLButtonElement>;
}) {
  if (!isModalOpen) return null;

  return (
    <div>
      <div>
        <button type="button" onClick={closeModal}>
          x
        </button>
      </div>
      <div>
        <PurchaseForm closeModal={closeModal} />
      </div>
    </div>
  );
}
