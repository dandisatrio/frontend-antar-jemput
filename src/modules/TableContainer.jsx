import { Button, Pagination } from "antd";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { axiosInstace } from "../shared/AxiosInstace";
import TableAgen from "./TableAgen";
const columns = [
  {
    title: "Nama Agen",
    dataIndex: "agent_name",
    key: "agent_name",
    width: 400,
  },
  {
    title: "Nomor WhatsApp",
    dataIndex: "no_wa",
    key: "no_wa",
  },
  {
    title: "Alamat",
    dataIndex: "bitly_url",
    key: "bitly_url",
  },
  {
    title: "Action",
    render: () => (
      <Button type="primary" htmlType="submit">
        Pilih Agen
      </Button>
    ),
  },
];

export default function TableContainer() {
  const [dataSource, setDataSource] = React.useState([]);
  const history = useHistory();
  const location = useLocation();
  const [isLoading, setIsLoading] = React.useState(false);
  const [width, setWidth] = React.useState(0);

  const [page, setPage] = React.useState(1);
  const onPageChange = (page) => {
    setPage(page);
    history.push({ pathname: "/", search: `?page=${page}` });
  };

  useEffect(() => {
    const data = new URLSearchParams(location.search);
    setPage(data.get("page") ? parseInt(data.get("page"), 10) : 1);
  }, [location.search]);

  useEffect(() => {
    const getAllAgents = async () => {
      setIsLoading(true);
      const { data } = await axiosInstace.get("/agents", {
        
      });
      setDataSource(data);
      setIsLoading(false);
    };
    getAllAgents();
  }, [page]);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
      <TableAgen columns={columns} dataSource={dataSource} isLoading={isLoading} page={page} onPageChange={onPageChange} />

      <Pagination
        style={{
          paddingTop: 24,
          width: "fit-content",
          marginLeft: "auto",
          marginRight: "auto",
          paddingBottom: 24,
        }}
        onChange={onPageChange}
        defaultCurrent={1}
        current={page}
        total={dataSource?.pagination?.total_count}
        showSizeChanger={false}
      />
    </>
  );
}
