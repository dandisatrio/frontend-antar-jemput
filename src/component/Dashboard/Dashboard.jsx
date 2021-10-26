import { Row, Col, Card, Empty } from "antd";
import { useState } from "react";
import useUser from "../../hooks/useUser";
import TransactionContainer from "./TransactionStatus/TransactionContainer";

export default function Dashboard() {
  const [user] = useUser();
  const [isEmpty] = useState(false);
  return (
    <div
      data-testid="dashboardContainer"
      className="container"
      style={{
        textAlign: "center",
      }}
    >
      <Card data-testid="checkCard">
        <Row data-testid="checkRow">
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            {isEmpty ? (
              <>
                <Empty
                  image={Empty.PRESENTED_IMAGE_SIMPLE}
                  description={false}
                />
                <h4 style={{ fontWeight: "500" }}>Halo, {user.name}</h4>
                <br />
                <p data-testid="textContent">
                  Anda sedang tidak melakukan transaksi saat ini
                </p>
              </>
            ) : (
              <TransactionContainer />
            )}
          </Col>
        </Row>
      </Card>
    </div>
  );
}
