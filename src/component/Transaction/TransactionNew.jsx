import { Typography, Card, Select, Form, Button } from "antd";
import "../../App.css";
import TableContainer from "../../modules/TableContainer";
import listTypes from "./TransactionListMap";

const { Option, OptGroup } = Select;
const { Title } = Typography;

export default function TransactionNew() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="container">
      <Card>
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <Title level={3}>Transaksi Baru</Title>
        </div>

        <Form labelCol={{ span: 4 }} wrapperCol={{ span: 18 }} layout="horizontal" form={form} onFinish={onFinish}>
          <Form.Item name="transaksi" label="Jenis Transaksi">
            <Select placeholder="Pilih Jenis Transaksi" allowClear>
              {listTypes.map((listGroup) => (
                <OptGroup key={listGroup.name} label={listGroup.name}>
                  {listGroup.children.map((c) => <Option key={c.value} value={c.value}>{c.name}</Option>)}
              </OptGroup>
              ))}
              </Select>
              </Form.Item>
          {[].concat(...listTypes.map((l) => l.children)).map((data) => {
            return (
              <Form.Item noStyle shouldUpdate={(prevValues, currentValues) => prevValues.transaksi !== currentValues.transaksi}>
                {({ getFieldValue }) => (getFieldValue("transaksi") === data.value ? data.component : null)}
              </Form.Item>
            );
          })}

          <Form.Item wrapperCol={{ offset: 10, span: 20 }}>
            <Button type="primary" htmlType="submit">
              Cari Agen
            </Button>
          </Form.Item>

          <TableContainer />
        </Form>
        </Card>
    </div>
  );
}
