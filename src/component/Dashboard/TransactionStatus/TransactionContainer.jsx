import { Typography } from "antd";
import TransactionCard from "./TransactionCard";
import styles from "./index.module.less";

export default function TransactionContainer() {
  return (
    <div className={styles.content}>
      <Typography.Title>Transaksi saat ini</Typography.Title>
      <TransactionCard
        status="batal"
        transactionStatus="Selesai pada 09 September 2021 | 10.20 WIB"
        request="09 September 2021 | 10:00 WIB"
        type="Setoran Pinjaman"
        nominal="10.000.000"
        address="Jl. Kubu Anyar No.10"
        agent="Asep The World"
        agentAddress="Jl. Kubu Anyar No.20"
      />
    </div>
  );
}
