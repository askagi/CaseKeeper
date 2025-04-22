import { AliasToken } from "antd/es/theme/internal";

type Theme = {
  token: Partial<AliasToken>;
};

export const defaultTheme: Theme = {
  token: {
    colorPrimary: "#1677ff",
  },
};
