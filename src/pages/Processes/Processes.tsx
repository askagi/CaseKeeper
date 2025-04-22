import { Col, Row, Spin, Table } from "antd";
import { ColumnType } from "antd/es/table";
import { FC, Suspense } from "react";
import { processesDataMock } from "../../mock/processes.mock";

export const Processes: FC = () => {
  console.log(
    Object.keys(processesDataMock[0]).map((key) => {
      const column: ColumnType = {
        title: key,
        dataIndex: key,
        key,
      };
      return column;
    })
  );

  const columnKeys = Object.keys(processesDataMock[0]).filter((key) => {
    if (
      key === "number" ||
      key === "link" ||
      key === "author" ||
      key === "defendant" ||
      key === "store" ||
      key === "status" ||
      key === "judicialDistrict"
    ) {
      return key;
    }
  });
  console.log({ columnKeys });

  return (
    <Suspense fallback={<Spin size="large" fullscreen />}>
      <Row>
        <Col>
          <h1>Listagem de processos</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table
            columns={columnKeys.map((key) => {
              return {
                title: key,
                dataIndex: key,
                key,
              };
            })}
            dataSource={processesDataMock}
            pagination={{ pageSize: 10, position: ["bottomCenter"] }}
            scroll={{ y: 70 * 5 }}
          />
        </Col>
      </Row>
    </Suspense>
  );
};
