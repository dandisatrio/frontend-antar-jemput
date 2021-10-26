import { Button, Card, Table } from "antd";
import { useState } from "react";
import TransactionModal from "../TransactionModal/TransactionModal";
import styles from "./index.module.less";

export default function TransactionCard({
  status,
  request,
  type,
  nominal,
  address,
  agent,
  agentAddress,
  transactionStatus,
}) {
  const [visible, setVisible] = useState(false);
  const columns = [
    {
      dataIndex: "key",
      key: "key",
    },
    {
      dataIndex: "separator",
      key: "separator",
    },
    {
      dataIndex: "value",
      key: "value",
    },
  ];
  const data = [
    {
      key: "Waktu Request",
      separator: ":",
      value: `${request}`,
    },
    {
      key: "Jenis Transaksi",
      separator: ":",
      value: `${type}`,
    },
    {
      key: "Nominal Transaksi",
      separator: ":",
      value: `Rp. ${nominal}`,
    },
    {
      key: "Alamat Anda",
      separator: ":",
      value: `${address}`,
    },
    {
      key: "Agen BRILink",
      separator: ":",
      value: `${agent}`,
    },
    {
      key: "Alamat Agen",
      separator: ":",
      value: `${agentAddress}`,
    },
    {
      key: "Status",
      separator: ":",
      value: `${transactionStatus}`,
    },
  ];
  return (
    <div>
      <Card className={styles.box}>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          showHeader={false}
        />
        <div
          style={{ display: "flex", justifyContent: "flex-end", marginTop: 10 }}
        >
          <Button
            type="primary"
            onClick={() => setVisible(true)}
            style={{
              backgroundColor:
                status === "berjalan"
                  ? "red"
                  : status === "batal"
                  ? "blue"
                  : status === "selesai"
                  ? "#FFD700"
                  : null,
              borderColor:
                status === "berjalan"
                  ? "red"
                  : status === "batal"
                  ? "blue"
                  : status === "selesai"
                  ? "#FFD700"
                  : null,
              borderRadius: 10,
              fontWeight: "bold",
              height: 40,
              fontFamily: "Poppins !important",
            }}
          >
            {status === "berjalan"
              ? "Batalkan"
              : status === "batal"
              ? "Hapus"
              : status === "selesai"
              ? "Beri Rating"
              : null}
          </Button>
        </div>
      </Card>
      <TransactionModal
        visible={visible}
        status={status}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
}
