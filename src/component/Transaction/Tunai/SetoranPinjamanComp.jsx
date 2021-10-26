import React from "react";
import { Form, Input, Cascader } from "antd";
import SimpleMap from "../../LocationPicker/SImpleMap";
const options = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];

export default function SetoranPinjamanComp() {
  function onChange(value) {
    console.log(value);
  }

  return (
    <>
      <Form.Item name="nominalTransaksi" label="Nominal Transaksi">
        <Input type="number" addonBefore="Rp"></Input>
      </Form.Item>

      <Form.Item label="Alamat Saat Ini">
        <Form.Item name="provinsi">
          <Cascader options={options} placeholder="Provinsi/Kabupaten/Kecamatan" />
        </Form.Item>
        <Form.Item name="alamat">
          <Input.TextArea placeholder="Alamat Lengkap" />
        </Form.Item>

      <SimpleMap />
      </Form.Item>
    </>
  );
}
