import { Modal } from "antd";
import ModalConfirm from "./ModalConfirm";
import ModalRating from "./ModalRating";

export default function TransactionModal({ visible, onCancel, status }) {
  return (
    <Modal visible={visible} onCancel={onCancel} centered footer={null}>
      {status === "selesai" ? (
        <ModalRating />
      ) : (
        <ModalConfirm onCancel={onCancel} onClick={onCancel} status={status} />
      )}
    </Modal>
  );
}
