import { Table } from "antd";
import React from "react";

export default function TableAgen({ dataSource, columns, loading }) {
  return (
    <div className="App">
      <Table pagination={false} dataSource={dataSource.data} columns={columns} loading={loading} />
    </div>
  );
}
