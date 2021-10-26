import { Button, Typography } from "antd";

export default function ModalConfirm({ onClick, onCancel, status }) {
  return (
    <div>
      <Typography.Title
        style={{
          fontWeight: 700,
          fontSize: "20px",
          marginBottom: "1rem",
        }}
      >
        {status === "berjalan"
          ? "Transaksi Dibatalkan"
          : status === "batal"
          ? "Hapus Transaksi"
          : null}
      </Typography.Title>
      <Typography.Text
        style={{
          fontWeight: 500,
          fontSize: "16px",
        }}
      >
        {status === "berjalan"
          ? "Apakah anda yakin ingin membatalkan transaksi ini?"
          : status === "batal"
          ? "Apakah anda yakin ingin menghapus transaksi ini?"
          : null}
      </Typography.Text>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "1rem",
        }}
      >
        <Button
          type="ghost"
          style={{
            borderRadius: "4px",
            fontWeight: "bold",
            marginTop: "1rem",
            marginRight: 10,
          }}
          onClick={onCancel}
        >
          Tidak
        </Button>
        <Button
          type="primary"
          style={{
            borderRadius: "4px",
            fontWeight: "bold",
            marginTop: "1rem",
          }}
          onClick={onClick}
        >
          Ya
        </Button>
      </div>
    </div>
  );
}
