import { db } from "@/db";
import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  database: {
    db: db,
    type: "postgres",
  },
  account: {
    modelName: "profile",
  },
  plugins: [nextCookies()],

  // Providers

  emailAndPassword: {
    enabled: true,
  },
});
