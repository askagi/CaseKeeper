import {  Outlet, useNavigate,  useRouterState } from "@tanstack/react-router";
import { Layout, Menu, MenuProps } from "antd";
import { FC,  useState } from "react";
import Suitcase from "../../assets/suitcase.png";
import { DashboardRoute } from "../../routes/Dashboard.route";
import { ProcessRoute } from "../../routes/Process.route";
import "./defaultTemplate.scss";


export const DefaultTemplate: FC = () => {
  const navigate = useNavigate();
  const routerState = useRouterState();
  const [currentPath, setCurrentPath] = useState(routerState.location.pathname.replace('/',''))
  

  const handleNavigate: MenuProps['onClick']  = (event) => {
    setCurrentPath(event.key)
  }

  return (
    <Layout className="default-template">
      <Layout.Sider>
        {/* <div> */}
        <img src={Suitcase} alt="logo" />
        {/* </div> */}
        <Menu
          theme="dark"
          selectedKeys={[currentPath]}
          onClick={handleNavigate}
          items={[
            {
              key: "dashboard",
              label: "Dashboard",
              onClick: () => navigate({ to: DashboardRoute.to }),
            },
            {
              key: "process",
              label: "Processos",
              type: "group",
              children: [
                {
                  key: "process",
                  label: "Listar",
                  onClick: () => navigate({ to: ProcessRoute.to }),
                },
              ],
            },
            {
              key: "register",
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
