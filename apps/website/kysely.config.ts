import { defineConfig } from "kysely-ctl";
import { dialect } from "./src/db/index";
import { CamelCasePlugin } from "kysely";

export default defineConfig({
  dialect: dialect,
  plugins: [new CamelCasePlugin()],
  migrations: {
    migrationFolder: "src/db/migrations",
  },
  seeds: {
    seedFolder: "src/db/seeds",
  },
});
