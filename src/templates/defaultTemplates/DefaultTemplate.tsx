import { Outlet, useNavigate } from "@tanstack/react-router";
import { Layout, Menu } from "antd";
import { FC } from "react";
import Suitcase from "../../assets/suitcase.png";
import { DashboardRoute } from "../../routes/Dashboard.route";
import { ProcessRoute } from "../../routes/Process.route";
import "./defaultTemplate.scss";
export const DefaultTemplate: FC = () => {
  const navigate = useNavigate();
  return (
    <Layout className="default-template">
      <Layout.Sider>
        {/* <div> */}
        <img src={Suitcase} alt="logo" />
        {/* </div> */}
        <Menu
          theme="dark"
          items={[
            {
              key: "1",
              label: "Dashboard",
              onClick: () => navigate({ to: DashboardRoute.to }),
            },
            {
              key: "2",
              label: "Processos",
              type: "group",
              children: [
                {
                  key: "2.1",
                  label: "Listar",
                  onClick: () => navigate({ to: ProcessRoute.to }),
                },
              ],
            },
            {
              key: "3",
              label: "Cadastrar",
              type: "group",
              children: [
                {
                  key: "3.1",
                  label: "Processo",
                },
              ],
            },
          ]}
        />
      </Layout.Sider>

      <Layout>
        <Layout.Header></Layout.Header>
        <Layout.Content>
          <Outlet />
        </Layout.Content>
        <Layout.Footer>
          <h3>Footer</h3>
        </Layout.Footer>
      </Layout>
    </Layout>
  );
};
