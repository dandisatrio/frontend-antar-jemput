import { Button, Input, Rate, Typography } from "antd";

export default function ModalRating() {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        marginLeft: "auto",
        marginRight: "auto",
        alignItems: "center",
      }}
    >
      <Typography.Title
        style={{
          fontWeight: 700,
          fontSize: "20px",
        }}
      >
        Transaksi Selesai
      </Typography.Title>
      <Typography.Text
        style={{
          fontWeight: 500,
          fontSize: "16px",
        }}
      >
        Beri Rating kepada Agen kami
      </Typography.Text>
      <Rate allowHalf style={{ fontSize: "36px" }} />
      <Input.TextArea placeholder="Masukkan pesan Anda..." allowClear />
      <Button
        type="primary"
        style={{
          backgroundColor: "#FFD700",
          borderColor: "#FFD700",
          borderRadius: "4px",
          fontWeight: "bold",
          width: "100px",
          height: "35px",
          marginTop: "1rem",
        }}
      >
        Beri Rating
      </Button>
    </div>
  );
}
