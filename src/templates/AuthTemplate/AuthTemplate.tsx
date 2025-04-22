import { Outlet } from "@tanstack/react-router";
import { Flex, Layout } from "antd";
import { FC } from "react";
import Mala from "../../assets/suitcase.png";
import "./AuthTemplate.scss";

export const AuthTemplate: FC = () => {
  return (
    <Layout className="auth-template">
      <Layout.Content>
        <Flex
          gap="middle"
          justify="space-between"
          align="center"
          // style={{ height: "100vh" }}
        >
          <div className="auth-template__container-image">
            <img src={Mala} alt="suitcase" />
          </div>

          <Outlet />
        </Flex>
      </Layout.Content>
    </Layout>
  );
};
