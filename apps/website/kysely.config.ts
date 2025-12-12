import { defineConfig } from "kysely-ctl";
import { dialect } from "./src/db/index";

export default defineConfig({
  dialect: dialect,
  migrations: {
    migrationFolder: "src/db/migrations",
  },
  seeds: {
    seedFolder: "src/db/seeds",
  },
});
