import { useNavigate } from "@tanstack/react-router";
import { Button, Form, Input, Layout } from "antd";
import { FC } from "react";
import { DashboardRoute } from "../../routes/Dashboard.route";
import "./login.scss";

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};
export const Login: FC = () => {
  const [form] = Form.useForm<FieldType>();
  const navigate = useNavigate();
  return (
    <Layout className={"login-page"}>
      <Layout.Content>
        <Form
          name="login"
          layout="vertical"
          form={form}
          className={"login-page__form"}
        >
          <Form.Item<FieldType>
            label="E-mail"
            name="email"
            rules={[
              { required: true, message: "E-mail é obrigatório" },
              { type: "email", message: "E-mail inválido" },
            ]}
            hasFeedback
          >
            <Input type="email" size="large" required />
          </Form.Item>

          <Form.Item<FieldType>
            label="Senha"
            name="password"
            rules={[{ required: true }]}
            hasFeedback
          >
            <Input.Password
              size="large"
              placeholder="Digite sua senha"
              required
            />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            onClick={() => navigate({ to: DashboardRoute.to })}
          >
            Entrar
          </Button>
        </Form>
      </Layout.Content>
    </Layout>
  );
};
