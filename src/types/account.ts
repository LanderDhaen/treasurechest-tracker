import { createSelectSchema } from "drizzle-zod";
import { account } from "@/db/schema/account";
import { selectTownhallSchema } from "./townhall";

const selectAccountSchema = createSelectSchema(account)
  .omit({
    createdAt: true,
    updatedAt: true,
    townhallID: true,
  })
  .extend({
    townhall: selectTownhallSchema,
  });

export type Account = typeof selectAccountSchema._type;
