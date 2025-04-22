import { Card, Col, Row, Space } from "antd";
import { FC } from "react";

export const Dashboard: FC = () => {
  return (
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      <Row wrap gutter={[16, 16]}>
        <Col md={8} sm={24}>
          <Card>Processos concluídos</Card>
        </Col>
        <Col md={8} sm={24}>
          <Card>Card content</Card>
        </Col>
        <Col md={8} sm={24}>
          <Card>Card content</Card>
        </Col>
      </Row>

      <Row>
        <Col md={24}>
          <Card>Card content</Card>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col md={12}>
          <Card>Card content</Card>
        </Col>
        <Col md={12}>
          <Card>Card content</Card>
        </Col>
      </Row>

      <Row>
        <Col md={24}>
          <Card>Card content</Card>
        </Col>
      </Row>
    </Space>
  );
};
