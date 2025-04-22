import { z } from "zod";

export type APIMapping = {
  apiLabel: string;
  screenLabel: string;
};

export const RequiredString = (message: string) =>
  z.string({ required_error: message }).trim().min(1, message);
